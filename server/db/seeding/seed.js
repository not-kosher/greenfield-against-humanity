require('dotenv').config();
const data = require('./basecards.json');
const { WhiteCard, BlackCard, Deck } = require('../index.js');

Deck.sync({ force: true })
  .then(() => {
    Deck.create({
      name: 'Base Set',
      type: 'public'
    });
  })
  .then(() => {
    return WhiteCard.sync({ force: true });
  })
  .then(() => {
    const whites = data.whiteCards.map((text) => {
      return { text, deckId: 1 };
    });
    return WhiteCard.bulkCreate(whites);
  })
  .then(() => {
    return BlackCard.sync({ force: true });
  })
  .then(() => {
    const blacks = data.blackCards.map((card) => {
      card.deckId = 1;
      return card;
    });
    BlackCard.bulkCreate(blacks);
  });