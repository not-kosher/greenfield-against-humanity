import React from 'react';
import PlayerEntry from './PlayerEntry';

const PlayerList = ({ players }) => {
  return (
    <div className='PlayerList'>
      <div className='subtitle'>Friends</div>
      {players.map((player) => {
        return <PlayerEntry player={player} />;
      })}
    </div>
  );
};

export default PlayerList;