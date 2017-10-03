import React from 'react';



const Card = ({card, submit, state}) => {
  return (
    <div className="card" onClick={function(e) {
      submit(card);
      { /* this sets the red selective border around the card once it has been selected, the card element
      has three divs in it, on click it would outline each individual div, this checks each element
      if it is the card element it outlines it, if not if finds the proper card parent element and 
      adds the outline  */ } 
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