const GameManager = require('../gameManager');

const enterRoom = (io, client, roomname) => {
  //emit updatePlayers
};

//add leave room here

const startGame = (io, client, roomname) => {
  //deal the black card (dont send back)
  //emit to room that gameHasStarted
};

const initializeGame = (io, client, roomname, username) => {
  //deal out cards to that client (game manager)
  //emit refillHand with card array
  //emit setupNewTurn with black card and czar
  //emit updatePhase
};

const cardSubmission = (io, client, roomname, username, cards) => {
  //add an object to the submittedCards array (including show = false, chosen = false)
  //deal from the white deck to that player the number of cards
  //send just to that client new cards to add to their hand - emit refilHand
  //to everybody send back the entire submittedCards object - emit updateSubmittedCards
  //server checks if all players have submitted
  //if so turnPhase switches to revelation (after a slight delay?) - emit updatePhase
};

const revealCard = (io, client, roomname, username) => {
  //go through submittedCards and find the one with matching username, changes show to true
  //send back entire submittedCards array -emit updateSubmittedCards
  //check if all cards are shown
  //if so then turnPhase switch to judgement - emit updatePhase
};

const winnerSelected = (io, client, roomname, username) => {
  //go through submitted cards, find the user, and change that card chosen = true
  //also find player object and increasse their points by 1
  //send back players and submittedCards array - emit updatePlayers, and emit updateSubmittedCards
  //then change turnPhase to end - emit updatePhase
};

const endTurn = (io, client, roomname) => {
  //set Czar to next person (maybe people should be in an array)
  //deal new black card for next round emit - setupNewTurn sending black card and new czar
  //change turnPhase to submission emit - updatePhase
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

