import './style';
import { render, h } from 'preact'
import Index from './components/index';
import store from './stores/index'

const app = document.createElement('div')
document.body.appendChild(app)
render(<Index store={store} />, app)

