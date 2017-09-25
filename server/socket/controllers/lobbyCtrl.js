const enterLobby = (io, client) => {
  client.join('lobby');
  //send this only to the client who joined the room
  client.emit('allRooms', 'rooms array here');
};

const createRoom = (io, client, roomname, username, deck) => {    
  client.leave('lobby');

  //create a new game object at the key roomname, and pass in the username
  //so this is creating an instance and then putting that instance on an activeGames object

  client.join(roomname);
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