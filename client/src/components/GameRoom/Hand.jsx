import React from 'react';
import Card from './Card';

const Hand = ({cards}) => {
  return (
    <div className="Hand">
      {cards.map((card, key) => {
        return <Card text={card} key={key}/>;
      })}
    </div>
  );
};

export default Hand;