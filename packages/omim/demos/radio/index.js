import '../../src/radio/index.tsx'
import { render, h } from 'omi'


  import { define, WeElement, render, h } from 'omi'


define('my-app', class extends WeElement {
  onSelected = (evt) => {
    console.log(evt)
  }

  show = false

  onClick = () => {
    this.show = !this.show
    this.update()
  }

  render() {
    return <div>
    <m-radio label='Label' name="abc"> </m-radio>
    <m-radio label='Label' checked name="abc"> </m-radio>
    <br />

    <m-radio checked label='checked'> </m-radio>
    <br />

    <m-radio disabled label='disabled'> </m-radio>

  </div>

  }
})
render(<my-app />, 'body')

