import React from 'react';
import AddRoom from './AddRoom';
import RoomList from './RoomList';
import socket from '../../socket/index.js';


class Lobby extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
    };

    this.createRoom = this.createRoom.bind(this);
    this.joinRoom = this.joinRoom.bind(this);
  }

  componentDidMount() {
    // add socket listeners
    // room array of room objects with properties {name, createdBy}
    socket.on('allRooms', (rooms) => {
      this.setState({
        rooms
      });
    });
    // room object with properties as above
    socket.on('newRoom', (room) => {
      this.setState({
        rooms: this.state.rooms.concat(room)
      });
    });
    socket.on('canJoinRoom', (room) => {
      // navigate to room by pushing to history, fix once route is in place
      this.props.history.push(`/game/${room}`);
    });

    socket.emit('enterLobby');
  }

  componentWillUnmount() {
    socket.removeAllListeners();
  }

  createRoom(e) {
    // TODO needs data validation for room name
    e.preventDefault();
    const roomname = document.getElementById('roomname').value;
    const pointsToWin = document.getElementById('points-to-win').value;
    const deckname = document.getElementById('deckname').value;
    socket.emit('createRoom', roomname, this.props.username, deckname, pointsToWin);
  }

  joinRoom(roomname) {
    socket.emit('joinRoom', roomname, this.props.username);
  }

  render() {
    return (
      <div className='Lobby'>
        <AddRoom createRoom={this.createRoom} />
        <RoomList rooms={this.state.rooms} joinRoom={this.joinRoom} />

      </div>);
  }
}

export default Lobby;