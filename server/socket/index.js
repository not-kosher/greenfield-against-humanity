const gameRoomRouter = require('./routes/gameRoomRouter.js');
const lobbyRouter = require('./routes/lobbyRouter.js');

const socketSetup = io => {
  io.listen(8000);

  const game = io.of('/game');

  gameRoomRouter(game);
  lobbyRouter(game);
};

module.exports = socketSetup;