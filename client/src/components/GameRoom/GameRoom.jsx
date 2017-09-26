import React from 'react';
import Hand from './Hand';
import PlayerList from './PlayerList';
import Table from './Table';
import socket from '../../socket/index.js';

class GameRoom extends React.Component {
  constructor() {
    super();

    this.state = {
      hand: ['Raptor attacks.', 'Puppies!', 'Praying the gay away.', 'Sexy pillow fights.', 'A micropenis.', 'Being a dick to children.', 'A tiny horse.'],
      blackCard: 'What I love most about Hack Reactor is ____________.',
      submittedCards: [],
      turnPhase: '',
      playerArray: [],
      czar: '',
    };
  }

  componentDidMount() {
    socket.on('gameHasStarted', () => {
      
    });
    socket.on('refillHand', (cards) => {
      this.setState({
        hand: cards
      });
    });
    socket.on('setupNewTurn', (blackCard, czar) => {
      this.setState({
        blackCard: blackCard,
        czar: czar
      });
    });
    socket.on('updatePhase', (phase) => {
      this.setState({
        turnPhase: phase,
      });
    });
    
    socket.emit('enterLobby');
  }

  render() {
    return (
      <div>
        <div className='Logo'>Greenfield Against Humanity</div>
        <div className='RoomName'>Room Name</div>
        <PlayerList />
        <Table black={this.state.blackCard} cards={this.state.hand}/>

      </div>
    );
  }
}

export default GameRoom;