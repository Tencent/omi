
import { render, h } from 'omi'
import './ui/game'
import Game from './model/game'
import './assets/index.css'

const game = new Game()
game.start()

render(<snake-game />, '#root', game)
