import Vue from 'vue'
import Home from 'components/Home'

describe('Home.vue', () => {
  it('should render correct home contents', () => {
    const vm = new Vue(Home).$mount()
    expect(vm.$el.textContent).to.contain('Home')
  })
})
