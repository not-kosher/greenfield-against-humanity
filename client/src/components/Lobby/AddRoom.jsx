import React from 'react';

const AddRoom = ({ createRoom }) => {
  return (
    <div className='AddRoom'>
      <div className='ClassFormContainer'>
        <div>Create A Room:</div>
        <form onSubmit={createRoom}>
          <div>
            <input id='roomname' placeholder='Enter room name'/>
          </div>
          <div>
            <label>Select a Deck:  </label>
            <select id='deckname' >
              <option>Base Set</option>
            </select>  
          </div>
          <div>
            <input type='submit' value='Submit' className='submit-button'/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRoom;

