import React, { Component } from "react"
import "./Choices.css"

class Choices extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(index) {
    this.props.onClick(index)
  }

  render() {
    return (
      <div className="Choices">
        {this.props.choices.map((name, i) => {
          return this.renderChoice(name, i)
        })}
      </div>
    )
  }

  renderChoice(name, i) {
    let img = require(`../../assets/images/${name.toLowerCase()}.png`)
    let chooseMe = () => { this.handleClick(i) }

    return (
      <div className="Choices-character" key={i} onClick={chooseMe}>
        <img className="Choices-character-img" src={img} alt={name}/>
      </div>
    )
  }
}

export default Choices
