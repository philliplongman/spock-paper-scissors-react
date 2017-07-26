import React, { Component } from "react"
import "./Messages.css"

import {ContainerQuery} from "react-container-query"
import classnames from "classnames"


class Messages extends Component {
  component(params) {
    const messages = this.props.messages

    return (
      <div className={classnames("Messages", params)}>
        { messages.map((message, i) => {
          return <p key={i}>{message}</p>
        })}
      </div>
    )
  }

  render() {
    const breakpoints = {
      "small":  { maxWidth: 474 },
      "medium": { minWidth: 475 }
    }

    return (
      <ContainerQuery query={breakpoints}>
        { (params) => this.component(params) }
      </ContainerQuery>
    )
  }
}

export default Messages
