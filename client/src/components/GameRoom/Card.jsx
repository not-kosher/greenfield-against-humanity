import React from 'react';

const Card = ({card, submit}) => {
  return (
    <div className="Card" onClick={submit.bind(null, card)}>
      <h4><b>{card.text}</b></h4> 
    </div>
  );
};

export default Card;