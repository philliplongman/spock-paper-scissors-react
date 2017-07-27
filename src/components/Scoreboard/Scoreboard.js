import React, { Component } from "react"
import "./Scoreboard.css"


class Scoreboard extends Component {
  render() {
    let player = this.props.player
    let computer = this.props.computer
    let playerScore = this.props.score.player
    let computerScore = this.props.score.computer

    return (
      <div className="Scoreboard">
        <div className="Scoreboard-scores">
          <div>{player}: {playerScore}</div>
          <div>{computer}: {computerScore}</div>
        </div>
      </div>
    )
  }
}

export default Scoreboard
