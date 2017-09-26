import React from 'react';
import AddRoom from './AddRoom';
import RoomList from './RoomList';

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
    this.props.socket.on('allRooms', (rooms) => {
      this.setState({
        rooms
      });
    });
    this.props.socket.on('newRoom', (room) => {
      this.setState({
        rooms: this.state.rooms.concat(room)
      });
    });
    this.props.socket.on('canJoinRoom', (room) => {
      // navigate to room by pushing to history, fix once route is in place
      this.props.history.push('/room');
    });

    this.props.socket.emit('joinLobby');
  }

  createRoom() {
    const roomname = document.getElementById('roomname').value;
    const deckname = document.getElementById('deckname').value;
    this.props.socket.emit('createRoom', roomname, this.props.user, deckname);
  }

  joinRoom(roomname) {
    this.props.socket.emit('joinRoom', roomname);
  }

  render() {
    return (
      <div className='Lobby'>
        <div className='Logo'>Greenfield Against Humanity</div>
        <AddRoom />
        <RoomList />
      </div>);
  }
}

export default Lobby;