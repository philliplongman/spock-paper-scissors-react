import React, { Component } from "react"

import standardRules from "../../models/rules"
import Match from "../../models/match"

import Choices from "../Choices/Choices"
import Header from "../Header/Header"
import Messages from "../Messages/Messages"
import MuteButton from "../MuteButton/MuteButton"
import Scoreboard from "../Scoreboard/Scoreboard"
import Sound from "react-sound"

import bridge from "../../assets/sounds/bridge.mp3"

class App extends Component {
  constructor(props) {
    super(props)

    let match = new Match(standardRules)

    this.state = {
      matchObject:  match,
      matchState:   match.state(),
      mute:         false
    }

    this.handleMute = this.handleMute.bind(this)
    this.handleLoop = this.handleLoop.bind(this)
    this.handleNewRound = this.handleNewRound.bind(this)
  }

  handleNewRound(index) {
    let match = this.state.matchObject
    let state

    if (match.winner()) {
      state = match.reset()
    }
    else {
      state = match.newRound(index)
    }
    this.setState({ matchState: state })
  }

  handleMute(boolean) {
    this.setState({ mute: boolean })
  }

  handleLoop() {
    this.forceUpdate()
  }

  render() {
    let state     = this.state.matchState

    let score     = state.score
    let messages  = state.messages
    let sound     = state.sound

    let rules     = this.state.matchObject.rules

    let color     = rules.header.color
    let player    = rules.player.name
    let computer  = rules.computer.name
    let choices   = rules.choices

    let mute      = this.state.mute

    return (
      <div className="App">
        <Header color={color}/>
        <Scoreboard player={player} computer={computer} score={score}/>
        <Messages messages={messages}/>
        <Choices choices={choices} onClick={this.handleNewRound}/>

        <MuteButton mute={mute} onClick={this.handleMute}/>
        { mute ||
          <Sound url={sound} autoLoad={true} playStatus={Sound.status.PLAYING}/>
        }
        { mute ||
          <Sound
            url={bridge}
            autoLoad={true}
            playStatus={Sound.status.PLAYING}
            onFinishedPlaying={this.handleLoop}
          />
        }
      </div>
    )
  }
}

export default App
