import { render, h } from 'omi'
import './my-counter'

render((
  <div>
    <div>Component Demo</div>
    <my-counter />
  </div>
), 'body')