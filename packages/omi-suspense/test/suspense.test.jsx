import '@/index'

const tick = () => new Promise((resolve) => setTimeout(resolve, 60))

describe('o-suspense', () => {
  let el

  afterEach(() => {
    if (el && el.parentNode) el.parentNode.removeChild(el)
    el = null
    document.body.innerHTML = ''
  })

  function mount(props) {
    el = document.createElement('o-suspense')
    el.props = props
    document.body.appendChild(el)
    return el
  }

  it('should go from pending to resolve and fire pending、resolve、loaded', async () => {
    const events = []
    mount({
      imports: [Promise.resolve(42)],
      onPending: () => events.push('pending'),
      onResolve: () => events.push('resolve'),
      onLoaded: (event) => events.push('loaded:' + JSON.stringify(event.detail)),
    })

    await tick()

    expect(el.state).toBe('resolve')
    expect(events).toEqual(['pending', 'resolve', 'loaded:[42]'])
    expect(el.results).toEqual([42])
  })

  it('should go to fallback when an import rejects', async () => {
    const events = []
    mount({
      imports: [Promise.reject(new Error('load failed'))],
      onPending: () => events.push('pending'),
      onFallback: (event) => events.push('fallback:' + event.detail.message),
    })

    await tick()

    expect(el.state).toBe('fallback')
    expect(events).toEqual(['pending', 'fallback:load failed'])
    expect(el.error.message).toBe('load failed')
  })

  it('should resolve right away when there is nothing to load', async () => {
    mount({ imports: [] })

    await tick()

    expect(el.state).toBe('resolve')
  })

  it('should render the pending slot before the imports settle', async () => {
    let resolveImport
    const pending = new Promise((resolve) => {
      resolveImport = resolve
    })
    mount({ imports: [pending], onPending: () => {} })

    await tick()
    expect(el.state).toBe('pending')

    resolveImport('done')
    await tick()
    expect(el.state).toBe('resolve')
  })

  it('should go to fallback when data() throws synchronously', async () => {
    const events = []
    mount({
      imports: [],
      data: () => {
        throw new Error('data failed')
      },
      onFallback: (event) => events.push('fallback:' + event.detail.message),
    })

    await tick()

    expect(el.state).toBe('fallback')
    expect(el.error.message).toBe('data failed')
    expect(events).toEqual(['fallback:data failed'])
  })

  it('should resolve when data() returns a promise', async () => {
    mount({ imports: [], data: () => Promise.resolve('data') })

    await tick()

    expect(el.state).toBe('resolve')
    expect(el.results).toEqual(['data'])
  })
})
