const GameManager = require('../GameManager.js');
const db = require('../../db');

const enterLobby = (io, client) => {
  client.join('lobby');
  //send this only to the client who joined the room
  client.emit('allRooms', GameManager.rooms);
};

const createRoom = (io, client, roomname, username, deckname) => {    
  client.leave('lobby');

  //get game deck from db and then create game
  const gameDeck = {};
  db.Deck.findOne({where: {name: deckname}})
    .then(deck => {
      db.WhiteCard.findAll({where: {deckId: deck.dataValues.id}})
        .then(whiteCards => {
          gameDeck.whiteCards = whiteCards.map(card => card.dataValues);

          db.BlackCard.findAll({where: {deckId: deck.dataValues.id}})
            .then(blackCards => {
              gameDeck.blackCards = blackCards.map(card => card.dataValues);

              //got deck, now create game and emit events
              GameManager.createGame(roomname, username, gameDeck);
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
  GameManager.addPlayer(roomname, username);
  client.join(roomname);

  //emit just to the client that they have joined room
  client.emit('canJoinRoom', roomname);
};

module.exports = {
  enterLobby,
  createRoom,
  joinRoom
};


