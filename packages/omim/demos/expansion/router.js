import { define, render, h, WeElement } from 'omi'
import '../../src/expansion/index.tsx'
import '../../src/button/index.tsx'


import 'omi-router'


function clickHandler() {
  console.log(1)
}
define('my-page', class extends WeElement {

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

        <m-button onClick={clickHandler} ripple>Default</m-button>
        <m-button onClick={clickHandler} ripple icon="add">Dense</m-button>
        <m-button onClick={clickHandler} ripple dense>Dense</m-button>
        <m-expansion expand={this.expand}>
          <div style="width:100px;height:100px;background:green;">{Math.random()}</div>
        </m-expansion>
        <div>Bottom</div>
      </div>
    )
  }
})


define('my-home', class extends WeElement {

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
        Home
      </div>
    )
  }
})


define('my-app', class extends WeElement {
  data = { tag: 'my-home' }

  install() {

    route('/', () => {
      this.data.tag = 'my-home'
    })

    route('/about', (evt) => {
      console.log(evt.query)
      this.data.tag = 'my-page'
      this.update()
    })

    route('/user-list', () => {
      this.data.tag = 'user-list'
    })

    route('/user/:name/category/:category', (evt) => {
      this.data.tag = 'my-user'
      this.data.params = evt.params
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

  render(props) {
    const data = this.data
    return (
      <div>
        <ul>
          <li><a href="#/" >Home</a></li>
          <li><a href="#/about" >About</a></li>
        </ul>
        <div id="view">
          <data.tag params={data.params} />
        </div>
        <div><button onClick={this.onClick}>Test route.to</button></div>
      </div>
    )
  }
})

render(<my-app />, 'body')
