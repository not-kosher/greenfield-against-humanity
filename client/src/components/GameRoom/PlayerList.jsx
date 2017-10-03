import React from 'react';
import PlayerEntry from './PlayerEntry';

const PlayerList = ({ players, czar }) => {
  return (
    <div className='player-list'>
      <div className='subtitle'>Friends</div>
      {players.map((player, key) => {
        return <PlayerEntry player={player} czar={czar} key={key}/>;
      })}
    </div>
  );
};

export default PlayerList;