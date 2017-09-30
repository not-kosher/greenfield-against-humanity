import React from 'react';

const EndGamePrompt = ({ winner, playerIsLeaving, playerIsStaying }) => {
  return (
    <div id='End' className='EndGame'>
      <div id='endWaiting'>Waiting on other players</div>
      <div id ='endPromptContent'>
        <div>Game Over</div>
        <div>{winner} is the most deplorable.</div>
        <div id='Leave' className='button' onClick={playerIsLeaving}>Leave Game</div>
        <div id='Stay' onClick={playerIsStaying}>Play Again</div>
      </div>
    </div>
  );
};

export default EndGamePrompt;