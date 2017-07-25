import React, { Component } from "react"
import Match from "../../models/match"
import "./App.css"

import Officer from "../Officer/Officer"

import badge from "../../assets/images/badge.png"


class App extends Component {
  constructor(props) {
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
    this.handleNewRound = this.handleNewRound.bind(this)
  }

  handleNewRound(index) {
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
          <Officer name="Kirk"  index={0} onClick={this.handleNewRound}/>
          <Officer name="Spock" index={1} onClick={this.handleNewRound}/>
          <Officer name="Bones" index={2} onClick={this.handleNewRound}/>
        </div>
      </div>
    )
  }
}

export default App
