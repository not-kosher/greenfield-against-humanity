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
    this.submittedCards = [];
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

  dealBlackCard() {
    if (this.blackCard) {
      this.discarded.blackCards.push(this.blackCard);
    }
    this.blackCard = this.deck.blackCards.pop();
    // return this.blackCard;
  }

  discardSubmitted() {
    // revert to original state of the white card before adding to discard pile
    if (this.submittedCards.length) {
      this.submittedCards.map((card) => {
        delete card.show;
        delete card.chosen;
        delete card.username;
        return card;
      });
      this.discarded.whiteCards.push(...(this.submittedCards));
      this.submittedCards = [];
    }
  }

  sortPlayers() {
    // sort by time since the player last pooped
    this.players.sort((a, b) => a.poopTime - b.poopTime);
  }

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
    this.discardSubmitted();
    this.dealBlackCard();
    this.advanceCzar();
  }

  drawWhiteCard() {
    // removes the next white card from the deck and returns it
  }

  refillHand(username) {
    // find the matching player in the list and fill their hand up to 7 cards
    // draw a white card until hand is at 7
    // return the new hand of that player
  }

  updatePhase(phase) {
    // set game's phase
    // Submission, Revelation, Judgment, End
    // return the new phase
  }

  submitCard(player, cards) {
    // cards is array 
    // finds the card or cards in the player's hand
    // removes it from the players hand
    // add properties to the card object:
    // show: false, chosen: false, username: user who submitted
    // adds that card to the submitted cards array
    // return the submitted cards array
  }
  
  haveAllSubmitted() {
    // returns whether all players have submitted cards
  }

  revealCard(username) {
    // look for card in the submitted cards array and set show to true
    // return the submitted cards array
  }

  areAllCardsRevealed() {
    // returns whether all submitted cards have been shown
  }

  selectWinner(username) {
    // look for card in the submitted cards array and set chosen to true
    // increase that players points in the players array
    // return the submitted cards array
  }

}

module.exports = Game;