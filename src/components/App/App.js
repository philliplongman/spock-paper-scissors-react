import React, { Component } from "react"

import Match from "../../models/match"

import Game from "../Game/Game"
import Sound from "react-sound"

import bridge from "../../assets/sounds/bridge.mp3"



class App extends Component {
  render() {
    return (
      <div className="App">
        <Sound
          url={bridge}
          autoLoad={true}
          playStatus={"PLAYING"}
          onFinishedPlaying={() => {this.forceUpdate()}}
        />
        <Game match={new Match()}/>
      </div>
    )
  }
}

export default App
