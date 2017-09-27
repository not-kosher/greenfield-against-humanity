import React from 'react';
import classNames from 'classnames';



const SubmittedCard = ({ select, card }) => {

  if (card.chosen === true && card.shown === true) {
    return (
      <div className={classNames({'Card': true, 'glow': true})} onClick={select.bind(null, card)}>
        <h4><b>{card.text}</b></h4> 
      </div>
    );
  } else if (card.shown === true) {
    return (
      <div className="Card" onClick={select.bind(null, card)}>
        <h4><b>{card.text}</b></h4> 
      </div>
    );
  } else {
    return (<div className="Card" onClick={select.bind(null, card)} />);
  }
};



export default SubmittedCard;