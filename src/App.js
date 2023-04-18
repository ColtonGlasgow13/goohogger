import React, { Component } from 'react';
import './App.css';
import './wordart.css'
import GoohoggerMain from './GoohoggerMain.js';
import Music from './Music.js';

class App extends Component {

render() {
  return (
    <div id="app">
    <header>
      <h1 class="wordart rainbow"><span class="text">Goohogger.com</span></h1>
    </header>
    <main>
      <GoohoggerMain></GoohoggerMain>
      <GoohoggerMain></GoohoggerMain>
    </main>
    <footer>
      <p>Footer content</p>
      <Music></Music>
    </footer>
  </div>
  );
}

}

export default App;
