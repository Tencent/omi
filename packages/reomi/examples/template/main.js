import { define, render, WeElement } from '../../src/omi'
import tpl from './my-template'

define('my-app', class extends WeElement {
  css() {
    return `
         div{
             color: green;
         }`
  }

  render() {
    return <div>{tpl({ name: 'zhanglei', age: 18 })}</div>
  }
})

render(<my-app name="Omi v4.0" />, 'body')
