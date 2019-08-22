import { render } from 'omi'
import './components/index'
import store from './stores/index'
import './assets/index.css'

render(<my-index />, '#root', store)
