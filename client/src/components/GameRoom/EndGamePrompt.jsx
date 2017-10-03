import React from 'react';

const EndGamePrompt = ({ winner, playerIsLeaving, playerIsStaying, decided }) => {
  return (
    <div id='end' className='end-game'>
      {decided ? 
        <div id='endWaiting' className='alert-message'>Waiting on other players</div>
        :
        <div id ='end-prompt-content'>
          <div className='alert-message'>Game Over! {winner} is the most deplorable.</div>
          <div id='Leave' onClick={playerIsLeaving} className='alert-button' >Leave Game</div>
          <div id='Stay' onClick={playerIsStaying} className='alert-button' >Play Again</div>
        </div>
      }
    </div>
  );
};

export default EndGamePrompt;