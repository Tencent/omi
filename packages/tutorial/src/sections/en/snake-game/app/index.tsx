import { render, h } from 'omi'
import './snake-game'
import store from './store'
// import './assets/index.css'

store.ignoreAttrs = true
render(<snake-game />, 'body', store)
