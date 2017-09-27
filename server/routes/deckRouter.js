const router = require('express').Router();
const controller = require('../controllers/deckController');

// retrieve all decks user has access to when creating a room
router.get('/:username', controller.retrieveAllDecks);

// retrieve just the custom decks of a user for editing
router.get('/custom/:username', controller.retrieveCustomDecks);

// add a new custom deck
router.post('/custom/', controller.addDeck);

// add a card to a custom deck
router.post('/custom/:deckname', controller.addCard);

module.exports = router;