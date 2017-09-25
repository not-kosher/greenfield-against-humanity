const lobbyCtrl = require('../controllers/lobbyCtrl.js');

const lobbyRouter = (io, client) => {
  client.on('enterLobby', () => lobbyCtrl.enterLobby(io, client));
  client.on('createRoom', (roomname, username) => lobbyCtrl.createRoom(io, client, roomname, username));
  client.on('joinRoom', (roomname, username) => lobbyCtrl.joinRoom(io, client, roomname, username));
};

module.exports = lobbyRouter;