const GameManager = require('../gameManager');

const enterRoom = (io, client, roomname) => {
  io.to(roomname).emit('updatePlayers', GameManager.getRoom(roomname).players);
};

//add leave room here

const startGame = (io, client, roomname) => {
  const game = GameManager.getRoom(roomname);
  game.startTurn();
  game.updatePhase('submission');
  io.to(roomname).emit('gameHasStarted');
};

const initializeGame = (io, client, roomname, username) => {
  const game = GameManager.getRoom(roomname);
  client.emit('refillHand', game.refillHand(username));
  client.emit('setupNewTurn', game.blackCard, game.getCzar());
  client.emit('updatePhase', game.turnPhase);
};

const cardSubmission = (io, client, roomname, username, cards) => {
  const game = GameManager.getRoom(roomname);
  game.submitCard(username, cards);
  client.emit('refillHand', game.refillHand(username));
  io.to(roomname).emit('updateSubmittedCards', game.submissions);
  if (game.haveAllSubmitted()) {
    io.to(roomname).emit('updatePhase', 'revelation');
  }
};

const revealCard = (io, client, roomname, username) => {
  const game = GameManager.getRoom(roomname);
  io.to(roomname).emit('updateSubmittedCards', game.revealCard(username));
  if (game.areAllCardsRevealed()) {
    io.to(roomname).emit('updatePhase', 'judgement');
  }
};

const winnerSelected = (io, client, roomname, username) => {
  const game = GameManager.getRoom(roomname);
  game.selectWinner(username);
  io.to(roomname).emit('updateSubmittedCards', game.submissions);
  io.to(roomname).emit('updatePlayers', game.players);
  io.to(roomname).emit('updatePhase', 'end');
};

const endTurn = (io, client, roomname) => {
  const game = GameManager.getRoom(roomname);
  game.startTurn();
  io.to(roomname).emit('setupNewTurn', game.blackCard, game.getCzar());
  io.to(roomname).emit('updatePhase', 'submission');
};


module.exports = {
  enterRoom,
  startGame,
  initializeGame,
  cardSubmission,
  revealCard,
  winnerSelected,
  endTurn
};

