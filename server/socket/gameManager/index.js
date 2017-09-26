const Game = require('./Game');

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
      console.log('game room not found');
    }
  }

  closeRoom(roomname) {
    // remove room from list of rooms
    // when a room creator closes a room to start a game
  }
}

module.exports = new GameManager();
