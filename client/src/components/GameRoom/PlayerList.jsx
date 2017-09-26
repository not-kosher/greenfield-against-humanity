import React from 'react';
import PlayerEntry from './PlayerEntry';

const PlayerList = () => {
  return (
    <div className='PlayerList'>
      <div className='subtitle'>Friends</div>
      <PlayerEntry />
    </div>
  );
};

export default PlayerList;