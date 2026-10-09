import { Component, define, h, render } from '@/index'

import { genNode } from './gen-node'

describe.each([
  ['click', 'onClick'],
  ['compositionstart', 'onCompositionStart'],
  ['MyEvent', 'onMyEvent'],
])('%s event phases', (eventName, propName) => {
  let container

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    container.remove()
  })

  function mount(initialHandlers) {
    let handlers = initialHandlers
    class EventElement extends Component {
      render() {
        return h('div', handlers, h('button', null, 'dispatch'))
      }
    }

    const { name } = genNode()
    define(name, EventElement)
    render(h(name), container)
    const component = container.firstElementChild
    const listener = component.shadowRoot.querySelector('div')
    const child = listener.querySelector('button')
    expect(listener).not.toBeNull()
    expect(child).not.toBeNull()

    return {
      listener,
      child,
      update(nextHandlers) {
        handlers = nextHandlers
        component.update()
        expect(component.shadowRoot.querySelector('div')).toBe(listener)
        expect(listener.querySelector('button')).toBe(child)
      },
    }
  }

  describe.each([
    ['capture first', ['capture', 'bubble']],
    ['bubble first', ['bubble', 'capture']],
  ])('%s', (_, order) => {
    it.each([false, true])(
      'keeps handlers independent when dispatching at the listener: %s',
      (atTarget) => {
        const calls = []
        const handlers = {
          capture: (event) => calls.push(['capture', event.eventPhase]),
          bubble: (event) => calls.push(['bubble', event.eventPhase]),
        }
        const props = () =>
          Object.fromEntries(
            order.map((phase) => [
              propName + (phase === 'capture' ? 'Capture' : ''),
              handlers[phase],
            ]),
          )
        const app = mount(props())
        const target = atTarget ? app.listener : app.child
        const capturePhase = atTarget ? Event.AT_TARGET : Event.CAPTURING_PHASE
        const bubblePhase = atTarget ? Event.AT_TARGET : Event.BUBBLING_PHASE
        const dispatch = () => {
          calls.length = 0
          target.dispatchEvent(new Event(eventName, { bubbles: true }))
        }

        dispatch()
        expect(calls).toEqual([
          ['capture', capturePhase],
          ['bubble', bubblePhase],
        ])

        handlers.capture = (event) =>
          calls.push(['capture-new', event.eventPhase])
        app.update(props())
        dispatch()
        expect(calls).toEqual([
          ['capture-new', capturePhase],
          ['bubble', bubblePhase],
        ])

        handlers.bubble = (event) =>
          calls.push(['bubble-new', event.eventPhase])
        app.update(props())
        dispatch()
        expect(calls).toEqual([
          ['capture-new', capturePhase],
          ['bubble-new', bubblePhase],
        ])

        const bubble = handlers.bubble
        handlers.bubble = undefined
        app.update(props())
        dispatch()
        expect(calls).toEqual([['capture-new', capturePhase]])

        handlers.bubble = bubble
        app.update(props())
        dispatch()
        expect(calls).toEqual([
          ['capture-new', capturePhase],
          ['bubble-new', bubblePhase],
        ])

        const capture = handlers.capture
        handlers.capture = undefined
        app.update(props())
        dispatch()
        expect(calls).toEqual([['bubble-new', bubblePhase]])

        handlers.capture = capture
        handlers.bubble = undefined
        app.update(props())
        dispatch()
        expect(calls).toEqual([['capture-new', capturePhase]])

        handlers.capture = undefined
        app.update(props())
        dispatch()
        expect(calls).toEqual([])
      },
    )
  })

  it.each(['', 'Capture'])('preserves a single %s handler', (suffix) => {
    const handler = jest.fn()
    const key = propName + suffix
    const app = mount({ [key]: handler })
    app.child.dispatchEvent(new Event(eventName, { bubbles: true }))
    expect(handler).toHaveBeenCalledTimes(1)

    app.update({})
    app.child.dispatchEvent(new Event(eventName, { bubbles: true }))
    expect(handler).toHaveBeenCalledTimes(1)
  })
})
