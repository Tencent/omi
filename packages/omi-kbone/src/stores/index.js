import Game from '../models/game'

const game = new Game
const { snake, map } = game

game.start()

class Store {
  data = {
    map,
    paused: false
  }
  turnUp() {
    snake.turnUp()
  }
  turnRight() {
    snake.turnRight()
  }
  turnDown() {
    snake.turnDown()
  }
  turnLeft() {
    snake.turnLeft()
  }
  pauseOrPlay = () => {
    if (game.paused) {
      game.play()
      this.data.paused = false
    } else {
      game.pause()
      this.data.paused = true
    }
  }
  reset() {
    game.reset()
  }
  toggleSpeed() {
    game.toggleSpeed()
  }
}

export default new Store