import React from 'react';

const PoopPrompt = ({ poopSubmission }) => {
  return (
    <div id='poop' className='poopPrompt'>
      <div className='poopContent'>
        <div id='waitingOnPoopers'>Waiting for all players to submit</div>
        <div id='prompt'>
          <div className='poopQ'>How many hours has it been since you last pooped?</div>
          <input id='poopHours' type='number'/>
          <div className='poopSubmit' onClick={poopSubmission}>Submit</div>
        </div>
      </div>
    </div>
  );
};

export default PoopPrompt;