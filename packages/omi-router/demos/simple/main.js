import { route } from '../../src/index.esm.js'
import { define, WeElement, render, h } from 'omi'
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

  css() {
    return `
      ul{
          border-bottom: 1px solid #ccc;
          padding-bottom:5px;
      }
      li{
          display:inline-block;
          margin-left:4px;
      }
      #view li{
          display:block;
      }
      #view ul{
          border-width: 0px;
      }
      `
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
