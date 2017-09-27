import React from 'react';

const BlackCard = ({card}) => {
  return (
    <div className="BlackCard">
      <h4><b>{card.text}</b></h4> 
    </div>
  );
};

export default BlackCard;