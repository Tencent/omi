import '../../src/expansion/index.tsx'
import { define, render, h, WeElement } from 'omi'


define('my-app', class extends WeElement {

  static propTypes = {
    expand: Boolean
  }

  onClick = () => {
    this.expand = !this.expand
    this.update()
  }
  expand = true

  render(props, data) {
    return (
      <div>
        <button onClick={this.onClick}>Toggle</button>
        <m-expansion expand={this.expand}>
          <div style="width:100px;height:100px;background:green;">{Math.random()}</div>
        </m-expansion>
        <div>Bottom</div>
      </div>
    )
  }
})

render(<my-app />, 'body')
