import React from 'react';
import { Switch, Route } from 'react-router-dom';

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
      isLoggedIn: false
    };
  }

  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route render={(props) => (
            <UserAuthContainer isLoggedIn={this.state.isLoggedIn} />
          )}>
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/lobby' component={Lobby} />
            <Route path='/game/:room/:username' component={GameRoom} />
            <Route path='/deckbuilder' component={DeckBuilder} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;