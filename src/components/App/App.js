import React, { Component } from 'react'
import Match from '../../models/match'
import './App.css'

import badge from '../../assets/images/badge.png'
import kirk_face from '../../assets/images/kirk.png'
import spock_face from '../../assets/images/spock.png'
import bones_face from '../../assets/images/bones.png'


class App extends Component {
  constructor(props, match) {
    super(props)
    this.match = new Match()
    this.state = {
      score: { player: 0, computer: 0 },
      messages: {
        roundNumber:   "Round 1",
        roundOutcome:  "Choose your officer!",
        matchOutcome:  null
      }
    }
  }

  playerChooses(index) {
    if (!this.match.winner()) {
      let state = this.match.newRound(index)
      this.setState(state)
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>
            <img src={badge} className="App-logo" alt="logo" />
            <span>Spock Paper Scissors</span>
          </h2>
        </div>

        <div className="App-scoreboard">
          <div className="App-scoreboard-container">
            <div>Enterprise: {this.state.score.player}</div>
            <div>Khan: {this.state.score.computer}</div>
          </div>
        </div>

        <div className="App-round">
          <p>{this.state.messages.roundNumber}</p>
          <p>{this.state.messages.roundOutcome}</p>
          <p>{this.state.messages.matchOutcome}</p>
        </div>

        <div className="App-officers">
          <div className="App-officer" onClick={() => this.playerChooses(0)}>
            <img src={kirk_face} alt="Kirk"/>
          </div>
          <div className="App-officer" onClick={() => this.playerChooses(1)}>
            <img src={spock_face} alt="Spock"/>
          </div>
          <div className="App-officer" onClick={() => this.playerChooses(2)}>
            <img src={bones_face} alt="Bones"/>
          </div>
        </div>
      </div>
    )
  }
}

export default App
