import React, { Component } from 'react';
import MainImage from './GoohoggerMain.js';
import './App.css';
import './wordart.css'
import GoohoggerMain from './GoohoggerMain.js';

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
    </footer>
  </div>
  );
}

}

export default App;
