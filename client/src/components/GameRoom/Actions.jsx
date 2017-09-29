import React from 'react';

const Actions = ({ endTurn, startPoopPrompt, state }) => {
  if (state.user === state.roomCreator && state.turnPhase === '') {
    return (
      <div id='Start' className={'Action'}>
        <div onClick={startPoopPrompt}>Start Game</div>
      </div>
    );
  } else if (state.user === state.czar) {
    return (
      <div className={'Action'}>
        <div onClick={endTurn}>Next Turn</div>
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
};

export default Actions;