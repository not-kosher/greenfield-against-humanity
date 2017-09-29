import React from 'react';
import Hand from './Hand';
import PlayerList from './PlayerList';
import Table from './Table';
import Actions from './Actions';
import MessageBoard from './MessageBoard';
import socket from '../../socket/index.js';


class GameRoom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      room: '',
      hand: [],
      blackCard: {},
      roomCreator: '',
      submittedCards: [],
      turnPhase: '',
      playerArray: [],
      czar: '',
      yourSumittedCards: [],
      messages: []
    };

    this.startPoopPrompt = this.startPoopPrompt.bind(this);
    this.poopSubmission = this.poopSubmission.bind(this); 
    this.initializeGame = this.initializeGame.bind(this);
    this.cardSubmission = this.cardSubmission.bind(this);
    this.revealCard = this.revealCard.bind(this);
    this.winnerSelected = this.winnerSelected.bind(this);
    this.endTurn = this.endTurn.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  componentDidMount() {
    this.setState({
      user: this.props.username,
      room: this.props.match.params.room,
    });
    socket.on('openPoopPrompt', () => {
      var poop = document.getElementById('poop');
      poop.style.display = 'block';
    });
    socket.on('gameHasStarted', () => {
      var poop = document.getElementById('poop');
      poop.style.display = 'none';
      this.initializeGame();
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
      const selected = document.getElementsByClassName('selected');
      for (var i = 0; i < selected.length; i++) {
        selected[i].classList.remove('selected');
      }
      console.log('We are switching to phase: ', phase);
      this.setState({
        turnPhase: phase,
      });
      if (phase === 'revelation') {
        this.state.yourSumittedCards = [];
      }
    });
    socket.on('updateSubmittedCards', (submitted) => {
      const selected = document.getElementsByClassName('selected');
      for (var i = 0; i < selected.length; i++) {
        selected[i].classList.remove('selected');
      }
      this.setState({
        submittedCards: submitted,
      });
      console.log(submitted);

    });
    socket.on('updatePlayers', (players) => {
      this.setState({
        playerArray: players
      });
      if (players.length === 1) {
        this.setState({
          roomCreator: players[0].username
        });
      }
    });
    socket.on('updateMessages', (messages) => {
      this.setState({messages});

      //if at the bottom, scroll more to reveal
      this.messageList.scrollTop = this.messageList.scrollHeight;     
    });
    
    // note: need to find better way of grabbing room name
    socket.emit('enterRoom', this.props.match.params.room);

    //get elements
    this.messageInput = document.getElementById('message-input');
    this.messageList = document.getElementById('message-list');
  }

  componentWillUnmount() {
    socket.removeAllListeners();
  }

  startPoopPrompt() {
    console.log(this.state.roomCreator);

    socket.emit('startPoopPrompt', this.state.room);
    var poop = document.getElementById('poop');
    poop.style.display = 'block';

  }

  poopSubmission() {
    const poopHours = document.getElementById('poopHours').value;
    var poop = document.getElementById('poop');
    document.getElementById('prompt').style.display = 'none';
    document.getElementById('waitingOnPoopers').style.display = 'block';
    socket.emit('poopSubmission', this.state.room, this.state.user, poopHours);
  }

  initializeGame() {
    socket.emit('initializeGame', this.state.room, this.props.username);
  }

  cardSubmission(card) {
    if (this.state.turnPhase === 'submission' && this.state.user !== this.state.czar) {
      this.state.yourSumittedCards.push(card);
      if (this.state.yourSumittedCards.length === this.state.blackCard.pick) {
        socket.emit('cardSubmission', this.state.room, this.props.username, this.state.yourSumittedCards);
      }
    }
  }
  revealCard(card) {
    if (this.state.turnPhase === 'revelation' && this.props.username === this.state.czar) {
      socket.emit('revealCard', this.state.room, card.username);
    }
  }

  winnerSelected(card) {
    if (this.props.username === this.state.czar && this.state.turnPhase === 'judgement') {
      socket.emit('winnerSelected', this.state.room, card.username);
    }
  }

  endTurn() {
    if (this.state.turnPhase === 'end') {
      socket.emit('endTurn', this.state.room);
    }
  }

  submitMessage(e) {
    e.preventDefault();
    console.log('submiting message: ', this.messageInput.value);
    socket.emit('messageSubmission', this.state.room, this.props.username, this.messageInput.value);
    this.messageInput.value = '';
  }


  render() {
    return (
      <div>
        <div className='RoomName'>{this.state.room}</div>
        <div id='poop' className='poopPrompt'>
          <div className='poopContent'>
            <div id='waitingOnPoopers'>Waiting for all players to submit</div>
            <div id='prompt'>
              <div>How many hours has it been since you last pooped?</div>
              <input id='poopHours' />
              <div className='poopSubmit' onClick={this.poopSubmission}>Submit</div>
            </div>
          </div>
        </div>
        <Actions startPoopPrompt={this.startPoopPrompt} endTurn={this.endTurn} state={this.state}/>
        <PlayerList players={this.state.playerArray} czar={this.state.czar}/>
        <Table 
          state = {this.state}
          select={this.winnerSelected} 
          submit={this.cardSubmission} 
          black={this.state.blackCard} 
          cards={this.state.hand} 
          submittedCards={this.state.submittedCards}
          revealCard={this.revealCard}
        />
        <MessageBoard messages={this.state.messages} submitMessage={this.submitMessage}/>
      </div>
    );
  }
}

export default GameRoom;