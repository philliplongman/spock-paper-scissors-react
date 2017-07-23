import randomItem from "random-item"
import last from "array-last"
import empty from "is-empty"

import Round from './round'
import {kirk, spock, bones} from "./move"

class Match {
  constructor() {
    this.choices = [kirk, spock, bones]
    this.rounds = []
  }

  newRound(index) {
    let playerChoice   = this.choices[index]
    let computerChoice = this.semiRandomChoice(playerChoice, 1)
    let round          = new Round(playerChoice, computerChoice)

    this.rounds.push(round)
    return this.state()
  }

  semiRandomChoice(playerChoice, iteration) {
    // Humans don't repeat themselves as often as a random number generator,
    // and tied rounds are boring. Attempt to reduce both outcomes by retrying
    // several times before accepting either result.
    let choice = randomItem(this.choices)

    if (iteration === 5) return choice

    if (choice === this.lastComputerChoice() || choice === playerChoice) {
      this.semiRandomChoice(playerChoice, iteration + 1)
    }

    return choice
  }

  lastComputerChoice() {
    if (!empty(this.rounds)) return last(this.rounds).computerChoice
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
    return this.rounds.reduce((score, round) => {
      return (round.winner() === "player") ? score + 1 : score
    }, 0)
  }

  computerScore() {
    return this.rounds.reduce((score, round) => {
      return (round.winner() === "computer") ? score + 1 : score
    }, 0)
  }

  roundNumber() {
    return `Round: ${this.rounds.length + 1}`
  }

  roundOutcome() {
    if (!empty(this.rounds)) return last(this.rounds).outcome()
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
