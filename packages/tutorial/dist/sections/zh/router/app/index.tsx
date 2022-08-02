import { tag, render, h, WeElement } from 'omi'
import 'omi-router'

@tag('user-detail')
class UserDetail extends WeElement {
  render(props) {
    return (
      <div>
        <h1> user-detail</h1>
        <p> params:{JSON.stringify(props.$route.params)}</p>
        <p> query:{JSON.stringify(props.$route.query)}</p>
      </div>
    )
  }
}

@tag('home-page')
class HomePage extends WeElement {
  render() {
    return (
      <div>
        home-page
      </div>
    )
  }
}

declare global {
  interface Window {
    route
  }
}

const route = window.route

@tag('my-app')
class MyApp extends WeElement {
  data = { tag: 'my-home' }

  $route

  install() {

    route('/', () => {
      this.data.tag = 'home-page'
      this.update()
    })

    route('/user/:name/category/:category', (evt) => {
      this.data.tag = 'user-detail'
      this.$route = evt
      this.update()
    })

    route('*', function () {
      console.log('not found')
    })

    route.before = (evt) => {
      console.log('before')
      // prevent route when return false
      // return false
    }

    route.after = (evt) => {
      console.log('after')
    }
  }

  onClick = () => {
    route.to('/user/lucy/category/html?a=1')
  }

  render() {
    const data = this.data
    return (
      <div>
        <ul>
          <li><a href="#/" >Home(href=#/)</a></li>
          <li><a href="#/user/dntzhang/category/omi?age=18" >User(href=#/user/dntzhang/category/omi?age=18)</a></li>
        </ul>
        <div id="view">
          <data.tag $route={this.$route} />
        </div>
        <div><button onClick={this.onClick}>route.to('/user/lucy/category/html?a=1')</button></div>
      </div>
    )
  }
}

render(<my-app />, 'body')