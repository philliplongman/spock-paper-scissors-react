import React, { Component } from "react"
import "./Officer.css"

class Officer extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    let index = this.props.index
    let newRound = this.props.onClick
    newRound(index)
  }

  render() {
    const name = this.props.name
    const img = require(`../../assets/images/${name.toLowerCase()}.png`)

    return (
      <div className="Officer" onClick={this.handleClick}>
        <img className="Officer-img" src={img} alt={name}/>
      </div>
    )
  }
}

export default Officer
