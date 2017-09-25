const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL);

db.authenticate()
  .then(() => {
    console.log('Successfully connected to database!');
  })
  .catch((err) => {
    console.log('Failed to connect to database: ', err);
  });

module.exports = db;