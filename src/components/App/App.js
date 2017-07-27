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
    this.state = { playSound: true }
    this.handleMute = this.handleMute.bind(this)
  }

  handleMute(boolean) {
    this.setState({ playSound: boolean })
  }

  render() {
    let playSound = this.state.playSound

    return (
      <div className="App">
        <Game match={match} playSound={playSound}/>
        <MuteButton playSound={playSound} onClick={this.handleMute}/>
        { playSound &&
          <Sound
            url={bridge}
            autoLoad={true}
            playStatus={Sound.status.PLAYING}
            onFinishedPlaying={() => {this.forceUpdate()}}
          />
        }
      </div>
    )
  }
}

export default App
