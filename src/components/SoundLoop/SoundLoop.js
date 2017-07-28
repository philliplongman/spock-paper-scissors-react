import React, { Component } from "react"

import Sound from "react-sound"


class SoundLoop extends Component {
  handleLoop = (e) => {
    this.forceUpdate()
  }

  render() {
    let sound = this.props.sound

    return (
      <div className="SoundLoop">
        <Sound
          url={sound}
          autoLoad={true}
          playStatus={Sound.status.PLAYING}
          onFinishedPlaying={this.handleLoop}
        />
      </div>
    )
  }
}

export default SoundLoop
