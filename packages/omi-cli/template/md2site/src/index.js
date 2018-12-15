import { render } from 'omi'
import './assets/index.css'
import './elements/my-frame.js'
import store from './utils/store'

render(<my-frame />, '#root', store)
