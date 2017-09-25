const lobbyCtrl = require('../controllers/lobbyCtrl.js');

const lobbyRouter = (game, client) => {
  //client enters the lobby
  //this should add client to lobby room and send them the current available rooms to be rendered
  client.on('enterLobby', () => lobbyCtrl.enterLobby(game, client));

  //client creates a room 
  //have logic on frontend to prevent an invalid roomname submission 
  //(lobby, any existing room and no characters)
  //this should create a new room (including a game object with alk data stored at key <roomname>),
  //also set that user as the room creator 
  //have the client leave the lobby, and join that room
  client.on('createRoom', roomname => lobbyCtrl.createRoom(game, client, roomname));

  //client joins a room
  //this should have the client leave the lobby and join the room (adding user to game object)
  client.on('joinRoom', roomname => lobbyCtrl.joinRoom(game, client, roomname));



};

module.exports = lobbyRouter;