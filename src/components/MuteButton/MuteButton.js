import React, { Component } from "react"
import "./MuteButton.css"

import path from "path"

import mute from "../../assets/images/mute.svg"
import unmute from "../../assets/images/unmute.svg"

class MuteButton extends Component {
  handleClick() {
    let playSound = !this.props.playSound
    this.props.onClick(playSound)
  }

  render() {
    let icon = this.props.playSound ? unmute : mute
    let alt = path.basename(icon)

    return (
      <div className="MuteButton" onClick={this.handleClick.bind(this)}>
        <img src={icon} alt={alt}/>
      </div>
    )
  }
}

export default MuteButton
