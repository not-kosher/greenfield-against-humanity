const gameRoomCtrl = require('../controllers/gameRoomCtrl.js');

const gameRoomRouter = (io, client) => {

  //what are statefull in react
  //hand
  //blackCard
  //submittedCards
  //turnPhase
  //playerArray

  //enterRoom

  //leaveRoom

  //startGame gets roomname
  //deal the black card (dont send back)
  //emit to room that gameHasStarted

  //immeditely each client sends...

  //initializeGame
  //deal out cards to that client (game manager)
  //emit refillHand with card array
  //emit setupNewTurn with black card and czar
  //emit updatePhase
  //emit updatePlayers

  //cardSubmission gets roomname, username and array of submitted cards
  //add an object to the submittedCards array (including show = false, chosen = false)
  //deal from the white deck to that player the number of cards
  //send just to that client new cards to add to their hand - emit refilHand
  //to everybody send back the entire submittedCards object - emit updateSubmittedCards
  //server checks if all players have submitted
  //if so turnPhase switches to revelation (after a slight delay?) - emit updatePhase
  

  //revealCard gets roomname, username of who submitted
  //go through submittedCards and find the one with matching username, changes show to true
  //send back entire submittedCards array -emit updateSubmittedCards
  //check if all cards are shown
  //if so then turnPhase switch to judgement - emit updatePhase

  //winnerSelected gets roomname, username of winning card
  //go through submitted cards, find the user, and change that card chosen = true
  //also find player object and increasse their points by 1
  //send back players and submittedCards array - emit updatePlayers, and emit updateSubmittedCards
  //then change turnPhase to end - emit updatePhase

  //endTurn 
  //set Czar to next person (maybe people should be in an array)
  //deal new black card for next round emit - setupNewTurn sending black card and new czar
  //change turnPhase to submission emit - updatePhase




};

module.exports = gameRoomRouter;