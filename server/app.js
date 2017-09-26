require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app); 

// connect to database
require('./db/index.js');

app.use(express.static(path.resolve(__dirname, '../client/dist')));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log('App now listening on port ' + PORT);
});

//link socket
const io = require('socket.io')(server);
const setupSocket = require('./socket');
setupSocket(io);  