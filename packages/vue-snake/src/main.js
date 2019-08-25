import Vue from 'vue'
import App from './App.vue'
import store from './stores/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
