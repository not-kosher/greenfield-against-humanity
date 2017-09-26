// called in app to open the socket and export it so both lobby and game room functions can access it
// check for way to initialize socket without opening/closing socket
import socketIOClient from 'socket.io-client';

const endpoint = '127.0.0.1:8000';

const socket = socketIOClient(endpoint);

export default socket;