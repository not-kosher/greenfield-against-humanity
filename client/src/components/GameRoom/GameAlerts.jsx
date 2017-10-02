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
        <Actions 
          startPoopPrompt={this.props.startPoopPrompt} 
          endTurn={this.props.endTurn} 
          turnPhase={this.props.turnPhase} 
          user={this.props.user} 
          czar={this.props.czar}
          roomCreator={this.props.roomCreator}
        />
        { this.props.winner && 
          <EndGamePrompt 
            winner={this.props.winner} 
            playerIsLeaving={this.playerIsLeaving} 
            playerIsStaying={this.playerIsStaying}/>
        }
      </div>
    );
  }
}

export default GameAlert;