import React from 'react';

const BlackCard = ({card}) => {
  if (card.text) {
    return (
      <div className="BlackCard">
        <h4 className='card-text'><b>{card.text}</b></h4> 
      </div>
    );
  } else {
    return ( <div></div> );
  }
};

export default BlackCard;