const GameManager = require('../GameManager.js');

const enterLobby = (io, client) => {
  client.join('lobby');
  //send this only to the client who joined the room
  client.emit('allRooms', GameManager.rooms);
};

const createRoom = (io, client, roomname, username, deck) => {    
  client.leave('lobby');
  //NEED TO GRAB DECK FROM DB
  GameManager.createGame(roomname, username, deck);
  io.to('lobby').emit('newRoom', roomname);
  client.join(roomname);
  client.emit('canJoinRoom', roomname);
};

const joinRoom = (io, client, roomname, username) => {
  client.leave('lobby');
  //------TODO--------
  //add the username to the game object at roomname key

  client.join(roomname);
  //emit just to the client that they have joined room
  //this will then trigger the page to render
  client.emit('canJoinRoom', roomname);
  //emit to people curently in the room the new object to rerender their page
  client.broadcast.to(roomname).emit('updateGameStatus', 'game object gets sent here');
};

module.exports = {
  enterLobby,
  createRoom,
  joinRoom
};

