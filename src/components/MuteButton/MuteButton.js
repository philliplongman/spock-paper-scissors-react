import React, { Component } from "react"
import "./MuteButton.css"

import path from "path"

import {soundManager} from "soundmanager2"

import mute from "../../assets/images/mute.svg"
import unmute from "../../assets/images/unmute.svg"


class MuteButton extends Component {
  constructor(props) {
    super(props)
    this.state = { mute: false }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    let mute = !this.state.mute

    if (mute) soundManager.mute()
    else      soundManager.unmute()

    this.setState({mute: mute})
  }

  render() {
    let icon = this.state.mute ? mute : unmute
    let alt = path.basename(icon)

    return (
      <div className="MuteButton" onClick={this.handleClick}>
        <img src={icon} alt={alt}/>
      </div>
    )
  }
}

export default MuteButton
