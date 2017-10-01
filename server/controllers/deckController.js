const db = require('../db/index');

module.exports = {
  retrieveAllDecks: (req, res) => {
    db.User.findOne({ where: {username: req.params.username} })
      .then((user) => {
        return db.Deck.findAll({
          where: {
            $or: {
              // look for decks either belonging to the specific user
              // or belonging to no one (are public)
              userId: user.id,
              userId: null
            }
          }
        });
      })
      .then((decks) => {
        res.json(decks);
      })
      .catch((err) => {
        console.error('Failed to retrieve all decks user has access to: ', err);
      });
  },

  retrieveCustomDecks: (req, res) => {

  },

  addDeck: (req, res) => {

  },

  addCard: (req, res) => {

  },

};