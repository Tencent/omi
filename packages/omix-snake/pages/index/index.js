import create from '../../utils/create'
import store from '../../store/index'

create(store, {
  use: ['paused', 'highSpeed'],
  turnUp() {
    store.turnUp()
  },
  turnDown() {
    store.turnDown()
  },
  turnLeft() {
    store.turnLeft()
  },
  turnRight() {
    store.turnRight()
  },
  toggleSpeed() {
    store.toggleSpeed()
  },
  reset() {
    store.reset()
  },
  pauseOrPlay() {
    store.pauseOrPlay()
  }
})
