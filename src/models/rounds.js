import Chance from "chance"
import last from "array-last"

import Round from './round'


class Rounds {
  constructor(rules) {
    this.choices = rules.choices
    this.tie = rules.tie
    this.rounds = []
  }

  newRound(index) {
    let playerChoice   = this.choices[index]
    let computerChoice = this.choices[this.randomIndex(index)]
    let round          = new Round(playerChoice, computerChoice, this.tie)

    this.rounds.push(round)
  }

  randomIndex(index) {
    // Humans don't repeat themselves as often as a random number generator,
    // and tied rounds are boring. Attempt to reduce both outcomes by
    // weighting the choices when selecting.
    let chance = new Chance()
    return chance.weighted([0, 1, 2], this.weights(index))
  }

  weights(index) {
    let weights = [1, 1, 1]
    // give higher weights to the moves chosen least
    if (this.count() > 0) {
      weights = this.choices.map((choice) => {
        return this.weightFor(choice)
      })
    }
    // give a lower weight to the move chosen by the player
    weights[index] = weights[index]/2

    return weights
  }

  weightFor(choice) {
    // inverted percent of times chosen by the computer
    let timesChosen = this.rounds.reduce((count, round) => {
      return (round.computerChoice === choice) ? count + 1 : count
    }, 0)
    let percent = timesChosen/this.count()
    return 1 - percent
  }

  count() {
    return this.rounds.length
  }

  last() {
    return last(this.rounds)
  }

  wonBy(string) {
    return this.rounds.filter((round) => {
      return round.winner === string
    })
  }

  clear() {
    this.rounds = []
  }
}

export default Rounds
