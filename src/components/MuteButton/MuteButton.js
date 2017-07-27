import React, { Component } from "react"
import "./MuteButton.css"

import path from "path"

import mute from "../../assets/images/mute.svg"
import unmute from "../../assets/images/unmute.svg"

class MuteButton extends Component {
  handleClick() {
    let mute = !this.props.mute
    this.props.onClick(mute)
  }

  render() {
    let icon = this.props.mute ? mute : unmute
    let alt = path.basename(icon)

    return (
      <div className="MuteButton" onClick={this.handleClick.bind(this)}>
        <img src={icon} alt={alt}/>
      </div>
    )
  }
}

export default MuteButton
