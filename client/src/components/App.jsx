import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Lobby from './Lobby/Lobby';
import GameRoom from './GameRoom/GameRoom';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Lobby} />
          <Route path='/game/:room/:username' component={GameRoom} />
        </Switch>
      </div>
    );
  }
}

export default App;