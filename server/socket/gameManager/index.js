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

  getRoom(roomname) {
    if (this.games[roomname]) {
      return this.games[roomname];
    } else {
      console.log('game room not found');
    }
  }

  // when a room creator closes a room to start a game
  closeRoom(roomname) {
    this.rooms = this.rooms.filter((room) => {
      return room.name !== roomname;
    });
  }
}

module.exports = new GameManager();
