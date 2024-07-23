import Game from '../models/game'
import Snake from '../models/snake'
import { SignalValue, signal, bind } from 'omi'

export class Store {
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
    this.state = signal({ map: game.map, paused: false })
  }

  @bind
  turnUp() {
    this.snake.turnUp()
  }

  @bind
  turnRight() {
    this.snake.turnRight()
  }

  @bind
  turnDown() {
    this.snake.turnDown()
  }

  @bind
  turnLeft() {
    this.snake.turnLeft()
  }

  @bind
  pauseOrPlay() {
    if (this.game.paused) {
      this.game.play()
      this.state.value.paused = false
    } else {
      this.game.pause()
      this.state.value.paused = true
    }
    this.state.update()
  }

  @bind
  reset() {
    this.game.reset()
  }

  @bind
  toggleSpeed() {
    this.game.toggleSpeed()
  }
}

export const store = new Store