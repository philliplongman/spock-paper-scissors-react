import React, { Component } from "react"
import "./Choices.css"

class Choices extends Component {
  handleClick = (e) => {
    let index = Number.parseInt(e.target.dataset.index)
    this.props.onClick(index)
  }

  render() {
    return (
      <div className="Choices">
        {this.props.choices.map((choice, i) => {
          return (
            <div className="Choices-character" key={i} onClick={this.handleClick}>
              <img
                className="Choices-character-img"
                src={choice.image}
                alt={choice.name}
                data-index={i}
              />
            </div>
          )
        })}
      </div>
    )
  }
}

export default Choices
