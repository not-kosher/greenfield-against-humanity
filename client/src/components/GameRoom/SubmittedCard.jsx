import React from 'react';
import classNames from 'classnames';

const SubmittedCard = ({ select, card, submission, revealCard }) => {
  //renders submission based on turn phase
  if (submission.chosen === true && submission.show === true) {
    return (
      <div className={classNames({'submitted-card': true, 'glow': true})} onClick={select.bind(null, submission)}>
        <div className={'winner-content'}>
          <h4 className='card-text'><b>{card.text}</b></h4> 
          <h4 className={'winner'}><b>{submission.username}</b></h4> 
        </div>
      </div>
    );
  } else if (submission.show === true) {
    return (
      <div className="submitted-card" onClick={select.bind(null, submission)}>
        <h4 className='card-text'><b>{card.text}</b></h4> 
      </div>
    );
  } else {
    return (<div className="submitted-card" onClick={revealCard.bind(null, submission)}/>);
  }
};


export default SubmittedCard;