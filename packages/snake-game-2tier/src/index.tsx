
import { render, h, mixin } from 'omi'
import './ui/game'
import Game from './model/game'
import './assets/index.css'

const game = new Game()
game.start()

mixin({
  game
})

render(<snake-game />, '#root')
