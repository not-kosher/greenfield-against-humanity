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
    this.rooms = [];
  }

  createGame(roomname, username, deck) {
    const newGame = new Game(roomname, username, deck);
    this.games.push(newGame);
    this.rooms.push(roomname);
  }


}



module.exports = new GameManager();