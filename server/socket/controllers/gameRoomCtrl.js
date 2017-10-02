const GameManager = require('../gameManager');

const enterRoom = (io, client, roomname) => {
  const game = GameManager.getRoom(roomname);
  //add player here instead of in lobby ctrl, need to pass in username then
  io.to(roomname).emit('updatePlayers', game.players);
  //send client the messages on the board
  client.emit('updateMessages', game.getLatestMessages());
};

const messageSubmission = (io, client, roomname, username, text) => {
  const game = GameManager.getRoom(roomname);
  game.addMessage(username, text);
  io.to(roomname).emit('updateMessages', game.getLatestMessages());
};

const startPoopPrompt = (io, client, roomname) => {
  const game = GameManager.getRoom(roomname);
  io.to(roomname).emit('openPoopPrompt');
  io.to(roomname).emit('updatePhase', game.updatePhase('ordering'));

  //close room and update lobby
  GameManager.closeRoom(roomname);
  io.to('lobby').emit('allRooms', GameManager.rooms); 
};

const poopSubmission = (io, client, roomname, username, poopTime) => {
  const game = GameManager.getRoom(roomname);
  game.submitPoopTime(username, poopTime);

  if (game.haveAllSubmittedPoopTime()) {
    game.sortPlayers();
    game.startTurn();
    io.to(roomname).emit('updatePlayers', game.players);
    game.updatePhase('submission');
    io.to(roomname).emit('gameHasStarted');
  }
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
    io.to(roomname).emit('updatePhase', game.updatePhase('revelation'));
  }
};

const revealCard = (io, client, roomname, username) => {
  const game = GameManager.getRoom(roomname);
  //do we want reveal card to return, or breakinto two lines?
  game.revealCard(username);
  io.to(roomname).emit('updateSubmittedCards', game.submissions);
  if (game.areAllCardsRevealed()) {
    io.to(roomname).emit('updatePhase', game.updatePhase('judgement'));
  }
};

const winnerSelected = (io, client, roomname, username) => {
  const game = GameManager.getRoom(roomname);
  game.selectWinner(username); //this updates both submissions and players

  if (game.getWinner()) {
    io.to(roomname).emit('updateWinner', game.getWinner());
    io.to(roomname).emit('updatePhase', game.updatePhase('gameOver'));
  } else {
    io.to(roomname).emit('updatePhase', game.updatePhase('end'));
  }

  io.to(roomname).emit('updateSubmittedCards', game.submissions);
  io.to(roomname).emit('updatePlayers', game.players);
};

const endTurn = (io, client, roomname) => {
  const game = GameManager.getRoom(roomname);
  game.startTurn();
  io.to(roomname).emit('setupNewTurn', game.blackCard, game.getCzar());
  io.to(roomname).emit('updatePlayers', game.players);
  io.to(roomname).emit('updateSubmittedCards', game.submissions);
  io.to(roomname).emit('updatePlayers', game.players);
  io.to(roomname).emit('updatePhase', game.updatePhase('submission'));
};

const playerIsStaying = (io, client, roomname, username) => {
  const game = GameManager.getRoom(roomname);
  game.increaseNumStaying();
  
  if (game.allPlayersDecided()) {
    game.reset();
    io.to(roomname).emit('updatePlayers', game.players);
    io.to(roomname).emit('gameReset');
  }
};

const playerIsLeaving = (io, client, roomname, username) => {
  const game = GameManager.getRoom(roomname);
  game.removePlayer(username);
  client.leave(roomname);
  client.join('lobby');

  if (!game.createdBy) {
    io.to(roomname).emit('updateCreator', game.updateCreator());
  }

  //if no more players, remove all reference to this room/game
  if (game.players.length === 0) {
    GameManager.endGame(roomname);
  } else {
    io.to(roomname).emit('updatePlayers', game.players);

    //if now 2 players, reopen room for more players to join
    if (game.players.length === 2) {
      GameManager.addToLobby(roomname);
    }

    //if all players decided reset
    if (game.allPlayersDecided()) {
      game.reset();
      io.to(roomname).emit('updatePlayers', game.players);
      io.to(roomname).emit('gameReset');
    }
  }
};

module.exports = {
  enterRoom,
  messageSubmission,
  startPoopPrompt,
  poopSubmission,
  initializeGame,
  cardSubmission,
  revealCard,
  winnerSelected,
  endTurn,
  playerIsStaying,
  playerIsLeaving
};

