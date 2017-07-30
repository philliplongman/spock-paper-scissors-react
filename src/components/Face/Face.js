import React, { Component } from "react"
import "./Face.css"

class Face extends Component {
  render() {
    let image = this.props.image
    let name  = this.props.name
    let index = this.props.index

    return (
      <div className="Face" key={name}>
        <img src={image} alt={name} data-index={index} />
      </div>
    )
  }
}

export default Face
