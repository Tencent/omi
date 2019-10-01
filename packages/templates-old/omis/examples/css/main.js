import { render, h } from '../../src/omis'

const HelloMessage = props => {
  return h('div', {}, props.name)
}

HelloMessage.css = `div{
	color: red;
}`

const App = props => {
  return h('div', {}, [
		props.name,
		h(HelloMessage, {name: 'Child Yellow', css: `div{color: yellow !important;}` })
	])
}

App.css = `div{
	color: green;
}`

render(<App name="Parent Green" />, 'body')
