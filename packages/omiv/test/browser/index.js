import Counter from './components/counter.vue'
import Simple from './components/simple.vue'
import Event from './components/event.vue'
import Nest2 from './components/nest2.vue'
import Vue from 'vue'
import Omiv, { render, reset } from '../../src/omiv'
//import Nest from './components/nest.vue'
import Child2 from './components/child2.vue'

const errorHandler = (error, vm) => {
  console.error(
    '--------------------------------------------------------------------'
  )
  throw error
}

Vue.config.errorHandler = errorHandler
Vue.prototype.$throw = error => errorHandler(error, this)

describe('base', () => {
  let scratch

  before(() => {
    Vue.use(Omiv)
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
    expect(document.querySelector('#app').innerHTML).to.equal(
      '<span class="count">0</span> <button>Increment</button>'
    )
  })

  it('simple test', () => {
    render(
      Simple,
      '#app',
      new (class {
        data = {
          count: 2
        }
        sub = () => {
          this.data.count--
        }
        add = () => {
          this.data.count++
        }
      })()
    )

    expect(document.querySelector('#app').innerHTML).to.equal(
      '<span class="count">2</span> <button>Increment</button>'
    )
  })

  it('simple test', () => {
    // 跑测试用例情况特殊， 重置一下 store.
    reset()
    render(require('./components/child7.vue').default, '#app')

    expect(document.querySelector('#app').innerHTML).to.equal(
      '<span class="count">2</span> <button>Increment</button>'
    )
  })

  it('install omiv repeatedly test', () => {
    Vue.use(Omiv)
    Vue.use(Omiv)

    render(
      Simple,
      '#app',
      new (class {
        data = {
          count: 2
        }
        sub = () => {
          this.data.count--
        }
        add = () => {
          this.data.count++
        }
      })()
    )

    expect(document.querySelector('#app').innerHTML).to.equal(
      '<span class="count">2</span> <button>Increment</button>'
    )
  })

  it('simple event test', done => {
    render(
      Event,
      '#app',
      new (class {
        data = {
          count: 4
        }
        sub = () => {
          this.data.count--
        }
        add = () => {
          this.data.count++
        }
      })()
    )

    document.querySelector('#btn').click()

    Vue.nextTick(() => {
      done()
      expect(document.querySelector('#app').innerHTML).to.equal(
        '<span class="count">5</span> <button id="btn">Increment</button>'
      )
    })
  })

  it('multi-store use use test', done => {
    const cs = new (class {
      data = {
        count: 2
      }
      sub = () => {
        this.data.count--
      }
      add = () => {
        this.data.count++
      }
    })()

    const rs = new (class {
      data = {
        name: 'omiv'
      }
      rename = () => {
        this.data.name = 'omiv + vue'
      }
    })()

    render(require('./components/multi-store.vue').default, '#app', { cs, rs })

    document.querySelector('#btn').click()

    Vue.nextTick(() => {
      done()
      expect(document.querySelector('#app').innerHTML).to.equal(
        '<span class="count">1</span> <button id="btn">sub</button>'
      )
    })
  })

  it('multi-store use useSelf test', done => {
    const cs = new (class {
      data = {
        count: 2
      }
      sub = () => {
        this.data.count--
      }
      add = () => {
        this.data.count++
      }
    })()

    const rs = new (class {
      data = {
        name: 'omiv'
      }
      rename = () => {
        this.data.name = 'omiv + vue'
      }
    })()

    render(require('./components/multi-store-useSelf.vue').default, '#app', {
      cs,
      rs
    })

    document.querySelector('#btn').click()

    Vue.nextTick(() => {
      done()
      expect(document.querySelector('#app').innerHTML).to.equal(
        '<span class="count">1</span> <button id="btn">sub</button>'
      )
    })
  })

  it('nest test', done => {
    const cs = new (class {
      data = {
        count: 2
      }
      sub = () => {
        this.data.count--
      }
      add = () => {
        this.data.count++
      }
    })()
    render(require('./components/nest.vue').default, '#app', cs)

    document.querySelector('button').click()

    Vue.nextTick(() => {
      done()
      expect(document.querySelector('#app').innerHTML).to.equal(
        '<div><span class="count">3</span> <button>Increment</button></div>'
      )
    })
  })

  it('nest test with pure component', done => {
    const cs = new (class {
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
    })()
    render(require('./components/nest2.vue').default, '#app', cs)

    document.querySelector('button').click()

    Vue.nextTick(() => {
      done()
      expect(document.querySelector('#app').innerHTML).to.equal(
        '<div>3</div> <button id="btn"></button> <h3>cde</h3>'
      )
    })
  })

  it('mixin $store test', done => {
    render(
      Child2,
      '#app',
      new (class {
        data = {
          count: 2
        }
        sub = () => {
          this.data.count--
        }
        add = () => {
          this.data.count++
        }
      })()
    )

    document.querySelector('button').click()

    Vue.nextTick(() => {
      done()
      expect(document.querySelector('#app').innerHTML).to.equal(
        '<span class="count">3</span> <button>Increment</button>'
      )
    })
  })

  it('mixin $store test useSelf', done => {
    const cs = new (class {
      data = {
        count: 2
      }
      sub = () => {
        this.data.count--
      }
      add = () => {
        this.data.count++
      }
    })()
    render(require('./components/child3.vue').default, '#app', cs)

    document.querySelector('button').click()

    Vue.nextTick(() => {
      done()
      expect(document.querySelector('#app').innerHTML).to.equal(
        '<span class="count">3</span> <button>Increment</button>'
      )
    })
  })

  it('mixin single-store vm omivDestroyed test', done => {
    const cs = new (class {
      data = {
        count: 2
      }
      sub = () => {
        this.data.count--
      }
      add = () => {
        this.data.count++
      }
    })()
    const vm = render(require('./components/child3.vue').default, '#app', cs)

    vm.$children[0].$destroy()

    Vue.nextTick(() => {
      done()
      expect(vm.$store.components.length).to.equal(0)
    })
  })

  it('mixin multi-store vm omivDestroyed test', done => {
    const cs = new (class {
      data = {
        count: 2
      }
      sub = () => {
        this.data.count--
      }
      add = () => {
        this.data.count++
      }
    })()

    const rs = new (class {
      data = {
        name: 'omiv'
      }
      rename = () => {
        this.data.name = 'omiv + vue'
      }
    })()

    const vm = render(require('./components/multi-store.vue').default, '#app', {
      cs,
      rs
    })

    vm.$children[0].$destroy()

    Vue.nextTick(() => {
      done()
      expect(vm.$store.cs.components.length).to.equal(0)
    })
  })

  it('$ simple test', done => {
    const vm = render(require('./components/child4.vue').default, '#app')

    document.querySelector('button').click()

    Vue.nextTick(() => {
      done()
      expect(document.querySelector('#app').innerHTML).to.equal(
        '<span class="count">3</span> <button>Increment</button>'
      )
    })
  })

  it('$ destroyed test', done => {
    const cs = new (class {
      data = {
        count: 2
      }
      sub = () => {
        this.data.count--
      }
      add = () => {
        this.data.count++
      }
    })()

    const rs = new (class {
      data = {
        name: 'omiv'
      }
      rename = () => {
        this.data.name = 'omiv + vue'
      }
    })()
    render(require('./components/multi-store-useSelf-$.vue').default, '#app', {
      cs,
      rs
    })

    document.querySelector('button').click()

    Vue.nextTick(() => {
      done()
      expect(document.querySelector('#app').innerHTML).to.equal(
        '<span class="count">1</span> <button id="btn">sub</button>'
      )
    })
  })

  it('$ useSelf test', done => {
    const cs = new (class {
      data = {
        count: 2
      }
      sub = () => {
        this.data.count--
      }
      add = () => {
        this.data.count++
      }
    })()

    render(require('./components/child5.vue').default, '#app', cs)

    document.querySelector('button').click()

    Vue.nextTick(() => {
      done()
      expect(document.querySelector('#app').innerHTML).to.equal(
        '<span class="count">3</span> <button>Increment</button>'
      )
    })
  })

  it('$ simple destroyed test ', done => {
    const vm = render(require('./components/child4.vue').default, '#app')
    vm.$children[0].$destroy()

    Vue.nextTick(() => {
      done()
      expect(vm.$store.components.length).to.equal(0)
    })
  })

  it('$ options.computed.state test ', done => {
    const vm = render(require('./components/child6.vue').default, '#app')
    document.querySelector('button').click()

    Vue.nextTick(() => {
      done()
      expect(document.querySelector('#app').innerHTML).to.equal(
        '<span class="count">3</span> <button>Increment</button>'
      )
    })
  })
})
