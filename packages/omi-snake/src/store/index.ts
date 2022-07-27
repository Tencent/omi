import Game from '../model/game'
import { WeElement } from 'omi'
import Snake from '../model/snake'


class Store {
  snake: Snake
  map: number[][]
  game: Game
  data: { map: number[][], paused: boolean }
  ui: {
    game?: WeElement
    index?: WeElement
  }
  ignoreAttrs: boolean

  constructor() {
    const game = new Game({
      onTick: () => {
        this.ui.game.update()
      }
    })
    const { snake, map } = game
    this.snake = snake
    this.map = map
    this.game = game
    game.start()

    this.ui = {}

    this.data = {
      map,
      paused: false

    }
  }


  turnUp = () => {
    this.snake.turnUp()
  }

  turnRight = () => {
    this.snake.turnRight()
  }

  turnDown = () => {
    this.snake.turnDown()
  }

  turnLeft = () => {
    this.snake.turnLeft()
  }

  pauseOrPlay = () => {
    if (this.game.paused) {
      this.game.play()
      this.data.paused = false
    } else {
      this.game.pause()
      this.data.paused = true
    }

    this.ui.index.updateSelf()
  }

  reset = () => {
    this.game.reset()
  }

  toggleSpeed = () => {
    this.game.toggleSpeed()
  }
}

export default new Store