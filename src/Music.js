import audioFile from './Summer-of-Tomfoolery.mp3';
import React, { Component } from 'react';

class Music extends Component {
    render() {
        return (
          <audio src={audioFile} autoPlay loop />
        );
      }
}

export default Music;