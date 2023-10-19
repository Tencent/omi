
import { render, h } from 'omi'
import './ui/game/index'
import store from './store/index'
import './assets/index.css'

render(<snake-game />, '#root', store)
