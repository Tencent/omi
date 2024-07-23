
import { render, h, mixin } from 'omi'
import './views/game/index'
import { store } from './stores/index'
import './assets/index.css'

mixin({
  store
})

render(<snake-game />, '#root')
