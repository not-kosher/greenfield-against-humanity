import React from 'react';

const RoomEntry = ({ room, joinRoom }) => {
  return (
    <div className='RoomEntry'>  
      <div className='joinbutton' onClick={joinRoom.bind(null, room.name)} >JOIN</div>
      <div className='roommame'>{room.name}</div>
      <div className='created'>{`created by: ${room.createdBy}`}</div>
    </div>
  );
};
export default RoomEntry;