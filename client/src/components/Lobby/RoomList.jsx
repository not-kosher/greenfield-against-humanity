import React from 'react';
import RoomEntry from './RoomEntry';

const RoomList = ({ rooms, joinRoom }) => {
  return (
    <div className='RoomList'>
      <div className='Title'>Rooms of Debauchery</div>
      <div className='ClassFormContainer'>
        {rooms.map((room) => (
          <RoomEntry key={room.name} room={room} joinRoom={joinRoom} />
        ))}
      </div>
    </div>);
};

export default RoomList;