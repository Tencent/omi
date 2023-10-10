import Game from '../model/game'
import Snake from '../model/snake'
import { SignalValue, signal } from 'omi'

class Store {
  snake: Snake
  map: number[][]
  game: Game
  state: SignalValue<{ map: number[][], paused: boolean }>
  
  constructor() {
    const game = new Game({
      onTick: () => {
        this.state.update()
      }
    })
    const { snake, map } = game
    this.snake = snake
    this.map = map
    this.game = game
    game.start()
    this.state = signal( { map: game.map, paused: false })
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
      this.state.value.paused = false
    } else {
      this.game.pause()
      this.state.value.paused = true
    }
    this.state.update()
  }

  reset = () => {
    this.game.reset()
  }

  toggleSpeed = () => {
    this.game.toggleSpeed()
  }
}

export default new Store