
import { render, h, mixin } from 'omi'
import './ui/game/index'
import { store } from './store/index'
import './assets/index.css'

mixin({
  store
})

render(<snake-game />, '#root')
