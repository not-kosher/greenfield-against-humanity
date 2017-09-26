const db = require('../db/index');

module.exports = {
  addUser: (req, res) => {
    db.User.create(req.body)
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        console.error('Failed to add new user to db: ', err);
      });
  },

  retrieveAllDecks: (req, res) => {
    db.User.findOne({ where: {username: req.params.username} })
      .then((user) => {
        return db.Deck.findAll({
          where: {
            $or: {
              // look for decks either belonging to the specific user
              // or belonging to no one (are public)
              userId: user.username,
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