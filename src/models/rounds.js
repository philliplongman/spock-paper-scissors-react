import randomItem from "random-item"
import last from "array-last"

import Round from './round'
import {kirk, spock, bones} from "./move"

class Rounds {
  constructor() {
    this.choices = [kirk, spock, bones]
    this.rounds = []
  }

  newRound(index) {
    let playerChoice   = this.choices[index]
    let computerChoice = this.semiRandomChoice(playerChoice, 1)
    let round          = new Round(playerChoice, computerChoice)

    this.rounds.push(round)
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
    if (this.last()) return this.last().computerChoice
  }

  count() {
    return this.rounds.length
  }

  last() {
    return last(this.rounds)
  }

  wonBy(string) {
    return this.rounds.filter((round) => {
      return round.winner() === string
    })
  }
}

export default Rounds
