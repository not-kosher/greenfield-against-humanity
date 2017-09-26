const Sequelize = require('sequelize');
const db = require('./config');

const User = db.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

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

db.sync();

module.exports = {
  User,
  WhiteCard,
  BlackCard,
  Deck,
};