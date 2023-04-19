import React, { Component } from 'react';
import './App.css';
import './wordart.css'
import GoohoggerMain from './GoohoggerMain.js';
import InterfacePanel from './InterfacePanel';
import Music from './Music.js';

function App() {
  const buttons = [
    'Button 1',
    'Button 2',
    'Button 3',
    'Button 4',
    'Button 5',
    'Button 6',
    'Button 7',
    'Button 8',
    'Button 9',
    'Button 10',
    'Button 11'
  ];

  return (
    <div id="app">
    <header>
      <h1 class="wordart rainbow"><span class="text">Goohogger.com</span></h1>
    </header>
    <main>
      <GoohoggerMain></GoohoggerMain>
      <InterfacePanel title="Interface Panel" buttons={buttons} />
      <GoohoggerMain></GoohoggerMain>
    </main>
    <footer>
      <p>Footer content</p>
      <Music></Music>
    </footer>
  </div>
  );

}

export default App;
