class Game {
  constructor(roomname, username, deck) {
    this.name = roomname;
    this.turnPhase = 'loading';
    this.deck = deck;
    this.discarded = {
      blackCards: [],
      whiteCards: []
    };
    this.submittedCards = [];
    this.blackCard = {};
    this.players = [];
    this.playerCount = 0;
    this.addPlayer(username);
  }

  addPlayer(username) {
    this.playerCount += 1;
    this.players.push({
      username: username,
      isCzar: false,
      points: 0,
      cards: [],
      playerNum: this.playerCount
    });
  }

  shuffle() {
    // shuffles the deck
  }

  refillDeck() {
    // refill the deck when it is empty
    // if black or white cards are empty take from discard and put back in deck, reshuffle 
  }

  dealBlackCard() {
    // move current black card to discard pile and draw the next one
    // return the new black card
  }

  discardSubmitted() {
    // move submitted cards to the discard pile
    // remove the show and chosen properties from them
  }

  sortPlayers() {
    // sort player array to determine order
  }

  startTurn() {
    // discard any submitted cards
    // set next player to be the czar (or first player if none are)
    // deal a black card
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

class GameManager {
  constructor() {
    this.games = {};
    this.rooms = [];
  }

  createGame(roomname, username, deck) {
    const newGame = new Game(roomname, username, deck);
    this.games[roomname] = newGame;
    this.rooms.push({
      name: roomname,
      createdBy: username
    });
  }

  addPlayer(roomname, username) {
    if (this.games[roomname]) {
      this.games[roomname].addPlayer(username);
    } else {
      console.log('game room not found, did not add player');
    }
  }

  getRoom(roomname) {
    if (this.games[roomname]) {
      return this.games[roomname];
    } else {
      console.log('game room not found, did not add player');
    }
  }

  closeRoom(roomname) {
    // remove room from list of rooms
    // when a room creator closes a room to start a game
  }
}



module.exports = new GameManager();