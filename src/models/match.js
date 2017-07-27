import Rounds from './rounds'

import playerWin from "../assets/sounds/player-win.mp3"
import playerLose from "../assets/sounds/player-lose.mp3"


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
      messages: [
        this.roundNumber(),
        this.roundMessage(),
        this.roundOutcome(),
        this.matchOutcome()
      ],
      sound: this.sound()
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

  roundMessage() {
    if (this.rounds.last()) return this.rounds.last().message()
  }

  roundOutcome() {
    if (this.rounds.last()) return this.rounds.last().outcome()
  }

  sound() {
    return this.winner() ? this.matchSound() : this.roundSound()
  }

  roundSound() {
    if (this.rounds.last()) return this.rounds.last().sound()
  }

  matchSound() {
    if (this.playerScore() === 3) return playerWin
    if (this.computerScore() === 3) return playerLose
    return ""
  }

  matchOutcome() {
    switch (this.winner()) {
      case "player":    return "The Enterprise wins!"
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
