import { render } from 'omi'
import './assets/index.css'
import './elements/my-frame.js'
import Store from './store'

render(<my-frame />, '#root', new Store({ lan: 'en' }))
