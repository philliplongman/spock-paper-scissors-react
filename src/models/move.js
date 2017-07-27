import kirkWin from "../assets/sounds/kirk-win.mp3"
import kirkLose from "../assets/sounds/kirk-lose.mp3"
import spockWin from "../assets/sounds/spock-win.mp3"
import spockLose from "../assets/sounds/spock-lose.mp3"
import bonesWin from "../assets/sounds/bones-win.mp3"
import bonesLose from "../assets/sounds/bones-lose.mp3"

class Move {
  constructor(name, beats, winMessage, winSound, loseSound) {
    this.name = name
    this.beats = beats
    this.winMessage = winMessage
    this.winSound = winSound
    this.loseSound = loseSound
  }
}

const kirk  = new Move(
  "Kirk", "Spock", "Kirk fascinates Spock.", kirkWin, kirkLose
)
const spock = new Move(
  "Spock", "Bones", "Spock logics Bones.", spockWin, spockLose
)
const bones = new Move(
  "Bones", "Kirk", "Bones sasses Kirk.", bonesWin, bonesLose
)

export {kirk, spock, bones}
