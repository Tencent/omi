import Vue from 'vue'
import App from './App.vue'
import store from './stores/index'
import { render } from 'omiv'

Vue.config.productionTip = false

render(App, '#app', store)
