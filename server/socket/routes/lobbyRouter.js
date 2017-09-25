const lobbyCtrl = require('../controllers/lobbyCtrl.js');

const lobbyRouter = (io, client) => {
  client.on('enterLobby', () => lobbyCtrl.enterLobby(io, client));
  client.on('createRoom', roomname => lobbyCtrl.createRoom(io, client, roomname));
  client.on('joinRoom', roomname => lobbyCtrl.joinRoom(io, client, roomname));
};

module.exports = lobbyRouter;