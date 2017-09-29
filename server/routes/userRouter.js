const router = require('express').Router();
const userCtrl = require('../controllers/userController');
const passport = require('passport');

router.post('/login', passport.authenticate('local'), userCtrl.login);

router.post('/signup', userCtrl.signup);

router.post('/logout', userCtrl.logout);

module.exports = router;