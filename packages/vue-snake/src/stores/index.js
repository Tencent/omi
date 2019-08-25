import Game from '../models/game'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const game = new Game()
const { snake, map } = game

game.start()

export default new Vuex.Store({
	state: {
    map,
    paused: false
  },
	mutations: {
    turnUp() {
      snake.turnUp()
    },

    turnRight() {
      snake.turnRight()
    },

    turnDown() {
      snake.turnDown()
    },

    turnLeft() {
      snake.turnLeft()
    },

    pauseOrPlay(state){
      state.map[0] = 1
      if (game.paused) {
        game.play()
        state.paused = false
      } else {
        game.pause()
        state.paused = true
      }
    },

    reset() {
      game.reset()
    },

    toggleSpeed() {
      game.toggleSpeed()
    },

    subscribe(render){
      game.onTick = this.onChange = render
    },
    aa(state){
      console.log(state)

      state.map[0][0] = !state.map[0][0]
      state.paused = !state.paused

    }
	}
})
