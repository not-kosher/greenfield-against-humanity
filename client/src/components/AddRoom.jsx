import React from 'react';

const AddRoom = () => {
  return (
    <div className='AddRoom'>
      <div className='ClassFormContainer'>
        <div>Create A Room:</div>
        <input id='roomname' />
        <div>
          <span>Select a Deck:  </span>
          <select id='deckname' >
            <option value="basic">Basic</option>
          </select>
        </div>
        <div>Submit</div>
      </div>
    </div>
  );
};

export default AddRoom;

