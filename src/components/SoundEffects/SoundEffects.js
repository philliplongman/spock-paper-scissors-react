import React, { Component } from "react"

import MuteButton from "../MuteButton/MuteButton"
import Sound from "react-sound"

import {soundManager} from "soundmanager2"

import bridge from "../../assets/sounds/bridge.mp3"

soundManager.setup({ignoreMobileRestrictions: true, debugMode: false})


class SoundEffects extends Component {
  constructor(props) {
    super(props)
    this.handleLoop = this.handleLoop.bind(this)
  }

  handleLoop() {
    this.forceUpdate()
  }

  render() {
    let soundEffect = this.props.sound

    return (
      <div className="SoundEffects">
        <MuteButton/>
        <Sound
          url={soundEffect}
          autoLoad={true}
          playStatus={Sound.status.PLAYING}
        />
        <Sound
          url={bridge}
          autoLoad={true}
          playStatus={Sound.status.PLAYING}
          onFinishedPlaying={this.handleLoop}
        />
      </div>
    )
  }
}

export default SoundEffects
