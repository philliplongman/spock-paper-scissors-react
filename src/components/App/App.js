import React, { Component } from 'react'
import badge from '../../assets/images/badge.png'
import kirk from '../../assets/images/kirk.png'
import spock from '../../assets/images/spock.png'
import bones from '../../assets/images/bones.png'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: { player: 0, computer: 0 },
      round: { number: 1, message: "Choose your officer!" }
    }
  }

  playerChooses(officer) {
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
          <div>Enterprise: {this.state.score.player}</div>
          <div>Khan: {this.state.score.computer}</div>
        </div>

        <div className="App-round">
          <p>Round {this.state.round.number}</p>
          <p>Round {this.state.round.message}</p>
        </div>

        <div className="App-officers">
          <div className="App-officer" onClick={this.playerChooses("kirk")}>
            <img src={kirk} alt="Kirk"/>
          </div>
          <div className="App-officer" onClick={this.playerChooses("spock")}>
            <img src={spock} alt="Spock"/>
          </div>
          <div className="App-officer" onClick={this.playerChooses("bones")}>
            <img src={bones} alt="Bones"/>
          </div>
        </div>
      </div>
    )
  }
}

export default App
