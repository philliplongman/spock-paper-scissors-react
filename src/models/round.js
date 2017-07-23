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
    if (this.winner() === "player") {
      return `${this.playerChoice.winMessage} You win.`
    }
    else if (this.winner() === "computer") {
      return `${this.computerChoice.winMessage} You lose.`
    }
    else {
      return "Transporter duplicate! A tie."
    }
  }
}

export default Round
