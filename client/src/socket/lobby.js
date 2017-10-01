// currently not being used
import socket from './index.js';

const lobbyCtrl = {
  enterLobby: (cb) => {
    socket.on('allRooms', (rooms) => {
      cb(rooms);
    });
    socket.emit('enterLobby');
  },
  subscribeToRooms: (cb) => {
    socket.on('newRoom', (room) => {
      cb(room);
    });
  },
  listenForJoinRoom: (cb) => {
    socket.on('canJoinRoom', (room) => {
      cb(room);
    });
  },
  createRoom: (room) => {
    socket.emit('createRoom', room);
  },
  joinRoom: (roomname, username) => {
    socket.emit('joinRoom', roomname, username);
  }
};

export default lobbyCtrl;