import React from 'react';
import {Link} from 'react-router-dom';

const RoomEntry = ({ room, joinRoom }) => {
  return (
    <div className='room-entry'>  
      <div className='join-button' onClick={joinRoom.bind(null, room.name)} >JOIN</div>
      <div className='room-title'>{room.name}</div>
      <div className='created'>{`created by: ${room.createdBy}`}</div>
    </div>
  );
};
export default RoomEntry;