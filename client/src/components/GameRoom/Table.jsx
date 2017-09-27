import React from 'react';
import BlackCard from './BlackCard';
import Hand from './Hand'; 
import SubmittedCard from './SubmittedCard';

const Table = ({ select, cards, black, submit, submittedCards }) => {
  return (
    <div className='Table'>

      <div className='Submitted'>
        <BlackCard card={black} />
        {submittedCards.map((card, key) => {
          return <SubmittedCard card={card} select={select} key={key}/>;
        })}
      </div>
      <Hand cards={cards} submit={submit}/>
    </div>
  );
};

export default Table;