import { WeElement, define, render } from 'omi'
import '../../src/select-list'


define('my-app', class extends WeElement {

  list = [{
    text: 'Item 1'
  }, {
    text: 'Item 2'
  }, {
    text: 'Item 3'
  }, {
    text: 'Item 4'
  }, {
    text: 'Item 5'
  }, {
    text: 'Item 6'
  }, {
    text: 'Item 7'
  }]

  selectedIndex = 1

  onSelect = (item, index) => {
    this.selectedIndex = index
    this.update()
  }

  render() {
    return (
      <o-select-list
        onSelect={this.onSelect}
        list={this.list}
        selectedIndex={this.selectedIndex}
      />
    )
  }
})

render(<my-app />, 'body')
