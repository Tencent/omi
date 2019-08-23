import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
	state: {
		count: 0
	},
	mutations: {
		increment: state => state.count++,
		decrement: state => state.count--
	}
})

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
