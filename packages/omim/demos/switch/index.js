import '../../src/switch/index.tsx'

import { define, WeElement, render, h } from 'omi'


define('my-app', class extends WeElement {

  onChange = (e) => {
    console.log(e.detail)
  }

  render() {
    return <div>
      <m-switch label='LabelA' value='omim one' onChange={this.onChange}></m-switch>
      <br /><br />
      <m-switch label='LabelB' value='omim two' checked onChange={this.onChange}></m-switch>
      <br /><br />
      <m-switch label='LabelC' value='omim three' checked disabled onChange={this.onChange}></m-switch>
      <br /><br />
      <m-switch label='LabelD' value='omim four' disabled onChange={this.onChange}></m-switch>
    </div>
  }
})
render(<my-app />, 'body')
