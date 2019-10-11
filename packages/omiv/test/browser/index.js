import Counter from './components/counter.vue'
import Vue from 'vue'

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

    expect(1).to.equal(1)
  })





})
