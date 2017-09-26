const router = require('express').Router();
const controller = require('../controllers/controller');

// adds user to db, expects username sent in body as object {username: 'username'}
router.post('/users', controller.addUser);

// to retrieve all decks user has access to when creating a room
router.get('/decks/:username', controller.retrieveAllDecks);

// to retrieve just the custom decks of a user for editing
router.get('/customdecks/:username', controller.retrieveCustomDecks);

router.post('/customdecks', controller.addDeck);

router.post('/customdecks/:deckname', controller.addCard);

module.exports = router;