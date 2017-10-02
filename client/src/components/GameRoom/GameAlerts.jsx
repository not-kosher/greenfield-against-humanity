import React from 'react';
import Actions from './Actions';
import EndGamePrompt from './EndGamePrompt';

class GameAlert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submittedPoop: false,
      decidedEndGame: false,
    };
  }

  render() {
    return (
      <div className='game-alerts'>
        <Actions startPoopPrompt={this.startPoopPrompt} endTurn={this.endTurn} state={this.state}/>
        { this.state.winner && 
          <EndGamePrompt winner={this.state.winner} playerIsLeaving={this.playerIsLeaving} playerIsStaying={this.playerIsStaying}/>
        }
      </div>
    );
  }
}

export default GameAlert;