import React from 'react';

const AddRoom = ({ createRoom }) => {
  return (
    <div className='AddRoom'>
      <div className='ClassFormContainer'>
        <div>Create A Room:</div>
        <input id='roomname' />
        <div>
          <span>Select a Deck:  </span>
          <select id='deckname' >
            <option value="basic">Base Set</option>
          </select>
        </div>
        <div onClick={createRoom} >Submit</div>
      </div>
    </div>
  );
};

export default AddRoom;

