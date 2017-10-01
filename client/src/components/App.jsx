import React from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Landing from './Landing/Landing';
import UserAuthContainer from './UserAuthContainer';
import Navbar from './Navbar';
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
    this.logout = this.logout.bind(this);
  }

  signup(e) {
    e.preventDefault();
    axios.post('/api/users/signup', {
      username: document.getElementById('username-signup').value,
      password: document.getElementById('password-signup').value
    })
      .then((res) => {
        this.setState({
          username: document.getElementById('username-signup').value,
          isLoggedIn: true
        });
        this.props.history.push('/dashboard');
      })
      .catch((err) => {
        alert('There was an error signing up, please try again');
      });
  }

  login(e) {
    e.preventDefault();
    axios.post('/api/users/login', {
      username: document.getElementById('username-login').value,
      password: document.getElementById('password-login').value
    })
      .then((res) => {
        this.setState({
          username: document.getElementById('username-login').value,
          isLoggedIn: true
        });
        this.props.history.push('/dashboard');
      })
      .catch((err) => {
        alert('Username or password is incorrect, please try again');
      });
  }

  logout() {
    axios.post('/api/users/logout')
      .then((res) => {
        this.setState({
          username: '',
          isLoggedIn: false
        });
        this.props.history.push('/');
      })
      .catch((err) => {
        alert('There was an error logging out, please try again');
      });
  }

  render() {
    return (
      <div className='App'>
        <Navbar username={this.state.username} logout={this.logout} />
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