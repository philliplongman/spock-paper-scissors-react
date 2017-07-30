import React, { Component } from "react"
import "./Choices.css"

import {ContainerQuery} from "react-container-query"
import classnames from "classnames"

class Choices extends Component {
  handleClick = (e) => {
    let index = parseInt(e.target.dataset.index, 10)
    this.props.onClick(index)
  }

  component(size) {
    return (
      <div className={classnames("Choices", size)}>

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

export default Choices
