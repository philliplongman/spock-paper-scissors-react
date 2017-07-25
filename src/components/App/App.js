import React, { Component } from "react"
import Match from "../../models/match"
import "./App.css"

import Header from "../Header/Header"
import Officer from "../Officer/Officer"
import Scoreboard from "../Scoreboard/Scoreboard"


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
    let score = this.state.score
    let handleNewRound = this.handleNewRound

    return (
      <div className="App">
        <Header/>

        <Scoreboard score={score}/>

        <div className="App-round">
          <p>{this.state.messages.roundNumber}</p>
          <p>{this.state.messages.roundOutcome}</p>
          <p>{this.state.messages.matchOutcome}</p>
        </div>

        <div className="App-officers">
          <Officer name="Kirk"  index={0} onClick={handleNewRound}/>
          <Officer name="Spock" index={1} onClick={handleNewRound}/>
          <Officer name="Bones" index={2} onClick={handleNewRound}/>
        </div>
      </div>
    )
  }
}

export default App
