class Game {
  constructor(roomname, username, deck) {
    this.name = roomname;
    this.playerCount = 1;
    this.deck = deck;
    this.turnPhase = '';
    this.players = {
      username: {
        isCzar: true,
        points: 0,
        cards: [],
        playerNum: 1
      }
    };
    this.submittedCards = [];
  }

  addPlayer(username) {
    this.playerCount += 1;
    this.players[username] = {
      isCzar: false,
      points: 0,
      cards: [],
      playerNum: this.playerCount
    };
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

}



module.exports = new GameManager();