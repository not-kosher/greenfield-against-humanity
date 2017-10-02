import React from 'react';

const Actions = ({ endTurn, startPoopPrompt, turnPhase, user, roomCreator, czar }) => {
  if (user === roomCreator && turnPhase === '') {
    return (
      <div>
        <div className='alert-message'>
          Press "Start Game" when you are ready to begin your indecency.
        </div>
        <div id='Start' className='Action alert-button'>
          <div onClick={startPoopPrompt}>Start Game</div>
        </div>
      </div>
    );
  } else if (user === czar && turnPhase === 'end') {
    return (
      <div>
        <div className='alert-message'>
          Press "Next Turn" to pass the crown to the next corrupt monarch.
        </div>
        <div className='Action alert-button'>
          <div onClick={endTurn}>Next Turn</div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Actions;