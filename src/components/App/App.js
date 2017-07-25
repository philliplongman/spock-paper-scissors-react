import React, { Component } from "react"
import Match from "../../models/match"

import Choices from "../Choices/Choices"
import Header from "../Header/Header"
import Messages from "../Messages/Messages"
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
    let messages = this.state.messages
    let choices = ["Kirk", "Spock", "Bones"]
    let handleNewRound = this.handleNewRound

    return (
      <div className="App">
        <Header/>
        <Scoreboard score={score}/>
        <Messages messages={messages}/>
        <Choices choices={choices} onClick={handleNewRound}/>
      </div>
    )
  }
}

export default App
