import React from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Landing from './Landing/Landing';
import UserAuthContainer from './UserAuthContainer';
import Dashboard from './Dashboard/Dashboard';
import Lobby from './Lobby/Lobby';
import GameRoom from './GameRoom/GameRoom';
import DeckBuilder from './DeckBuilder/DeckBuilder';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      isLoggedIn: false
    };

    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
  }

  signup() {
    axios.post('/api/users/signup', {
      username: document.getElementById('username-signup').value,
      password: document.getElementById('password-signup').value
    })
      .then((res) => {
        console.log('signup success', res);
        this.setState({
          username: document.getElementById('username-signup').value,
          isLoggedIn: !this.state.isLoggedIn
        });
        // redirect to dashboard...
        this.props.history.push('/dashboard');
      })
      .catch((res) => {
        console.log('signup error', res);
      });
  }

  login() {
    axios.post('/api/users/login', {
      username: document.getElementById('username-login').value,
      password: document.getElementById('password-login').value
    })
      .then((res) => {
        console.log('login success', res);
        this.setState({
          username: document.getElementById('username-login').value,
          isLoggedIn: !this.state.isLoggedIn
        });
        this.props.history.push('/dashboard');
      })
      .catch((res) => {
        console.log('login error', res);
      });
  }

  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' render={(props) => (
            <Landing signup={this.signup} login={this.login} />
          )} />
          <Route render={(props) => (
            <UserAuthContainer {...props} isLoggedIn={this.state.isLoggedIn}>
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/lobby' render={(props) => (
                <Lobby {...props} username={this.state.username} />
              )} />
              <Route path='/game/:room' render={(props) => (
                <GameRoom {...props} username={this.state.username} />
              )} />
              <Route path='/deckbuilder' component={DeckBuilder} />
            </UserAuthContainer>
          )} />
        </Switch>
      </div>
    );
  }
}

export default App;