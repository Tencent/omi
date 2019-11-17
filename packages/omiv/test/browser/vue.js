import Vue from 'vue'
import Simple from './components/simple.vue'
import { render } from '../../src/omiv'

const errorHandler = (error, vm) => {
  console.error(
    '--------------------------------------------------------------------'
  )
  throw error
}

Vue.config.errorHandler = errorHandler
Vue.prototype.$throw = error => errorHandler(error, this)

describe('vue.js', () => {
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

  it('render test', () => {
    // Vue.use(Omiv)
    const vm = render(
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

    expect(vm).to.equal(undefined)
  })
})
