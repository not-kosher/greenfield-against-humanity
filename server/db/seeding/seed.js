const data = require('./basecards.json');
const { WhiteCard, BlackCard, Deck } = require('../index.js');

Deck.sync()
  .then(() => {
    Deck.create({
      name: 'Base Set',
      type: 'public'
    });
  })
  .then(() => {
    data.whiteCards.forEach((text) => {
      WhiteCard.create({
        text
      });
    });
    BlackCard.bulkCreate(data.blackCards);
  });