import React from 'react';
import classNames from 'classnames';



const SubmittedCard = ({ select, card, revealCard }) => {

  if (card.chosen === true && card.show === true) {
    return (
      <div className={classNames({'Card': true, 'glow': true})} onClick={select.bind(null, card)}>
        <h4><b>{card.text}</b></h4> 
      </div>
    );
  } else if (card.show === true) {
    return (
      <div className="Card" onClick={select.bind(null, card)}>
        <h4><b>{card.text}</b></h4> 
      </div>
    );
  } else {
    return (<div className="Card" onClick={revealCard.bind(null, card)} />);
  }
};



export default SubmittedCard;