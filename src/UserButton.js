import React from 'react';
import './UserButton.css';

class UserButton extends React.Component {
  render() {
    return <button className="user-button">{this.props.name}</button>;
  }
}

export default UserButton;
