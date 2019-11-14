import Vue from 'vue'
import App from './App.vue'
import Omiv, { render } from '../../../src/omiv'

Vue.use(Omiv)
Vue.config.productionTip = false

// new Vue({
//   render: h => h(App)
// }).$mount('#app')

render(App, '#app')
