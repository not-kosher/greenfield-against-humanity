import React from 'react';



const Card = ({card, submit, state}) => {
  return (
    <div className="Card" onClick={function(e) {
      submit(card);
      if (state.turnPhase === 'submission' && state.user !== state.czar && !state.submittedAlready) {
        if ([...(e.target.classList)].includes('Card')) {
          e.target.classList.add('selected');
        } else if ([...(e.target.parentElement.classList)].includes('Card')) {
          e.target.parentElement.classList.add('selected');
        } else if (([...(e.target.parentElement.parentElement.classList)].includes('Card'))) {
          e.target.parentElement.parentElement.classList.add('selected');
        }
      }
    }}>
      <h4 className='card-text' ><b>{card.text}</b></h4> 
    </div>
  );
};

export default Card;