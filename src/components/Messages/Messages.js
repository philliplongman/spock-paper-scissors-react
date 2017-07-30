import React, { Component } from "react"
import "./Messages.css"

import {ContainerQuery} from "react-container-query"
import classnames from "classnames"


class Messages extends Component {
  component(size) {
    let messages = this.props.messages

    return (
      <div className={classnames("Messages", size)}>
        { messages.map((message, i) => {
          return <p key={i}>{message}</p>
        })}
      </div>
    )
  }

  render() {
    let breakpoints = {
      small:  { maxWidth: 474 },
      medium: { minWidth: 475, maxWidth: 1499 },
      large:  { minWidth: 1500 }
    }

    return (
      <ContainerQuery query={breakpoints}>
        { size => this.component(size) }
      </ContainerQuery>
    )
  }
}

export default Messages
