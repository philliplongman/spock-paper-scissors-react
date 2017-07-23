class Move {
  constructor(name, beats, winMessage) {
    this.name = name
    this.beats = beats
    this.winMessage = winMessage
  }
}

const kirk = new Move("Kirk", "Spock", "Kirk fascinates Spock.")
const spock = new Move("Spock", "Bones", "Spock logics Bones.")
const bones = new Move("Bones", "Kirk", "Bones sasses Kirk.")

export {kirk, spock, bones}
