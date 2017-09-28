import React from 'react';

class UserAuthContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.isLoggedIn) {
      this.props.history.push('/');
    }
  }

  render() {
    return this.props.isLoggedIn ? this.props.children : null;
  }

}

export default UserAuthContainer;
