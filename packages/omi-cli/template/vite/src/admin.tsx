import { WeElement, render, h, tag } from 'omi'

@tag('my-admin')
export default class extends WeElement {

  render() {
    return (
      <div>
        Admin Page
      </div>
    )
  }
}

render(<my-admin></my-admin>, '#root', {
  // if using OMI to build the whole application, ignore the attributs of DOM and use props of virtual dom
  ignoreAttrs: true
})
