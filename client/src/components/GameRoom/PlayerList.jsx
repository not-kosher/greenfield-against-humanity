import React from 'react';
import PlayerEntry from './PlayerEntry';

const PlayerList = ({ players, czar }) => {
  return (
    <div className='PlayerList'>
      <div className='subtitle'>Friends</div>
      {players.map((player) => {
        return <PlayerEntry player={player} czar={czar}/>;
      })}
    </div>
  );
};

export default PlayerList;