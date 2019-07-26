import { render, h } from '../../src/omis'

const HelloMessage = (props, store, _) => {
  return h('div', { ref: ele => _.abc = ele }, `Hello ${props.name}`)
}

HelloMessage.store = _ => {

  return {
    installed() {
      console.log(_.abc)
    }
  }
}

HelloMessage.css = `div{
	color: red;
}`

render(<HelloMessage name="Omis" />, 'body')
