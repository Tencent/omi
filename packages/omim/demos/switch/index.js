import '../../src/switch/index.tsx'

import { define, WeElement, render, h } from 'omi'


define('my-app', class extends WeElement {

  disabledA = false
  disabledB = false
  disabledC = true

  checkedA = false
  checkedB = true
  checkedC = true

  onChange = (e) => {
    console.log(e.detail)
  }

  onChangeDisabledA = (e) => {
    console.log(e.detail)
    this.disabledA = e.detail.checked
    if(!e.detail.checked) {
      this.checkedA = false
    }
    this.update()
  }
  onChangeDisabledB = (e) => {
    console.log(e.detail)
    this.disabledB = e.detail.checked
    if(!e.detail.checked) {
      this.checkedB = false
    }
    this.update()
  }
  onChangeDisabledC = (e) => {
    console.log(e.detail)
    this.disabledC = e.detail.checked
    if(!e.detail.checked) {
      this.checkedC = false
    }
    this.update()
  }

  render() {
    return <div>
      <m-switch label='LabelA' value='omim A' checked={this.checkedA} disabled={this.disabledA} onChange={this.onChange}></m-switch>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <m-switch label='LabelA-Disabled' value='omim A-Disabled' onChange={this.onChangeDisabledA}></m-switch>
      <br /><br />
      <m-switch label='LabelB' value='omim B' checked={this.checkedB} disabled={this.disabledB} onChange={this.onChange}></m-switch>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <m-switch label='LabelB-Disabled' value='omim B-Disabled' onChange={this.onChangeDisabledB}></m-switch>
      <br /><br />
      <m-switch label='LabelC' value='omim C' checked={this.checkedC} disabled={this.disabledC} onChange={this.onChange}></m-switch>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <m-switch label='LabelC-Disabled' value='omim C-Disabled' checked onChange={this.onChangeDisabledC}></m-switch>
      <br /><br />
    </div>
  }
})
render(<my-app />, 'body')
