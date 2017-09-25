class Game {
  constructor(roomname, username, deck) {
    this.name = roomname;
    this.deck = deck;
    this.turnPhase = '';
    this.players = {
      username: {
        isCzar: true,
        points: 0,
        cards: []
      }
    };
    this.submittedCards = [];
  }
}

class GameManager {
  constructor() {
    this.games = {};
  }

  createGame(roomname, username, deck) {
    //make new game instance
    const newGame = new Game(roomname, username, deck);
    //add game instance to games object
    this.games.push(newGame);
  }
}



module.exports = new GameManager();