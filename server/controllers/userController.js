const { User } = require('../db');
const passport = require('passport');

module.exports = {
  // only gets called if the user has been authenticated
  login: (req, res) => {
    res.json('User logged in');
  },

  signup: (req, res) => {
    User.register(req.body.username, req.body.password, (err, newUser) => {
      if (err) {
        res.status(400).json('Error signing up');
      } else {
        passport.authenticate('local')(req, res, () => {
          res.json('Successfully sign up');
        });
      }
    });
  },

  logout: (req, res) => {
    req.logout();
    res.json('User logged out');
  },

};