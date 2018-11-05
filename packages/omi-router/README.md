English | [简体中文](./README.CN.md) | [한국어](./README.KR.md)

# omi-router

omi-router is a router plugin of [Omi](http://omijs.org), and it is lightweight, easy and powerful to use. It is a solution to build Omi's SPA(Single Page Application).

The advantage of SPA is very clear.

* No refresh to load a content
* No refresh to previous/forward page
* Shareable link (Other can see the same page as you see)
* No blank page and transmission animation
* Reusable resource (If multi-page, same resource shold be loaded multi times)

Yes, there are many advantages. Let's do it.


## Install


### NPM

```js
npm install omi-router
```

## Usage

```js
//You can visit route in the global context.
import 'omi-router'
import { define, WeElement, render } from 'omi'
import './about'
import './home'
import './user'
import './user-list'

define('my-app', class extends WeElement {
  static observe = true

  data = { tag: 'my-home' }

  install() {

    route('/', () => {
      this.data.tag = 'my-home'
    })

    route('/about', () => {
      this.data.tag = 'my-about'
    })

    route('/user-list', () => {
      this.data.tag = 'user-list'
    })

    route('/user/:name/category/:category', (params) => {
      this.data.tag = 'my-user'
      this.data.params = params
    })

    route('*', function () {
      console.log('not found')
    })
  }

  onClick = () => {
    route.to('/user/vorshen/category/html')
  }

  render(props, data) {
    return (
      <div>
        <ul>
          <li><a href="#/" >Home</a></li>
          <li><a href="#/about" >About</a></li>
          <li><a href="#/user-list" >UserList</a></li>
        </ul>
        <div id="view">
          <data.tag params={data.params} />
        </div>
        <div><button onClick={this.onClick}>Test route.to</button></div>
      </div>
    )
  }
})

render(<my-app />, "#container")
```

## Match

| Rule | Path | route.params |
|---------|------|--------|
| /user/:name | /user/dntzhang | `{ name: 'dntzhang' }` |
| /user/:name/category/:category | /user/dntzhang/category/js | `{ name: 'dntzhang', category: js }` |

## Links

* [DEMO](https://tencent.github.io/omi/packages/omi-router/examples/simple/)
* [Source](https://github.com/Tencent/omi/tree/master/packages/omi-router/examples/simple)

## License
This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
