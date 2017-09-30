const _ = require('lodash');
const Player = require('./Player');

class Game {
  constructor(roomname, username, deck, pointsToWin = 1) {
    this.name = roomname;
    this.createdBy = username;
    this.messages = [];
    this.turnPhase = 'loading';
    this.blackCard;
    this.players = [];
    this.czarIndex;
    this.pointsToWin = pointsToWin;
    this.numStaying = 0; // used at end of game to check for restart
    this.winner;

    this.deck = {
      blackCards: _.shuffle(deck.blackCards),
      whiteCards: _.shuffle(deck.whiteCards)
    };
    this.discarded = {
      blackCards: [],
      whiteCards: []
    };

    // array of submission objects with 
    // {username, show, chosen, cards}
    // cards is array of submitted white card objects
    this.submissions = [];

    this.addPlayer(username);
  }

  addMessage(username, text) {
    this.messages.push({username, text});
  }

  getLatestMessages() {
    return this.messages.slice(this.messages.length - 100);
  }

  addPlayer(username) {
    const player = new Player(username);
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

  submitPoopTime(username, poopTime) {
    const player = this.getPlayer(username);
    player.poopTime = poopTime;
  }

  haveAllSubmittedPoopTime() {
    return this.players.every(player => player.poopTime !== undefined);
  }

  sortPlayers() {
    // sort by time since the player last pooped
    this.players.sort((a, b) => a.poopTime - b.poopTime);
  }

  discardBlackCard() {
    if (this.blackCard) {
      this.discarded.blackCards.push(this.blackCard);
      this.blackCard = undefined;
    }
  }

  discardHand(player) {
    this.discarded.whiteCards = this.discarded.whiteCards.concat(player.cards);
    player.cards = [];
  }

  // helper function for this.startTurn, doesn't have to be called in controller
  dealBlackCard() {
    if (this.blackCard) {
      this.discardBlackCard();
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
      this.discarded.whiteCards.push(...discards);
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
      this.czarIndex = (this.czarIndex + 1) % this.players.length;
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
    return this.submissions.length === this.players.length - 1;
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
    const winner = this.getPlayer(username);
    winner.addPoint();
    if (winner.points === this.pointsToWin) {
      this.winner = winner.username;
    }
  }

  getWinner() {
    return this.winner;
  }

  removePlayer(username) {
    this.players = this.players.filter((player) => {
      // discard the player's hand before they leave
      if (player.username === username) {
        this.discardHand(player);
      }
      return player.username !== username;
    });
    if (this.createdBy === username) {
      this.createdBy = undefined;
    }
  }

  updateCreator() {
    if (!this.createdBy && this.players.length) {
      this.createdBy = this.players[0].username;
    }
    return this.createdBy;
  }

  increaseNumStaying() {
    this.numStaying++;
  }

  allPlayersDecided() {
    console.log(this.numStaying, ' and ', this.players.length);
    return this.numStaying === this.players.length;
  }

  reset() {
    // set game back to original values
    this.czarIndex = undefined;
    this.numStaying = 0;
    this.winner = undefined;
    this.turnPhase = 'loading';

    // discard all cards
    this.discardBlackCard();
    this.discardSubmitted();
    this.players.forEach((player) => {
      this.discardHand(player);
      player.reset(); // also reset player's attributes
    });

    // refill deck and shuffle
    this.deck.blackCards = _.shuffle(this.deck.blackCards.concat(this.discarded.blackCards));
    this.deck.whiteCards = _.shuffle(this.deck.whiteCards.concat(this.discarded.whiteCards));

    this.discarded.blackCards = [];
    this.discarded.whiteCards = [];
  }
}

module.exports = Game;