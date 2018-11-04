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
import route from 'omi-router'
import { define, WeElement, render } from 'omi'
import './about'
import './home'
import './user'
import './user-list'

define('my-app', class extends WeElement {
  static observe = true

  data = { tag: 'my-home' }
  install() {

    route('/', (info) => {
      this.data.tag = 'my-home'
    })

    route('/about', (info) => {
      this.data.tag = 'my-about'
    })

    route('/user-list', (info) => {
      this.data.tag = 'user-list'
    })

    route('/user/:name/category/:category', (info) => {
      this.data.tag = 'my-user'
    })

    route('*', function () {
      console.log('not found')
    })
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
          <data.tag />
        </div>
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

Any component in the component tree can access data transmitted by hash through `route.params`.


## Links

* [DEMO](https://tencent.github.io/omi/packages/omi-router/examples/simple/)
* [Source](https://github.com/Tencent/omi/tree/master/packages/omi-router/examples/simple)

## License
This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
