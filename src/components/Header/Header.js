import React, { Component } from "react"
import Match from "../../models/match"
import "./Header.css"

import badge from "../../assets/images/badge.png"


class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img src={badge} className="Header-logo" alt="logo" />
        <span className="Header-text">Spock Paper Scissors</span>
      </div>
    )
  }
}

export default Header
