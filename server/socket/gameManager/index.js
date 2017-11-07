const Game = require('./Game');

class GameManager {
  constructor() {
    this.games = {};
    this.rooms = [];
  }

  createGame(roomname, username, deck, pointsToWin) {
    const newGame = new Game(roomname, username, deck, pointsToWin);
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

  closeRoom(roomname) {
    this.rooms = this.rooms.filter((room) => {
      return room.name !== roomname;
    });
  }

  endGame(roomname) {
    delete this.games[roomname];
  }

  addToLobby(roomname) {
    this.rooms.push({
      name: roomname,
      createdBy: this.games[roomname].createdBy
    });
  }
}

module.exports = new GameManager();