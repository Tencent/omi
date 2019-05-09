import '../../src/radio/index.tsx'
import { render, h } from 'omi'


  import { define, WeElement, render, h } from 'omi'


define('my-app', class extends WeElement {
  onSelected = (evt) => {
    console.log(evt)
    this.checked = evt.detail.value === 2
  }

  checked = false


  render() {
    return <div>
    <m-radio onSelected={this.onSelected} value={1} label='Label' checked={!this.checked} name="abc"> </m-radio>
    <m-radio  onSelected={this.onSelected} value={2} label='Label' checked={this.checked} name="abc"> </m-radio>
    <br />

    <m-radio checked label='checked' onclick={()=>{this.update()}}> </m-radio>
    <br />

    <m-radio disabled label='disabled'> </m-radio>

  </div>

  }
})
render(<my-app />, 'body')

