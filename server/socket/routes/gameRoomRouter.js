const gameRoomCtrl = require('../controllers/gameRoomCtrl.js');

const gameRoomRouter = (io, client) => {
  client.on('enterRoom', roomname => gameRoomCtrl.enterRoom(io, client, roomname));

  //add leaveRoom here

  client.on('messageSubmission', (roomname, username, text) => {
    gameRoomCtrl.messageSubmission(io, client, roomname, username, text);
  });
  
  client.on('startGame', roomname => gameRoomCtrl.startGame(io, client, roomname));
  client.on('initializeGame', (roomname, username) => gameRoomCtrl.initializeGame(io, client, roomname, username));
  client.on('cardSubmission', (roomname, username, cards) => {
    gameRoomCtrl.cardSubmission(io, client, roomname, username, cards);
  });  
  client.on('revealCard', (roomname, username) => gameRoomCtrl.revealCard(io, client, roomname, username));  
  client.on('winnerSelected', (roomname, username) => {
    gameRoomCtrl.winnerSelected(io, client, roomname, username);
  });  
  client.on('endTurn', roomname => gameRoomCtrl.endTurn(io, client, roomname));
};

module.exports = gameRoomRouter;