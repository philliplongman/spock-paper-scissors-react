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

  renderChoice(choice, i) {
    let name = choice.name
    let img = choice.image
    let chooseMe = () => { this.handleClick(i) }

    return (
      <div className="Choices-character" key={i} onClick={chooseMe}>
        <img className="Choices-character-img" src={img} alt={name}/>
      </div>
    )
  }

  render() {
    return (
      <div className="Choices">
        {this.props.choices.map((choice, i) => {
          return this.renderChoice(choice, i)
        })}
      </div>
    )
  }
}

export default Choices
