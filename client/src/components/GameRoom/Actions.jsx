import React from 'react';

const Actions = ({ endTurn, startGame, state }) => {
  if (state.user === state.roomCreator) {
    return (
      <div className={'Action'}>
        <div onClick={startGame}>Start Game</div>
        <div onClick={endTurn}>Next Turn</div>
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