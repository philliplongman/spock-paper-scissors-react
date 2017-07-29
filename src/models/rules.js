import Move from "./move"

import kirk from "../assets/images/kirk.png"
import spock from "../assets/images/spock.png"
import bones from "../assets/images/bones.png"

import kirkWin from "../assets/sounds/kirk-win.mp3"
import kirkLose from "../assets/sounds/kirk-lose.mp3"
import spockWin from "../assets/sounds/spock-win.mp3"
import spockLose from "../assets/sounds/spock-lose.mp3"
import bonesWin from "../assets/sounds/bones-win.mp3"
import bonesLose from "../assets/sounds/bones-lose.mp3"
import playerWin from "../assets/sounds/player-win.mp3"
import computerWin from "../assets/sounds/computer-win.mp3"
import konamiWin from "../assets/sounds/konami-win.mp3"
import tieSound from "../assets/sounds/tie.mp3"


const standardRules = {
  choices: [
    new Move("Kirk", /Spock/, kirk, "Kirk fascinates Spock.", kirkWin, kirkLose),
    new Move("Spock", /Bones/, spock, "Spock logics Bones.", spockWin, spockLose),
    new Move("Bones", /Kirk/, bones, "Bones sasses Kirk.", bonesWin, bonesLose)
  ],
  tie: {
    message:    "Transporter duplicate!",
    sound:      tieSound
  },
  player: {
    name:       "Enterprise",
    winMessage: "The Enterprise wins!",
    winSound:   playerWin
  },
  computer: {
    name:       "Khan",
    winMessage: "Khan has defeated you!",
    winSound:   computerWin
  },
  header: {
    title:      "Spock Paper Scissors",
    color:      "blue"
  }
}

const kobayashiMaru = {
  // The player always wins, and there are no ties.
  choices: [
    new Move("Kirk", /./, kirk, "Kirk fascinates Spock.", kirkWin, kirkLose),
    new Move("Spock", /./, spock, "Spock logics Bones.", spockWin, spockLose),
    new Move("Bones", /./, bones, "Bones sasses Kirk.", bonesWin, bonesLose)
  ],
  player: {
    name:       "Enterprise",
    winMessage: "You saved the Kobayashi Maru!",
    winSound:   konamiWin
  },
  computer: {
    name:       "Klingons"
  },
  header: {
    title: "Kobayashi Maru",
    color: "yellow"
  }
}

export {standardRules, kobayashiMaru}
