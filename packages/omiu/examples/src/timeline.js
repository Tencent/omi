import { WeElement, define, render } from 'omi'
import '../../src/dropdown'
define('my-app', class extends WeElement {
  showSelect = false

  selectedIndex = 1

  onSelect = (index) => {
    this.selectedIndex = index
    this.showSelect = false
    this.update()
  }

  onToggle = () => {
    this.showSelect = !this.showSelect
    this.update()
  }

  render() {
    return (
      <div>
        <o-dropdown selectedIndex={this.selectedIndex}
          show={this.showSelect}
          onToggle={this.onToggle}
          onSelect={this.onSelect} style="width:200px;">
          <item value={1}>Item 1</item>
          <item value={2}>Item 2</item>
          <item value={3}>Item 3</item>
        </o-dropdown>
      </div>


    )
  }
})

render(<my-app />, 'body')
