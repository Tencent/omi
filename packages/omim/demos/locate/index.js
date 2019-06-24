
import '../../src/text-field/index.tsx'
import '../../src/date-picker/index.tsx'
import '../../src/locate/index.tsx'
import { render, h } from 'omi'



define('my-app', class extends WeElement {

  show = false
  value = ''
  clickHandler = () => {
    this.show = !this.show
    this.update()
  }
  onSelect = (evt) => {
    this.show = false
    this.value = evt.detail.value
  }
  render(props, data) {
    return (
      <div>

        <m-text-field id='myField' value={this.value} onIconClick={this.clickHandler}></m-text-field>
        <m-locate to="#myField" transition='fade' show={this.show}>
          <m-date-picker onSelect={this.onSelect}></m-date-picker>
        </m-locate>

      </div>
    )
  }
})

render(<my-app />, 'body')
