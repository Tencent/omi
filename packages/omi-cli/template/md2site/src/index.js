import { render } from 'omi'
import './assets/index.css'
import './elements/my-frame.js'
import store from './store'

render(<my-frame />, '#root', store)
