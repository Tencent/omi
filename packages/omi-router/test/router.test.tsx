import { Router } from '../src/router'
import { RouterView } from '../src/router-view'

describe('Router', () => {
  beforeEach(() => {
    // 清除所有已存在的DOM元素
    document.body.innerHTML = '<div id="app"></div>'
    // 重置history状态
    history.pushState({}, '', '/')
    window.location.hash = ''
  })

  test('should initialize router with hash mode by default', () => {
    const router = new Router({
      routes: [],
      renderTo: '#app'
    })
    expect(router.el).toBeInstanceOf(RouterView)
    expect(router.el.isHashMode).toBe(true)
  })

  test('should push new route in hash mode', () => {
    const router = new Router({
      routes: [],
      renderTo: '#app'
    })
    router.push('/test')
    expect(window.location.hash).toBe('#/test')
  })

  test('should replace current route', () => {
    const router = new Router({
      routes: [],
      renderTo: '#app'
    })
    router.push('/first')
    router.replace('/second')
    expect(window.location.hash).toBe('#/second')
    // 测试历史记录长度不会增加
    router.back()
    expect(window.location.hash).not.toBe('#/first')
  })

  test('should extract route parameters', () => {
    const routes = [
      {
        path: '/user/:id',
        render: () => null
      }
    ]
    const router = new Router({
      routes,
      renderTo: '#app'
    })
    router.push('/user/123')
    expect(router.params.id).toBe('123')
  })

  test('should parse query parameters', () => {
    const router = new Router({
      routes: [],
      renderTo: '#app'
    })
    router.push('/test?name=omi&version=4')
    expect(router.query.name).toBe('omi')
    expect(router.query.version).toBe('4')
  })

  test('should redirect to specified path', () => {
    const routes = [
      {
        path: '/old',
        redirect: '/new'
      }
    ]
    const router = new Router({
      routes,
      renderTo: '#app'
    })
    router.push('/old')
    expect(window.location.hash).toBe('#/new')
  })

  test('should call beforeEach hook before navigation', () => {
    const beforeEachMock = jest.fn(() => true)
    const router = new Router({
      routes: [],
      renderTo: '#app'
    })
    router.beforeEach(beforeEachMock)
    router.push('/test')
    expect(beforeEachMock).toHaveBeenCalled()
  })

  test('should call afterEach hook after navigation', () => {
    const afterEachMock = jest.fn()
    const router = new Router({
      routes: [],
      renderTo: '#app'
    })
    router.afterEach(afterEachMock)
    router.push('/test')
    expect(afterEachMock).toHaveBeenCalled()
  })

  test('should call history methods for go, back, forward', () => {
    const historyGoMock = jest.spyOn(history, 'go')
    const historyBackMock = jest.spyOn(history, 'back')
    const historyForwardMock = jest.spyOn(history, 'forward')
    
    const router = new Router({
      routes: [],
      renderTo: '#app'
    })
    
    router.go(1)
    expect(historyGoMock).toHaveBeenCalledWith(1)
    
    router.back()
    expect(historyBackMock).toHaveBeenCalled()
    
    router.forward()
    expect(historyForwardMock).toHaveBeenCalled()
    
    historyGoMock.mockRestore()
    historyBackMock.mockRestore()
    historyForwardMock.mockRestore()
  })
})