import { render } from 'omi'
import './assets/index.css'
import './elements/app'

render(<my-app />, '#root', {
  merge: document.querySelector('#root').firstChild
})
