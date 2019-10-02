import { $ } from 'omiv'
import App from './App.vue'

$.render(App, '#app', new class {
  data = {
    count: 1
  }
  sub = () => {
    this.data.count--
  }
  add = () => {
    this.data.count++
  }
})


