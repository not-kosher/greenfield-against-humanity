import React from 'react';

const PoopPrompt = ({ poopSubmission }) => {
  return (
    <div id='poop' className='poopPrompt'>
      <div className='poopContent'>
        <div id='waitingOnPoopers'>Waiting for all players to submit</div>
        <form id='prompt' onSubmit={poopSubmission}>
          <div className='poopQ'>How many hours has it been since you last pooped?</div>
          <div>
            <input id='poopHours' type='number'/>
          </div>
          <div>
            <input type='submit' value='Submit' className='submit-button'/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PoopPrompt;