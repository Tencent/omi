
import { render, h, mixin } from 'omi'
import './views/game'
import Game from './models/game'
import './assets/index.css'

const game = new Game()
game.start()

mixin({
  game
})

render(<snake-game />, '#root')
