import Counter from './components/counter.vue'
import Simple from './components/simple.vue'
import Event from './components/event.vue'
import Nest2 from './components/nest2.vue'
import Vue from 'vue'
import { render } from '../../src/omiv'
//import Nest from './components/nest.vue'

const errorHandler = (error, vm) => {
  console.error('--------------------------------------------------------------------')
  throw error

}

Vue.config.errorHandler = errorHandler;
Vue.prototype.$throw = (error) => errorHandler(error, this);

describe('base', () => {
  let scratch

  before(() => {
    scratch = document.createElement('div')
    scratch.id = 'app'
    document.body.appendChild(scratch)
  })

  beforeEach(() => {
    scratch.innerHTML = ''
  })

  after(() => {
    scratch.parentNode && scratch.parentNode.removeChild(scratch)
    scratch = null
  })

  it('simple test', () => {

    new Vue({
      render: h => h(Counter)
    }).$mount('#app')

    // Vue.nextTick(()=>{
    //   done()
    // })

    expect(document.querySelector('#app').innerHTML).to.equal('<span class="count">0</span> <button>Increment</button>')

  })

  it('simple test', () => {


    render(Simple, '#app', new class {
      data = {
        count: 2
      }
      sub = () => {
        this.data.count--
      }
      add = () => {
        this.data.count++
      }
    })

    expect(document.querySelector('#app').innerHTML).to.equal('<span class="count">2</span> <button>Increment</button>')

  })


  it('simple event test', (done) => {

    render(Event, '#app', new class {
      data = {
        count: 4
      }
      sub = () => {
        this.data.count--
      }
      add = () => {
        this.data.count++
      }
    })


    document.querySelector('#btn').click()

    Vue.nextTick(() => {
      done()
      expect(document.querySelector('#app').innerHTML)
        .to.equal('<span class="count">5</span> <button id="btn">Increment</button>')
    })
  })

  it('multi-store test', (done) => {

    const cs = new class {
      data = {
        count: 2
      }
      sub = () => {
        this.data.count--
      }
      add = () => {
        this.data.count++
      }
    }

    const rs = new class {
      data = {
        name: 'omiv'
      }
      rename = () => {
        this.data.name = 'omiv + vue'
      }
    }

    render(require('./components/multi-store.vue')
    .default, '#app', {cs,rs})


    document.querySelector('#btn').click()

    Vue.nextTick(() => {
      done()
      expect(document.querySelector('#app').innerHTML)
        .to.equal('<span class="count">1</span> <button id="btn">sub</button>')
    })
  })

  it('nest test', (done) => {

    const cs = new class {
      data = {
        count: 2
      }
      sub = () => {
        this.data.count--
      }
      add = () => {
        this.data.count++
      }
    }
    render(require('./components/nest.vue')
    .default, '#app', cs)

    document.querySelector('button').click()

    Vue.nextTick(() => {
      done()
      expect(document.querySelector('#app').innerHTML)
        .to.equal('<div><span class="count">3</span> <button>Increment</button></div>')
    })
  })

  it('nest test with pure component', (done) => {

    const cs = new class {
      data = {
        count: 2,
        title: 'abc'
      }
      sub = () => {
        this.data.count--
      }
      add = () => {
        this.data.title = 'cde'
        this.data.count++
      }
    }
    render(require('./components/nest2.vue')
    .default, '#app', cs)

    document.querySelector('button').click()

    Vue.nextTick(() => {
      done()
      expect(document.querySelector('#app').innerHTML)
        .to.equal('<div>3</div> <button id="btn"></button> <h3>cde</h3>')
    })
  })


})
