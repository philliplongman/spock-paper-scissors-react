import React, { Component } from "react"

import Choices from "../Choices/Choices"
import Header from "../Header/Header"
import Messages from "../Messages/Messages"
import Scoreboard from "../Scoreboard/Scoreboard"
import Sound from "react-sound"


class Game extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.match.state()
    this.handleNewRound = this.handleNewRound.bind(this)
  }

  shouldComponentUpdate(_nextProps, nextState) {
    return this.state !== nextState
  }

  handleNewRound(index) {
    let match = this.props.match
    let state

    if (match.winner()) {
      state = match.reset()
    }
    else {
      state = match.newRound(index)
    }
    this.setState(state)
  }

  render() {
    let rules = this.props.match.rules

    let color = rules.header.color

    let player = rules.player.name
    let computer = rules.computer.name
    let score = this.state.score

    let messages = this.state.messages

    let choices = rules.choices
    let handleNewRound = this.handleNewRound

    let mute = this.props.mute
    let sound = this.state.sound

    return (
      <div className="Game">
        <Header color={color}/>
        <Scoreboard player={player} computer={computer} score={score}/>
        <Messages messages={messages}/>
        <Choices choices={choices} onClick={handleNewRound}/>
        { mute ||
          <Sound url={sound} autoLoad={true} playStatus={Sound.status.PLAYING}/>
        }
      </div>
    )
  }
}

export default Game
