import React from 'react';
import {Link} from 'react-router-dom';

const RoomEntry = (props) => {
  return (
    <div className='RoomEntry'>  
      <div className='joinbutton'>JOIN</div>
      <div className='roommame'>Room Name</div>
      <div className='created'>created by:</div>
    </div>
  );
};
export default RoomEntry;