const gameRoomRouter = require('./routes/gameRoomRouter.js');
const lobbyRouter = require('./routes/lobbyRouter.js');

const socketSetup = io => {
  io.listen(process.env.SOCKET || 8000);

  io.on('connection', client => {
    gameRoomRouter(io, client);
    lobbyRouter(io, client);
  });
};

module.exports = socketSetup;