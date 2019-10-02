import { $v } from './omis/omis'
import App from './App.vue'

$v.render(App, '#app', new class {
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


