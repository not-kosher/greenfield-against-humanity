const Player = require('./Player');

class Game {
  constructor(roomname, username, deck) {
    this.name = roomname;
    this.turnPhase = 'loading';

    this.deck = {
      blackCards: _.shuffle(deck.blackCards),
      whiteCards: _.shuffle(deck.whiteCards)
    };
    this.discarded = {
      blackCards: [],
      whiteCards: []
    };

    // array of submission objects with {username, show, chosen, cards (an array of submitted cards)}
    this.submissions = [];

    this.blackCard;
    this.players = [];
    this.czarIndex;
    this.playerCount = 0;

    this.addPlayer(username);
  }

  addPlayer(username) {
    this.playerCount += 1;
    let player = new Player(username, this.playerCount);
    this.players.push(player);
  }

  refillDeck() {
    if (this.deck.blackCards.length === 0) {
      this.deck.blackCards = _.shuffle(this.discarded.blackCards);
      this.discarded.blackCards = [];
    }
    if (this.deck.whiteCards.length === 0) {
      this.deck.whiteCards = _.shuffle(this.discarded.whiteCards);
      this.discarded.whiteCards = [];
    }
  }

  getCzar() {
    return this.players[this.czarIndex].username;
  }

  getPlayer(username) {
    return this.players.find((player) => player.username === username);
  }

  getSubmission(username) {
    return this.submissions.find((submission) => submission.username === username);
  }

  updatePhase(phase) {
    this.turnPhase = phase;
    return this.turnPhase;
  }

  sortPlayers() {
    // sort by time since the player last pooped
    this.players.sort((a, b) => a.poopTime - b.poopTime);
  }

  // helper function for this.startTurn, doesn't have to be called in controller
  dealBlackCard() {
    if (this.blackCard) {
      this.discarded.blackCards.push(this.blackCard);
    }
    if (!this.deck.blackCards.length) {
      this.refillDeck();
    }
    this.blackCard = this.deck.blackCards.pop();
    // return this.blackCard;
  }

  // helper function for this.startTurn, doesn't have to be called in controller
  discardSubmitted() {
    // pull the cards off the submission objects
    if (this.submissions.length) {
      const discards = _.flatten(this.submissions.map((submission) => {
        return submission.cards;
      }));
      this.discarded.whiteCards.push(...(discards));
      this.submissions = [];
    }
  }

  // helper function for this.startTurn, doesn't have to be called in controller
  advanceCzar() {
    if (this.czarIndex === undefined) {
      this.czarIndex = 0;
      this.players[this.czarIndex].toggleCzar();
    } else {
      this.players[this.czarIndex].toggleCzar();
      this.czarIndex = this.czarIndex % this.playerCount;
      this.players[this.czarIndex].toggleCzar();
    }
  }
  
  startTurn() {
    this.dealBlackCard();
    this.discardSubmitted();
    this.advanceCzar();
  }

  // helper function for this.refillHand
  drawWhiteCard() {
    if (!this.deck.whiteCards.length) {
      this.refillDeck();
    }
    return this.deck.whiteCards.pop();
  }

  refillHand(username) {
    const player = this.getPlayer(username);
    while (player.cards.length < 7) {
      player.cards.push(this.drawWhiteCard());
    }
    return player.cards;
  }

  submitCard(username, cards) {
    // remove the submitted cards from the player's hand
    const player = this.getPlayer(username);
    player.cards = player.cards.filter((card) => {
      return cards.every((c) => c.text !== card.text);
    });

    // add them to the submissions
    this.submissions.push({
      username,
      cards,
      show: false,
      chosen: false,
    });
  }
  
  haveAllSubmitted() {
    return this.submissions.length === this.playerCount - 1;
  }

  revealCard(username) {
    const revealed = this.getSubmission(username);
    revealed.show = true;
    return this.submissions;
  }

  areAllCardsRevealed() {
    const revealedCount = this.submissions.reduce((count, submission) => {
      if (submission.show) {
        count++;
      }
      return count;
    }, 0);
    return revealedCount === this.submissions.length;
  }

  selectWinner(username) {
    this.getSubmission(username).chosen = true;
    this.getPlayer(username).addPoint();
  }

}

module.exports = Game;