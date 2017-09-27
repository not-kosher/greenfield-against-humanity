import React from 'react';


const PlayerEntry = ({player}) => {
  return (
    <div className='PlayerEntry'>
      <div className='score'>{player.score}</div>
      <div className='username'>
        {player.username}
      </div>
    </div>
  );
};

export default PlayerEntry;