import React from 'react';

const AddRoom = ({ createRoom }) => {
  return (
    <div className='AddRoom'>
      <div className='ClassFormContainer'>
        <div className='form-title'>Create A Room:</div>
        <form onSubmit={createRoom} className='add-room-form'>
          <div className='addroom-input-container'>
            <input id='roomname' placeholder='Enter room name' className='addroom-input'/>
          </div>
          <div className='addroom-input-container'>
            <label className='addroom-label'>Points to win:  </label>
            <input type='number' id='points-to-win' className='addroom-input' placeholder='10'/>
          </div>
          <div className='addroom-input-container'>
            <label className='addroom-label'>Select decks:  </label>
            <select id='deckname' className='addroom-input'>
              <option>Base Set</option>
            </select>  
          </div>
          <div className='addroom-input-container'>
            <input type='submit' value='Submit' className='submit-button'/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRoom;

