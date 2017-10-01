import React from 'react';

class UserAuthContainer extends React.Component {
  componentDidMount() {
    if (!this.props.isLoggedIn) {
      this.props.history.push('/');
    }
  }

  render() {
    // note: there must be a better way to do this
    return this.props.isLoggedIn ? (<div id='auth-container'>{this.props.children}</div>) : null;
  }

}

export default UserAuthContainer;
