import { define, WeElement } from 'omi'
import route from '../../route'
import '../common/app-frame'

define('my-app', class extends WeElement {
  static get data() {
    return { name: '' }
  }

  static observe = true

  data = {
    pageTitle: '',
    routeParams: null,
    routeQuery: null,
    routeList: []
  }

  install() {
    this.data.routeList = route(this)
    // show home page if hash is empty
    if (location.hash === '') {
      location.hash = '/'
    }
  }

  render(props, data) {
    return (
      <app-frame routeList={this.data.routeList}>
        <this.data.tag slot="page-content" params={this.data.routeParams} query={this.data.routeQuery}/>
      </app-frame>
    )
  }
})
