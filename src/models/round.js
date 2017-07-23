class Round {
  constructor(playerChoice, computerChoice) {
    this.playerChoice = playerChoice
    this.computerChoice = computerChoice
  }

  winner() {
    if (this.playerChoice.beats === this.computerChoice.name) return "player"
    if (this.computerChoice.beats === this.playerChoice.name) return "computer"
  }

  outcome() {
    switch (this.winner()) {
      case "player":    return `${this.playerChoice.winMessage} You win.`
      case "computer":  return `${this.computerChoice.winMessage} You lose.`
      default:          return "Transporter duplicate! A tie."
    }
  }
}

export default Round
