import React from 'react';
import SubmittedCard from './SubmittedCard';

const Submissions = ({ submission, select, revealCard }) => {
  return (
    <div className='singleSubmission'>
      {submission.cards.map((card) => {
        return <SubmittedCard submission={submission} card={card} select={select} revealCard={revealCard} key ={card.id}/>;
      })}
    </div>
  );
};

export default Submissions;