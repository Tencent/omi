import { render } from 'omi'
import './assets/index.css'
import './elements/hello'
import registerServiceWorker from './assets/register-service-worker'
import store from './store/admin-store'

render(<hello-element />, '#root', store)
registerServiceWorker()
