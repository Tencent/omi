import { define, Component, h, render } from 'omi'
import './index'

define('my-demo', class extends Component {
  static css = ` 
  
button {
  position: relative;
  overflow: hidden;
  transition: background 400ms;
  color: #fff;
  background-color: #6200ee;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  outline: 0;
  border: 0;
  border-radius: 0.25rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
  `

  render() {
    return (
      <button o-ripple>Ripple Button</button>
    )
  }
})

render(<my-demo />, 'body')