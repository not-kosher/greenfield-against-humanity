import React from 'react';
import AddRoom from './AddRoom';
import RoomList from './RoomList';


class Lobby extends React.Component {
  constructor() {
    super();
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