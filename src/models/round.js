class Round {
  constructor(playerChoice, computerChoice) {
    this.playerChoice = playerChoice
    this.computerChoice = computerChoice
  }

  winner() {
    if (this.playerChoice.beats === this.computerChoice.name) return "player"
    if (this.computerChoice.beats === this.playerChoice.name) return "computer"
  }

  message() {
    switch (this.winner()) {
      case "player":    return this.playerChoice.winMessage
      case "computer":  return this.computerChoice.winMessage
      default:          return "Transporter duplicate!"
    }
  }

  outcome() {
    switch (this.winner()) {
      case "player":    return "You win."
      case "computer":  return "You lose."
      default:          return "A tie."
    }
  }
}

export default Round
