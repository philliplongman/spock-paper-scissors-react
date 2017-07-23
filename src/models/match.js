import randomItem from "random-item"

import Round from './round'
import {kirk, spock, bones} from "./move"

class Match {
  constructor() {
    this.choices = [kirk, spock, bones]
    this.rounds = []
  }

  newRound(index) {
    let playerChoice = this.choices[index]
    let computerChoice = this.semiRandomChoice(playerChoice, 1)
    let round = new Round(playerChoice, computerChoice)
    this.rounds.push(round)
    return this.state()
  }

  semiRandomChoice(playerChoice, iteration) {
    // Humans don't repeat themselves as often as a random number generator,
    // and tied rounds are boring. Attempt to reduce both outcomes by retrying
    // repeatedly before accepting either result.
    let choice = randomItem(this.choices)

    if (iteration === 5) return choice

    if (choice === this.lastComputerChoice() || choice === playerChoice) {
      this.semiRandomChoice(playerChoice, iteration + 1)
    }

    return choice
  }

  lastComputerChoice() {
    if (this.rounds.length > 0) {
      return this.rounds[this.rounds.length - 1].computerChoice
    }
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
