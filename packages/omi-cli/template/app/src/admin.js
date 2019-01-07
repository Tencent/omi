import { render } from 'omi'
import './assets/index.css'
import './elements/hello'
import store from './store/admin-store'

render(<hello-element />, '#root', store)
