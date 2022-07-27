import { render, h } from 'omi'
import './my-counter'

render((
  <div>
    <div>组件 Demo</div>
    <my-counter />
  </div>
), 'body')