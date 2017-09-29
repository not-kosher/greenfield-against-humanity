import React from 'react';
import classNames from 'classnames';



const SubmittedCard = ({ select, card, submission, revealCard }) => {

  if (submission.chosen === true && submission.show === true) {

    return (
      <div className={classNames({'Card': true, 'glow': true})} onClick={select.bind(null, submission)}>
        <div className={'winnerContent'}>
          <h4><b>{card.text}</b></h4> 
          <h4 className={'winner'}><b>{submission.username}</b></h4> 
        </div>
      </div>
    );

  } else if (submission.show === true) {
    return (
      <div className="Card" onClick={select.bind(null, submission)}>
        <h4><b>{card.text}</b></h4> 
      </div>
    );
  } else {
    return (<div className="Card" onClick={revealCard.bind(null, submission)}/>);
  }
};


export default SubmittedCard;