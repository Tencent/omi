import { render } from 'omi'
import './assets/index.css'
import './elements/app'
import registerServiceWorker from './assets/register-service-worker'
import store from './store/app-store'

render(<my-app />, '#root', store)
registerServiceWorker()
