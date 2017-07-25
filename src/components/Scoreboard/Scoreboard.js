import React, { Component } from "react"
import "./Scoreboard.css"


class Scoreboard extends Component {
  render() {
    let player = this.props.score.player
    let computer = this.props.score.computer

    return (
      <div className="Scoreboard">
        <div className="Scoreboard-scores">
          <div>Enterprise: {player}</div>
          <div>Khan: {computer}</div>
        </div>
      </div>
    )
  }
}

export default Scoreboard
