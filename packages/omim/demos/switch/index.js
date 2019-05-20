import '../../src/switch/index.tsx'

import { define, WeElement, render, h } from 'omi'


define('my-app', class extends WeElement {

  disabledA = false
  disabledB = false
  disabledC = true
  disabledD = true

  checkedA = false
  checkedB = true
  checkedC = false
  checkedD = true

  checkedDisabledA = false
  checkedDisabledB = false
  checkedDisabledC = true
  checkedDisabledD = true

  onChangeA = (e) => {
    console.log(e.detail)
    this.checkedA = e.detail.checked
    this.update()
  }
  onChangeB = (e) => {
    console.log(e.detail)
    this.checkedB = e.detail.checked
    this.update()
  }
  onChangeC = (e) => {
    console.log(e.detail)
    this.checkedC = e.detail.checked
    this.update()
  }
  onChangeD = (e) => {
    console.log(e.detail)
    this.checkedD = e.detail.checked
    this.update()
  }

  onChangeDisabledA = (e) => {
    console.log(e.detail)
    this.disabledA = e.detail.checked
    this.checkedDisabledA = e.detail.checked
    this.update()
  }
  onChangeDisabledB = (e) => {
    console.log(e.detail)
    this.disabledB = e.detail.checked
    this.checkedDisabledB = e.detail.checked
    this.update()
  }
  onChangeDisabledC = (e) => {
    console.log(e.detail)
    this.disabledC = e.detail.checked
    this.checkedDisabledC = e.detail.checked
    this.update()
  }
  onChangeDisabledD = (e) => {
    console.log(e.detail)
    this.disabledD = e.detail.checked
    this.checkedDisabledD = e.detail.checked
    this.update()
  }

  render() {
    return <div>
      <m-switch label='LabelA' value='omim A' checked={this.checkedA} disabled={this.disabledA} onChange={this.onChangeA}></m-switch>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <m-switch label='LabelA-Disabled' value='omim A-Disabled' checked={this.checkedDisabledA} onChange={this.onChangeDisabledA}></m-switch>
      <br /><br />
      <m-switch label='LabelB' value='omim B' checked={this.checkedB} disabled={this.disabledB} onChange={this.onChangeB}></m-switch>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <m-switch label='LabelB-Disabled' value='omim B-Disabled' checked={this.checkedDisabledB} onChange={this.onChangeDisabledB}></m-switch>
      <br /><br />
      <m-switch label='LabelC' value='omim C' checked={this.checkedC} disabled={this.disabledC} onChange={this.onChangeC}></m-switch>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <m-switch label='LabelC-Disabled' value='omim C-Disabled' checked={this.checkedDisabledC} onChange={this.onChangeDisabledC}></m-switch>
      <br /><br />
      <m-switch label='LabelD' value='omim D' checked={this.checkedD} disabled={this.disabledD} onChange={this.onChangeD}></m-switch>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <m-switch label='LabelD-Disabled' value='omim D-Disabled' checked={this.checkedDisabledD} onChange={this.onChangeDisabledD}></m-switch>
    </div>
  }
})
render(<my-app />, 'body')
