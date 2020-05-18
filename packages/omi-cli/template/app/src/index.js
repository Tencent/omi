import { render, options } from 'omi'
import './assets/index.css'
import './elements/app'

//In this way, you can directly ignore propTypes of element, and pass object, array or any type as props
options.ignoreAttrs = true

render(<my-app />, '#root')
