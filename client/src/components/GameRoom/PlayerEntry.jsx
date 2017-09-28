import React from 'react';

import Img from 'react-image';


const PlayerEntry = ({player, czar}) => {
  if (player.username === czar) {
    return (
      <div className='Czar'>
        <div className='score'>{player.points}</div>
        <div className='username'>
          {player.username}
        </div>
      </div>
    );
  }
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