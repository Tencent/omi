import { WeElement, render, h, options, tag } from 'omi'

// if using OMI to build the whole application, ignore the attributs of DOM and use props of virtual dom
options.ignoreAttrs = true

@tag('my-admin')
export default class extends WeElement {

  render() {
    return (
      <div>
        Amin Page
      </div>
    )
  }
}

render(<my-admin></my-admin>, '#root')
