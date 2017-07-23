import Round from './round'

class Match {
  constructor() {
    this.rounds = []
  }

  newRound(index) {
    this.rounds.push(new Round(index))
    return this.state()
  }

  state() {
    let state = {
      score: {
        player:   this.playerScore(),
        computer: this.computerScore()
      },
      messages: {
        roundNumber:  this.roundNumber(),
        roundOutcome: this.roundOutcome(),
        matchOutcome: this.matchOutcome()
      }
    }
    return state
  }

  playerScore() {
    let filter = this.rounds.filter((round) => {
      return round.winner() === "player"
    })
    return filter.length
  }

  computerScore() {
    let filter = this.rounds.filter((round) => {
      return round.winner() === "computer"
    })
    return filter.length
  }

  roundNumber() {
    return `Round: ${this.rounds.length + 1}`
  }

  roundOutcome() {
    if (this.rounds.length > 0) return this.rounds[this.rounds.length - 1].outcome()
  }

  matchOutcome() {
    if (this.winner() === "player") return "The Enterprise crew wins!"
    if (this.winner() === "computer") return "Khan has defeated you!"
  }

  winner() {
    if (this.playerScore() === 3) return "player"
    if (this.computerScore() === 3) return "computer"
  }
}

export default Match
