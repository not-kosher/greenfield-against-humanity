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

  closeRoom(roomname) {
    this.rooms = this.rooms.filter((room) => {
      return room.name !== roomname;
    });
  }

  endGame(roomname) {
    // removes game from games collection
  }

  addToLobby(roomname) {
    // searches for room in games and adds back to the lobby
    // needs to know created by still for displaying on front end
  }
}

module.exports = new GameManager();
