import React from 'react';

const PoopPrompt = ({ poopSubmission }) => {
  return (
    <div id='poop' className='poop-prompt'>
      <div className='poop-content'>
        <div id='waiting-on-poopers'>Waiting for all players to submit</div>
        <form id='prompt' onSubmit={poopSubmission}>
          <div className='poop-q'>How many hours has it been since you last pooped?</div>
          <div>
            <input id='poop-hours' type='number'/>
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