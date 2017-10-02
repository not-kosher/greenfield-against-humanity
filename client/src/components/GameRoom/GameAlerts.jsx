import React from 'react';
import EndGamePrompt from './EndGamePrompt';

class GameAlert extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.user === this.props.roomCreator && this.props.turnPhase === '') {
      return (
        <div>
          <div className='alert-message'>
            Press "Start Game" when you are ready to begin your indecency.
          </div>
          <div id='Start' className='Action alert-button'>
            <div onClick={this.props.startPoopPrompt}>Start Game</div>
          </div>
        </div>
      );
    } else if (this.props.turnPhase === '') {
      return (
        <div className='alert-message'>
          Waiting for the game creator to start the game.
        </div>
      );
    } else if (this.props.turnPhase === 'ordering') {
      return (
        <div className='alert-message'>
          Only the emptiest of bowels can be the first card czar.
        </div>
      );
    } else if (this.props.user === this.props.czar && this.props.turnPhase === 'submission') {
      return (
        <div className='alert-message'>
          {`Waiting on ${this.props.numToWaitFor} more minion${this.props.numToWaitFor > 1 ? 's' : ''} to submit.`}
        </div>
      );
    } else if (this.props.turnPhase === 'submission') {
      return (
        <div className='alert-message'>
          Select the most wretched card(s) from your hand for this black card.
        </div>
      );
    } else if (this.props.user === this.props.czar && this.props.turnPhase === 'revelation') {
      return (
        <div className='alert-message'>
          Click on the cards to reveal how terrible your friends are.
        </div>
      );
    } else if (this.props.turnPhase === 'revelation') {
      return (
        <div className='alert-message'>
          Waiting on the czar to reveal all the cards. Try not to faint from the inhumanity.
        </div>
      );
    } else if (this.props.user === this.props.czar && this.props.turnPhase === 'judgement') {
      return (
        <div className='alert-message'>
          Select the most repugnant card to win this round.
        </div>
      );
    } else if (this.props.turnPhase === 'judgement') {
      return (
        <div className='alert-message'>
          Waiting on the czar to pick the most repugnant person to win this round.
        </div>
      );
    } else if (this.props.user === this.props.czar && this.props.turnPhase === 'end') {
      return (
        <div>
          <div className='alert-message'>
            Press "Next Turn" to pass the crown to the next corrupt monarch.
          </div>
          <div className='Action alert-button'>
            <div onClick={this.props.endTurn}>Next Turn</div>
          </div>
        </div>
      );
    } else if (this.props.turnPhase === 'end') {
      return (
        <div className='alert-message'>
          Waiting on the czar to pass the turn.
        </div>
      );
    } else if (this.props.turnPhase === 'gameOver') {
      return (
        <EndGamePrompt 
          decided={this.props.decided}
          winner={this.props.winner} 
          playerIsLeaving={this.props.playerIsLeaving} 
          playerIsStaying={this.props.playerIsStaying}
        />
      );
    } else {
      return null;
    }

    // return (
    //   <div className='game-alerts'>
    //     <Actions 
    //       startPoopPrompt={this.props.startPoopPrompt} 
    //       endTurn={this.props.endTurn} 
    //       turnPhase={this.props.turnPhase} 
    //       user={this.props.user} 
    //       czar={this.props.czar}
    //       roomCreator={this.props.roomCreator}
    //     />
    //     { this.props.turnPhase === 'submission' ?
    //       <div className='alert-message'>

    //       </div>
    //       : this.props.turnPhase === 'gameOver' ? 
    //         <EndGamePrompt 
    //           winner={this.props.winner} 
    //           playerIsLeaving={this.props.playerIsLeaving} 
    //           playerIsStaying={this.props.playerIsStaying}
    //         />
    //         : null
    //     }
    //   </div>
    // );
  }
}

export default GameAlert;