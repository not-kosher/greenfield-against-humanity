import React from 'react';
import BlackCard from './BlackCard';
import Hand from './Hand'; 

const Table = ({cards, black}) => {
  return (
    <div className='Table'>
      <div className='Submitted'>
        <BlackCard text={black} />
      </div>
      <Hand cards={cards} />
    </div>
  );
};

export default Table;