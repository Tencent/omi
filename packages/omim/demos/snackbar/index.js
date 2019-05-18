import '../../src/snackbar/index.tsx'
import '../../src/button/index.tsx'

import { define, WeElement, render, h } from 'omi'


define('my-app', class extends WeElement {
  showA = () => {
    this.bShow = false
    this.cShow = false
    this.aShow = true
    this.update()
  }
  showB = () => {
    this.aShow = false
    this.cShow = false
    this.bShow = true
    this.update()
  }
  showC = () => {
    this.aShow = false
    this.bShow = false
    this.cShow = true
    this.update()
  }

  onClosedA = () => {
    console.log('onClosedA')
    this.update()
  }
  onClosedB = () => {
    console.log('onClosedB')
    this.update()
  }
  onClosedC = () => {
    console.log('onClosedC')
    this.update()
  }

  onButtonClickA = () => {
    console.log('onButtonClickA')
    this.update()
  }
  onButtonClickB = () => {
    console.log('onButtonClickB')
    this.update()
  }
  onButtonClickC = () => {
    console.log('onButtonClickC')
    this.update()
  }

  onIconButtonClickA = () => {
    console.log('onIconButtonClickA')
    this.update()
  }
  onIconButtonClickB = () => {
    console.log('onIconButtonClickB')
    this.update()
  }
  onIconButtonClickC = () => {
    console.log('onIconButtonClickC')
    this.update()
  }

  aShow = false
  bShow = false
  cShow = false

  render() {
    return <div>
      <m-button unelevated onClick={this.showA}>BASELINE</m-button>
      <m-button unelevated style="margin:10px;" onClick={this.showB}>LEADING</m-button>
      <m-button unelevated onClick={this.showC}>STACKED</m-button>

      <m-snackbar
        onClosed={this.onClosedA}
        onButtonClick={this.onButtonClickA}
        onIconButtonClick={this.onIconButtonClickA}
        buttonText="RETRY"
        msg="Can't send photo. Retry in 5 seconds."
        show={this.aShow}
      ></m-snackbar>
      <m-snackbar
        onClosed={this.onClosedB}
        onButtonClick={this.onButtonClickB}
        onIconButtonClick={this.onIconButtonClickB}
        buttonText="UNDO"
        msg="Your photo has been archived."
        leading show={this.bShow}
      ></m-snackbar>
      <m-snackbar
        onClosed={this.onClosedC}
        onButtonClick={this.onButtonClickC}
        onIconButtonClick={this.onIconButtonClickC}
        stacked msg='This item already has the label "travel". You can add a new label.'
        buttonText="ADD A NEW LABEL"
        show={this.cShow}
      ></m-snackbar>
    </div>
  }
})
render(<my-app />, 'body')

