import Vue from 'vue'
import App from './App.vue'
import Omiv, { render } from '../../../src/omiv'

Vue.use(Omiv)
Vue.config.productionTip = false

render(
  App,
  '#app',
  new (class {
    data = {
      count: 1
    }

    logPlugin = true

    sub = () => {
      this.data.count--
    }
    add = () => {
      this.data.count++
    }

    getDoubleCount = () => {
      return this.data.count * 2
    }
  })()
)
