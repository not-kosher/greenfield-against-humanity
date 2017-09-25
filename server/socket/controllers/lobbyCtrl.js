const enterLobby = (io, client) => {
  client.join('lobby');
  //send this only to the client who joined the room
  client.emit('allRooms', 'rooms array here');
};

const createRoom = (io, client, roomname) => {
  //client creates a room 
  //have logic on frontend to prevent an invalid roomname submission 
  //(lobby, any existing room and no characters)
  //this should create a new room (including a game object with alk data stored at key <roomname>),
  //also set that user as the room creator 
  //have the client leave the lobby, and join that room
};

const joinRoom = (io, client, roomname) => {
  //client joins a room
  //this should have the client leave the lobby and join the room (adding user to game object)
};

module.exports = {
  enterLobby,
  createRoom,
  joinRoom
};