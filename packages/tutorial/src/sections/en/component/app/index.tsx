import { render, h } from 'omi'
import './my-counter.tsx'

render((
  <div>
    <div>Component Demo</div>
    <my-counter />
  </div>
), 'body')