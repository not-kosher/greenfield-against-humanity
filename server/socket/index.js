const gameRoomRouter = require('./routes/gameRoomRouter.js');
const lobbyRouter = require('./routes/lobbyRouter.js');

const socketSetup = io => {
  io.listen(process.env.SOCKET || 8000);
  const game = io.of('/game');

  game.on('connection', client => {
    gameRoomRouter(game, client);
    lobbyRouter(game, client);
  });
};

module.exports = socketSetup;