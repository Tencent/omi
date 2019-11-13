import Vue from 'vue'
import App from './App.vue'
import Omiv, { render } from '../../../src/omiv'

Vue.use(Omiv)
Vue.config.productionTip = false

const cs = new (class {
  data = {
    count: 1
  }
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

const ns = new (class {
  data = {
    name: 'omiv'
  }
  rename = () => {
    this.data.name = 'omiv + vue'
  }
})()

render(App, '#app', { cs, ns })
