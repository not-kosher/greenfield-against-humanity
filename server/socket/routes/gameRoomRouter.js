const gameRoomRouter = (io, client) => {

  //list of room routes

  //enterRoom

  //leaveRoom

  //all game events
  //can have these all be specific handlers or just have a gameStateUpdate
  //that gets entire game object and renders accordingly

  //startGame gets roomname
  //deal out cards to the current players
  //maybe have a delay until ...
  //this should change turn phase to submission
  //send back entire game object


  //cardSubmission gets roomname, username and array of submitted cards
  //add an object to the submittedCards array (including show = false, chosen = false)
  //deal from the white deck to that player
  //send just to that client new cards to add to their hand
  //send back the submittedCards object
  //server checks if all players have submitted
  //if so turnPhase switches to revelation (after a slight delay?)
  

  //revealCard gets roomname, username of who submitted
  //go through submittedCards and find the one with matching username, changes show to true
  //send back username of cards to be shown
  //check if all cards are shown
  //if so then turnPhase switch to judgement after slight delay

  //winnerSelected gets roomname, username of winning card
  //go through submitted cards, find the user, and change that card chosen = true
  //also find player object and increasse their points by 1
  //send back username which will switch that chosen to be true
  //then change turnPhase to end

  //endTurn 
  //set Czar to next person (maybe people should be in an array)
  //deal new black card for next round
  //change turnPhase to submission
  //emit newTurn or something




};

module.exports = gameRoomRouter;