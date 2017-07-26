import React, { Component } from "react"
import "./Header.css"

import {ContainerQuery} from "react-container-query"
import classnames from "classnames"

import badge from "../../assets/images/badge.png"


class Header extends Component {
  component(params) {
    return (
      <div className={classnames("Header", params)}>
        <img src={badge} alt="Federation badge" />
        <span>Spock Paper Scissors</span>
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
