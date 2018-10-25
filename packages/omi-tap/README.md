## omi-tap

Support tap event in your [Omi](https://github.com/Tencent/omi) project.

---

## Install

``` js
npm install omi-tap
```

## Usage

```js
import { render, WeElement, tag } from "omi"
import "omi-tap"

@tag("my-app")
class MyApp extends WeElement {
  onTap = () => {
    console.log('tap')
  }

  render() {
    return (
      <omi-tap onTap={this.onTap} >
        <div>Tap Me!</div>
      </omi-tap>
    )
  }
}

render(<my-app />, "body");
```

# License
This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
