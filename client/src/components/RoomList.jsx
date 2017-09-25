import React from 'react';
import RoomEntry from './RoomEntry';

const RoomList = (props) => {
  return (
    <div className='RoomList'>
      <div className='Title'>Rooms of Debauchery</div>
      <div className='ClassFormContainer'>
        <RoomEntry />
      </div>
    </div>);
};

export default RoomList;