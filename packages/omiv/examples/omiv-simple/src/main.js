import Vue from 'vue'
import App from './App.vue'
import Omiv, { render } from '../../../src/omiv'

Vue.use(Omiv)
Vue.config.productionTip = false

render(App, '#app')
