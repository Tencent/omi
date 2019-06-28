

import '../../src/date-picker/index.tsx'

import '../../src/text-field/index.tsx'
import '../../src/locate/index.tsx'
import { define, WeElement, render, h } from 'omi'


define('my-app', class extends WeElement {
  show = true

  date = '2019-10-8'

  onIconClick = () => {
    this.show = !this.show
    this.update()
  }

  onSelect = (evt) => {
    this.show = false
    this.date = evt.detail
    this.update()
  }

  render() {
    return <div>
      <m-text-field rightIcon='today' id='myTextField' value={this.date} label='Date of birth' onIconClick={this.onIconClick} iconEvent={true} />
      <m-locate to="#myTextField" direction='bottom-left' show={this.show}>
        <m-date-picker selected-date={this.date} onSelect={this.onSelect}></m-date-picker>
      </m-locate>
    </div>

  }
})
render(<my-app />, 'body')

