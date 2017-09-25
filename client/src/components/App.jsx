import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Lobby from './Lobby'

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Lobby} />
        </Switch>
      </div>
    );
  }
}

export default App;