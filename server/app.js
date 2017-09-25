require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.listen(process.env.PORT, () => {
  console.log('App now listening on port ' + process.env.PORT);
});

//link socket
const io = require('socket.io')(app);
const setupSocket = require('./socket');
setupSocket(io);