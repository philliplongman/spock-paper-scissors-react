import React, { Component } from "react"

import MuteButton from "../MuteButton/MuteButton"
import Sound from "react-sound"
import SoundLoop from "../SoundLoop/SoundLoop"

import {soundManager} from "soundmanager2"

import bridge from "../../assets/sounds/bridge.mp3"

soundManager.setup({ignoreMobileRestrictions: true, debugMode: false})


class SoundEffects extends Component {
  render() {
    let sound = this.props.sound

    return (
      <div className="SoundEffects">
        <MuteButton/>
        <SoundLoop sound={bridge}/>
        <Sound url={sound} autoLoad={true} playStatus={Sound.status.PLAYING}/>
      </div>
    )
  }
}

export default SoundEffects
