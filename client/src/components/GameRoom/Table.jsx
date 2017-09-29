import React from 'react';
import BlackCard from './BlackCard';
import Hand from './Hand'; 
import SubmittedCard from './SubmittedCard';
import Submissions from './Submissions';
const Table = ({ select, cards, black, submit, submittedCards, revealCard, state }) => {
  return (
    <div className='Table'>
      <div className='Submitted'>
        <BlackCard card={black} />
        {submittedCards.map((submission) => {
          console.log(submission);
          return <Submissions submission={submission} select={select} revealCard={revealCard} />;
        })}
      </div>
      <Hand cards={cards} submit={submit} state={state}/>
    </div>
  );
};

export default Table;