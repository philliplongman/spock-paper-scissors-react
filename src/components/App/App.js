import React, { Component } from "react"

import Match from "../../models/match"

import Game from "../Game/Game"
import MuteButton from "../MuteButton/MuteButton"
import Sound from "react-sound"

import bridge from "../../assets/sounds/bridge.mp3"

const match = new Match()

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ruleset: standardRules,
      mute: false
    }
    this.handleMute = this.handleMute.bind(this)
    this.handleLoop = this.handleLoop.bind(this)
  }

  handleMute(boolean) {
    this.setState({ mute: boolean })
  }

  handleLoop() {
    this.forceUpdate()
  }

  render() {
    let mute = this.state.mute

    return (
      <div className="App">
        <Game match={match} mute={mute}/>
        <MuteButton mute={mute} onClick={this.handleMute}/>
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
