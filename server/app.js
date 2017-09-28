require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const deckRouter = require('./routes/deckRouter');
const userRouter = require('./routes/userRouter');

const app = express();
const server = require('http').createServer(app); 

// connect to database
const db = require('./db/index.js');

// middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  secret: 'filthy cur',
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

// serve static files and set routes
app.use(express.static(path.resolve(__dirname, '../client/dist')));
app.use('/api/users', userRouter);
app.use('api/decks', deckRouter);

// passport config
passport.use(new LocalStrategy(db.User.authenticate()));
passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log('App now listening on port ' + PORT);
});

//link socket
const io = require('socket.io')(server);
const setupSocket = require('./socket');
setupSocket(io);  