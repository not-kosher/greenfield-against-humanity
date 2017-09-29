import React from 'react';

const Actions = ({ endTurn, startPoopPrompt, state }) => {
  if (state.user === state.roomCreator && state.turnPhase === '') {
    return (
      <div id='Start'>
        <div className='Action' onClick={startPoopPrompt}>Start Game</div>
      </div>
    );
  } else if (state.user === state.czar && state.turnPhase === 'end') {
    return (
      <div>
        <div className='Action' onClick={endTurn}>Next Turn</div>
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
};

export default Actions;