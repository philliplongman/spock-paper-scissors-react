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

  reset() {
    this.rounds.clear()
    return this.state()
  }

  state() {
    let round = this.rounds.last()

    if (round) {
      return {
        score:    this.score(),
        messages: this.messages(round),
        sound:    this.sound(round)
      }
    }
    else {
      return {
        score:    { player: 0, computer: 0 },
        messages: ["Choose your officer!"],
        sound:    ""
      }
    }
  }

  score() {
    return {
      player:   this.rounds.wonBy("player").length,
      computer: this.rounds.wonBy("computer").length
    }
  }

  messages(round) {
    return [
      `Round: ${this.rounds.count()}`,
      round.message(),
      round.outcome(),
      this.matchOutcome()
    ]
  }

  matchOutcome() {
    switch (this.winner()) {
      case "player":    return "The Enterprise wins!"
      case "computer":  return "Khan has defeated you!"
      default:          return null
    }
  }

  sound(round) {
    switch (this.winner()) {
      case "player":    return playerWin
      case "computer":  return playerLose
      default:          return round.sound()
    }
  }

  winner() {
    if (this.score().player === 3) return "player"
    if (this.score().computer === 3) return "computer"
  }
}

export default Match
