import Rounds from './rounds'


class Match {
  constructor(ruleset) {
    this.rules = ruleset
    this.rounds = new Rounds(ruleset)
  }

  newRound(index) {
    this.rounds.newRound(index)
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
      case "player":    return this.rules.player.winMessage
      case "computer":  return this.rules.computer.winMessage
      default:          return null
    }
  }

  sound(round) {
    switch (this.winner()) {
      case "player":    return this.rules.player.winSound
      case "computer":  return this.rules.computer.winSound
      default:          return round.sound()
    }
  }

  winner() {
    if (this.score().player === 3) return "player"
    if (this.score().computer === 3) return "computer"
  }
}

export default Match
