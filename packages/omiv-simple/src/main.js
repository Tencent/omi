import Vue from 'vue'
import App from './App.vue'
import Omiv from 'omiv'

Vue.use(Omiv)
Vue.config.productionTip = false


new Vue({
  render: h => h(App)
}).$mount('#app')



