import { render } from 'omi'
import './assets/index.css'
import './elements/app'

import store from './store/app-store'

render(<my-app />, '#root', store)

