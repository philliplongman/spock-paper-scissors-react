import Rounds from './rounds'

class Match {
  constructor() {
    this.rounds = new Rounds()
  }

  newRound(index) {
    this.rounds.newRound(index)
    return this.state()
  }

  state() {
    return {
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
  }

  playerScore() {
    return this.rounds.wonBy("player").length
  }

  computerScore() {
    return this.rounds.wonBy("computer").length
  }

  roundNumber() {
    return `Round: ${this.rounds.count()}`
  }

  roundOutcome() {
    if (this.rounds.last()) return this.rounds.last().outcome()
  }

  matchOutcome() {
    switch (this.winner()) {
      case "player":    return "The Enterprise crew wins!"
      case "computer":  return "Khan has defeated you!"
      default:          return null
    }
  }

  winner() {
    if (this.playerScore() === 3) return "player"
    if (this.computerScore() === 3) return "computer"
  }
}

export default Match
