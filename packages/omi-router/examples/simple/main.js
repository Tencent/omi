import '../../index'
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

  render(props, data) {
    console.log(data.tag)
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
