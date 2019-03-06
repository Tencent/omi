import { WeElement, define, render } from 'omi'
import 'omi-router'

define('o-router', class extends WeElement {

  _firstTime = true

  installed() {
    this.props.routes.forEach(current => {
      route(current.path, () => {
        current.componentLoader()
          .then(res => {
            const arr = current.path.replace(/pages/, 'page').split('/')
            render({ nodeName: arr[1] + '-' + arr[2] }, '#app', null, true)
          }).catch(res => {
            console.log(res)
          })
      })
      if (current.isIndex) {
        current.componentLoader()
          .then(res => {
            const arr = this.props.routes[0].path.replace(/pages/, 'page').split('/')

            this.vd = { nodeName: arr[1] + '-' + arr[2] }
            this.update()

          }).catch(res => {
            console.log(res)
          })
      }
    })
  }


  render() {
    if (this._firstTime) {
      this._firstTime = false
      return null
    } else {
      return this.vd
      console.log(1)
    }
  }
})

