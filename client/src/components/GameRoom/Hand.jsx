import React from 'react';
import Card from './Card';

const Hand = ({cards, submit, state}) => {
  return (
    <div className="Hand">
      {cards.map((card, key) => {
        return <Card submit={submit} card={card} key={key} state={state}/>;
      })}
    </div>
  );
};

export default Hand;