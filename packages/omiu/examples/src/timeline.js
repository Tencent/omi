import { WeElement, define, render } from 'omi'
import '../../src/date-picker'


define('my-app', class extends WeElement {

  css() {
    return `
.row{
  margin:6px;
}

.col { 
  color: white;
  text-align:center;
  height:60px;
  line-height:60px;

}
.col:nth-child(odd) {
 background:#07C160;
}
.col:nth-child(even) {
 background:#F95050;
}`
  }

  showPicker = false

  selectedDate = '2019-1-12'
  
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
