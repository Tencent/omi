English | [简体中文](./README.CN.md) 

# omi-router

omi-router is a router plugin of [Omi](https://tencent.github.io/omi/), and it is lightweight, easy and powerful to use. It is a solution to build Omi's SPA(Single Page Application).

[→ DEMO](https://tencent.github.io/omi/packages/omi-router/examples/spa/build/)

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
import { route } from 'omi-router'
import { define, WeElement, render } from 'omi'
import './about'
import './home'
import './user'
import './user-list'

define('my-app', class extends WeElement {

  data = { tag: 'my-home' }

  install() {

    route('/', () => {
      this.data.tag = 'my-home'
      this.update()
    })

    route('/about', (evt) => {
      console.log(evt.query)
      this.data.tag = 'my-about'
      this.update()
    })

    route('/user-list', () => {
      this.data.tag = 'user-list'
      this.update()
    })

    route('/user/:name/category/:category', (evt) => {
      this.data.tag = 'my-user'
      this.data.params = evt.params
      this.update()
    })

    route('*', function () {
      console.log('not found')
    })

    route.before = (evt) => {
      console.log('before')
      //prevent route when return false
      //return false
    }

    route.after = (evt) => {
      console.log('after')
    }
  }

  onClick = () => {
    route.to('/user/vorshen/category/html')
  }

  render() {
    const data = this.data
    return (
      <div>
        <ul>
          <li><a href="#/" >Home</a></li>
          <li><a href="#/about" >About</a></li>
          <li><a href="#/user-list" >UserList</a></li>
          <li><a href="#/about?name=dntzhang&age=18" >About Dntzhang</a></li>
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
| /user/:name/category/:category | /user/dntzhang/category/js | `{ name: 'dntzhang', category: 'js' }` |

Note: If hash is empty, it will be automatically recognized as `/` 。

## With Query Parameter

```html
<li><a href="#/about?name=dntzhang&age=18" >About</a></li>
```

```js
route('/about', (evt) => {
  //output { name: 'dntzhang', age : '18' } when click the tag above
  console.log(evt.query)
})
```

## With Data

```js
route.to('/about',(evt) => {
  //{ a: 1 }
  console.log(evt.data)
})
route.to('/about', { a: 1 })
```

## Links

* [DEMO](https://tencent.github.io/omi/packages/omi-router/examples/simple/)
* [Source](https://github.com/Tencent/omi/tree/master/packages/omi-router/examples/simple)

## License
This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
