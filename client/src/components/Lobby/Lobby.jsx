import React from 'react';
import AddRoom from './AddRoom';
import RoomList from './RoomList';
import socket from '../../socket/index.js';


class Lobby extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      user: (Math.random() * 100).toString(),
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
      this.props.history.push(`/game/${room}/${this.state.user}`);
    });

    socket.emit('enterLobby');
  }

  createRoom() {
    // TODO needs data validation for room name
    const roomname = document.getElementById('roomname').value;
    const deckname = document.getElementById('deckname').value;
    socket.emit('createRoom', roomname, this.state.user, deckname);
  }

  joinRoom(roomname) {
    socket.emit('joinRoom', roomname, this.state.user);
  }

  render() {
    return (
      <div className='Lobby'>
        <div className='Logo'>Greenfield Against Humanity</div>
        <AddRoom createRoom={this.createRoom} />
        <RoomList rooms={this.state.rooms} joinRoom={this.joinRoom} />

      </div>);
  }
}

export default Lobby;