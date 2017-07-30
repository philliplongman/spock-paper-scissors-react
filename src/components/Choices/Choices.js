import React, { Component } from "react"
import "./Choices.css"

import {ContainerQuery} from "react-container-query"
import classnames from "classnames"

import Face from "../Face/Face"

class Choices extends Component {
  handleClick = (e) => {
    let indexStr = e.target.dataset.index

    if (indexStr) {
      let index = parseInt(indexStr, 10)
      this.props.onClick(index)
    }
  }

  component(size) {
    let r = this.props.choices[0]
    let p = this.props.choices[1]
    let s = this.props.choices[2]

    return (
      <div className={classnames("Choices", size)} onClick={this.handleClick}>
        <Face name={r.name} image={r.image} index={0}/>
        <Face name={p.name} image={p.image} index={1}/>
        <Face name={s.name} image={s.image} index={2}/>
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
        {size => this.component(size)}
      </ContainerQuery>
    )
  }
}

export default Choices
