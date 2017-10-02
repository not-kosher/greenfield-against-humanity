const GameManager = require('../gameManager');
const db = require('../../db');

const enterLobby = (io, client) => {
  client.join('lobby');
  //send this only to the client who joined the room
  client.emit('allRooms', GameManager.rooms);
};

const createRoom = (io, client, roomname, username, deckname, pointsToWin) => {    
  client.leave('lobby');

  //get game deck from db and then create game
  const gameDeck = {};
  db.Deck.findOne({where: {name: deckname}})
    .then(deck => {
      db.WhiteCard.findAll({where: {deckId: deck.id}})
        .then(whiteCards => {
          gameDeck.whiteCards = whiteCards;

          db.BlackCard.findAll({where: {deckId: deck.id}})
            .then(blackCards => {
              gameDeck.blackCards = blackCards;

              //got deck, now create game and emit events
              GameManager.createGame(roomname, username, gameDeck, pointsToWin);
              io.to('lobby').emit('newRoom', {name: roomname, createdBy: username});
              client.join(roomname);
              client.emit('canJoinRoom', roomname);
            })
            .catch(err => console.log('FAILED to get black cards: ', err));
        })
        .catch(err => console.log('FAILED to getb white cards: ', err));
    })
    .catch(err => console.log('FAILED to find DECK: ', err));
};

const joinRoom = (io, client, roomname, username) => {
  client.leave('lobby');
  GameManager.getRoom(roomname).addPlayer(username);
  client.join(roomname);

  //emit just to the client that they have joined room
  client.emit('canJoinRoom', roomname);
};

module.exports = {
  enterLobby,
  createRoom,
  joinRoom
};


