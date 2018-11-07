import { render } from 'omi'
import 'omi-router'
import './assets/index.css'
import './elements/app'
import registerServiceWorker from './assets/register-service-worker'
import store from './store/app-store'

render(<my-app />, '#root', store)
registerServiceWorker()
