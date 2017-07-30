import React, { Component } from "react"

import {standardRules, kobayashiMaru} from "../../models/rules"
import Match from "../../models/match"

import Choices from "../Choices/Choices"
import Header from "../Header/Header"
import Konami from "react-konami"
import Messages from "../Messages/Messages"
import Scoreboard from "../Scoreboard/Scoreboard"
import SoundEffects from "../SoundEffects/SoundEffects"


class App extends Component {
  constructor(props) {
    super(props)

    let match = new Match(standardRules)

    this.state = {
      matchObject:  match,
      matchState:   match.state(),
      mute:         false
    }
  }

  handleKonami = (e) => {
    let match = new Match(kobayashiMaru)

    this.setState({
      matchObject:  match,
      matchState:   match.state()
    })
  }

  handleNewRound = (index) => {
    let match = this.state.matchObject

    if (match.winner()) {
      let newMatch = new Match(standardRules)
      this.setState({
        matchObject:  newMatch,
        matchState:   newMatch.state()
      })
    }
    else {
      this.setState({
        matchState: match.newRound(index)
      })
    }
  }

  render() {
    let state     = this.state.matchState
    let score     = state.score
    let messages  = state.messages
    let sound     = state.sound

    let rules     = this.state.matchObject.rules
    let title     = rules.header.title
    let color     = rules.header.color
    let player    = rules.player.name
    let computer  = rules.computer.name
    let choices   = rules.choices

    return (
      <div className="App">
        <Header title={title} color={color}/>
        <Scoreboard player={player} computer={computer} score={score}/>
        <Messages messages={messages}/>
        <Choices choices={choices} onClick={this.handleNewRound}/>
        <SoundEffects sound={sound}/>
        <Konami easterEgg={this.handleKonami}/>
      </div>
    )
  }
}

export default App
