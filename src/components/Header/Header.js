import React, { Component } from "react"
import "./Header.css"

import {ContainerQuery} from "react-container-query"
import classnames from "classnames"

import badge from "../../assets/images/badge.png"


class Header extends Component {
  component(size) {
    let color = this.props.color
    let title = this.props.title

    return (
      <div className={classnames("Header", color, size)}>
        <img src={badge} alt="Federation badge" />
        <span>{title}</span>
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

export default Header
