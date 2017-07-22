import React, { Component } from 'react';
import badge from './badge.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>
            <img src={badge} className="App-logo" alt="logo" />
            <span>Spock Paper Scissors</span>
          </h2>
        </div>
      </div>
    );
  }
}

export default App;
