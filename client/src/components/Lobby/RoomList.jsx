import React from 'react';
import RoomEntry from './RoomEntry';

const RoomList = ({ rooms, joinRoom }) => {
  return (
    <div className='room-list'>
      <div className='title'>Rooms of Debauchery</div>
      <div className='roomlist-window'>

        {rooms.map((room) => (
          <RoomEntry key={room.name} room={room} joinRoom={joinRoom} />
        ))}
      </div>
    </div>);
};

export default RoomList;