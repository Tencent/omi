import '../../src/menu/index.tsx'
import '../../src/button/index.tsx'
import { define, WeElement, render, h } from 'omi'


define('my-app', class extends WeElement {
  onSelected = (evt) => {
    console.log(evt)
  }

  show = false

  onClick = () => {
    this.show = !this.show
    this.update()
  }

  render() {
    return <div>
      <m-button onClick={this.onClick}>OPEN MENU</m-button>
      <m-menu anchor show={this.show} onSelected={this.onSelected} list={[
        { text: 'A Menu Item' },
        { text: 'A Disabled Menu Item', disabled: true },
        { text: 'Another Menu Item' }
      ]}></m-menu>

    </div>

  }
})
render(<my-app />, 'body')

