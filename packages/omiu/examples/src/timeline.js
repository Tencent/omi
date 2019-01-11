import { WeElement, define, render } from 'omi'
import '../../src/date-picker'


define('my-app', class extends WeElement {

  showPicker = false

  selectedDate = '2019-1-10'
  
  onToggle = () => {
    this.showPicker = !this.showPicker
    this.update()
  }

  onSelect = (date) => {
    this.selectDate = date
    this.showPicker = false
    console.log(this.selectDate)
    this.update()
  }


  render() {
    return (
      <div>
        <o-date-picker
          selectedDate={this.selectedDate}
          onSelect={this.onSelect}
          show={this.showPicker}
          onToggle={this.onToggle}>
        </o-date-picker>
      </div>


    )
  }
})

render(<my-app />, 'body')
