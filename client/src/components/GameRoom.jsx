import React from 'react';
import Hand from './Hand';
import PlayerList from './PlayerList';
import Table from './Table';

class GameRoom extends React.Component {
  constructor() {
    super();

    this.state = {
      cards: ['Raptor attacks.', 'Puppies!', 'Praying the gay away.', 'Sexy pillow fights.', 'A micropenis.', 'Being a dick to children.', 'A tiny horse.'],
      blackCard: 'What I love most about Hack Reactor is ____________.'
    };
  }

  render() {
    return (
      <div>
        <div className='Logo'>Greenfield Against Humanity</div>
        <div className='RoomName'>Room Name</div>
        <PlayerList />
        <Table black={this.state.blackCard} cards={this.state.cards}/>

      </div>
    );
  }
}

export default GameRoom;