import tieSound from "../assets/sounds/tie.mp3"


class Round {
  constructor(playerChoice, computerChoice) {
    this.playerChoice = playerChoice
    this.computerChoice = computerChoice
    this.winner = this.decideWinner()
  }

  decideWinner() {
    if (this.computerChoice.name.match(this.playerChoice.beats)) return "player"
    if (this.playerChoice.name.match(this.computerChoice.beats)) return "computer"
  }

  message() {
    switch (this.winner) {
      case "player":    return this.playerChoice.winMessage
      case "computer":  return this.computerChoice.winMessage
      default:          return "Transporter duplicate!"
    }
  }

  outcome() {
    switch (this.winner) {
      case "player":    return "You win."
      case "computer":  return "You lose."
      default:          return "A tie."
    }
  }

  sound() {
    switch (this.winner) {
      case "player":    return this.playerChoice.winSound
      case "computer":  return this.playerChoice.loseSound
      default:          return tieSound
    }
  }
}

export default Round
