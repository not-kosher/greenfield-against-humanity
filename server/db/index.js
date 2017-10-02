const Sequelize = require('sequelize');
const db = require('./config');
const passport = require('passport-local-sequelize');

const User = db.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  hash: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  salt: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// Add passport functionality when referencing user model
passport.attachToUser(User);

const WhiteCard = db.define('whiteCard', {
  text: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const BlackCard = db.define('blackCard', {
  text: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // number of white cards to pick with it
  pick: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

const Deck = db.define('deck', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // public or custom
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Deck.hasMany(WhiteCard);
Deck.hasMany(BlackCard);
WhiteCard.belongsTo(Deck);
BlackCard.belongsTo(Deck);

User.hasMany(Deck);
Deck.belongsTo(User);

db.sync();

module.exports = {
  User,
  WhiteCard,
  BlackCard,
  Deck,
};