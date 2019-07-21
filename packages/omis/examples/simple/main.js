import { render, h } from '../../src/omi'

const HelloMessage = props => {
  return h('div', {}, `Hello ${props.name}`)
}

HelloMessage.css = `div{
	color: red;
}`

render(<HelloMessage name="Omis" />, 'body')
