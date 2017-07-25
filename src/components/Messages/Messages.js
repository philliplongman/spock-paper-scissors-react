import React, { Component } from "react"
import "./Messages.css"


class Messages extends Component {
  render() {
    let roundNumber  = this.props.messages.roundNumber
    let roundOutcome = this.props.messages.roundOutcome
    let matchOutcome = this.props.messages.matchOutcome

    return (
      <div className="Messages">
        <p>{roundNumber}</p>
        <p>{roundOutcome}</p>
        <p>{matchOutcome}</p>
      </div>
    )
  }
}

export default Messages
