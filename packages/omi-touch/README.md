# omi-touch

Smooth scrolling, rotation, pull to refresh and any motion for the web.

[→ touch the mobile demo](https://tencent.github.io/omi/packages/omi-touch/examples/simple/)

## Usage

```js
import { render, define, WeElement } from 'omi'
import 'omi-touch'

define('my-app', class extends WeElement {

  onChange = (value) => {
    console.log(value)
  }

  render() {
    return (
      <div class="main">
        <omi-touch min={-1750} max={0} change={this.onChange}>
          <div class="touchArea" >
            <ul >
              <li>Hello, Omi-Touch!</li>
              <li>Omi</li>
              ...
              ...
              <li> row 22</li>
              <li> row 23</li>
              <li> row 24</li>
              <li style="border-bottom: none;"> row 25</li>
            </ul>
          </div>
        </omi-touch>
      </div>
    )
  }

})

render(<my-app></my-app>, 'body')

```

## License

MIT © dntzhang
