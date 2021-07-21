import { WeElement, render, h, tag } from 'omi'

interface ComponentProps {
  name: string
}

@tag('o-component')
export default class Component extends WeElement<ComponentProps> {
  render(props) {
    return <div>Hello Omi</div>
  }
}

render(<o-component></o-component>, '#root', {
  // if using OMI to build the whole application, ignore the attributs of DOM and use props of virtual dom
  ignoreAttrs: true
})
