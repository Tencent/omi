import Game from '../models/game'
import Vuex from 'vuex'

const game = new Game()
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
      this.onChange()
    } else {
      game.pause()
      this.data.paused = true
      this.onChange()
    }
  }
  reset() {
    game.reset()
  }

  toggleSpeed() {
    game.toggleSpeed()
  }

  subscribe(render){
    game.onTick = this.onChange = render
  }
}

export default new Store()