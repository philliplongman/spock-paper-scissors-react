import randomItem from "random-item"
import {kirk, spock, bones} from "./move"

class Round {
  constructor(index) {
    this.choices = [kirk, spock, bones]
    this.playerMove = this.choices[index]
    this.computerMove = randomItem(this.choices)
  }

  winner() {
    if (this.playerMove.beats === this.computerMove.name) return "player"
    if (this.computerMove.beats === this.playerMove.name) return "computer"
  }

  outcome() {
    if (this.winner() === "player") {
      return `${this.playerMove.winMessage} You win.`
    }
    else if (this.winner() === "computer") {
      return `${this.computerMove.winMessage} You lose.`
    }
    else {
      return "Transporter duplicate! A tie."
    }
  }
}

export default Round
