const gameRoomCtrl = require('../controllers/gameRoomCtrl.js');

const gameRoomRouter = (io, client) => {
  client.on('enterRoom', roomname => {
    gameRoomCtrl.enterRoom(io, client, roomname);
  });

  client.on('messageSubmission', (roomname, username, text) => {
    gameRoomCtrl.messageSubmission(io, client, roomname, username, text);
  });

  client.on('startPoopPrompt', roomname => {
    gameRoomCtrl.startPoopPrompt(io, client, roomname);
  });

  client.on('poopSubmission', (roomname, username, poopTime) => {
    gameRoomCtrl.poopSubmission(io, client, roomname, username, poopTime);
  });

  client.on('initializeGame', (roomname, username) => {
    gameRoomCtrl.initializeGame(io, client, roomname, username);
  });
    
  client.on('cardSubmission', (roomname, username, cards) => {
    gameRoomCtrl.cardSubmission(io, client, roomname, username, cards);
  });  

  client.on('revealCard', (roomname, username) => {
    gameRoomCtrl.revealCard(io, client, roomname, username);
  }); 

  client.on('winnerSelected', (roomname, username) => {
    gameRoomCtrl.winnerSelected(io, client, roomname, username);
  }); 

  client.on('endTurn', roomname => gameRoomCtrl.endTurn(io, client, roomname));

  client.on('playerIsStaying', (roomname, username) => {
    gameRoomCtrl.playerIsStaying(io, client, roomname, username);
  });

  client.on('playerIsLeaving', (roomname, username) => {
    gameRoomCtrl.playerIsLeaving(io, client, roomname, username);
  });
};

module.exports = gameRoomRouter;