import * as Preact from 'preact'
import 'preact-css'
import Index from './components/index'
import './assets/index.css'
import store from './stores/index'
import { render } from 'omis'

render(Preact.render, <Index />, '#root', store)
