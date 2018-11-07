import { render } from 'omi'
import 'omi-router'
import './utils/mp'
import './assets/index.css'
import './mp/app'
import store from './store/app-store'

render(<my-app />, '#root', store)
