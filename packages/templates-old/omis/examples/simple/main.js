import { render, h } from '../../src/omis'

const HelloMessage = props => {
  return h('div', {}, `Hello ${props.name}`)
}

HelloMessage.css = `div{
	color: red;
}`

render(<HelloMessage name="Omis" />, 'body')
