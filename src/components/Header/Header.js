import React, { Component } from "react"
import "./Header.css"

import {ContainerQuery} from "react-container-query"
import classnames from "classnames"

import badge from "../../assets/images/badge.png"


class Header extends Component {
  component(params) {
    let color = this.props.color
    let title = this.props.title

    return (
      <div className={classnames("Header", color, params)}>
        <img src={badge} alt="Federation badge" />
        <span>{title}</span>
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

export default Header
