import { render, h } from '../../src/omi'

const HelloMessage = props => {
  return h('div', {}, `Hello ${props.name}`)
}

render(<HelloMessage name="Omis" />, 'body')
