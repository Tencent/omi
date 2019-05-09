import '../../src/snackbar/index.tsx'
import '../../src/button/index.tsx'

import { define, WeElement, render, h } from 'omi'


define('my-app', class extends WeElement {
  toggleA = () => {
    this.bShow = false
    this.cShow = false
    this.aShow = !this.aShow
    this.update()
  }

  onClosed = () => {
    this.aShow = false
    this.bShow = false
    this.cShow = false
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

  aShow = false
  bShow = false
  cShow = false

  render() {
    return <div>
      <m-button unelevated onClick={this.toggleA}>BASELINE</m-button>
      <m-button unelevated style="margin:10px;" onClick={this.showB}>LEADING</m-button>
      <m-button unelevated onClick={this.showC}>STACKED</m-button>

      <m-snackbar onClosed={this.onClosed} buttonText="RETRY" msg="Can't send photo. Retry in 5 seconds." show={this.aShow}></m-snackbar>
      <m-snackbar onClosed={this.onClosed} buttonText="UNDO" msg="Your photo has been archived." leading show={this.bShow}></m-snackbar>
      <m-snackbar stacked msg='This item already has the label "travel". You can add a new label.' onClosed={this.onClosed} show={this.cShow} buttonText="ADD A NEW LABEL"></m-snackbar>
    </div>
  }
})
render(<my-app />, 'body')

