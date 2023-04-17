import React, { Component } from 'react';

class GoohoggerMain extends Component {
    constructor(props) {
        super(props)

        this.state = {
            goohoggerClicked: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

  handleClick() {
    this.setState({ goohoggerClicked: !this.state.goohoggerClicked})
  }

  render() {
    return (
      <div className="image-container" id='goohogger-image-container'>
        <img src="goohogger-head-on.png" 
            alt="goohogger head ON" 
            id="main-image"
            onClick={this.handleClick}></img>
        <img src="f-you.png"
            alt="f you"
            id="overlay-image"
            hidden={!this.state.goohoggerClicked}></img>
      </div>
    );
  }
}

export default GoohoggerMain;