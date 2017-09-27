import React from 'react';


const PlayerEntry = ({player}) => {
  return (
    <div className='PlayerEntry'>
      <div className='score'>{player.points}</div>
      <div className='username'>
        {player.username}
      </div>
    </div>
  );
};

export default PlayerEntry;