const { Component, h, render, define, getHost } = Omi

QUnit.test('base', function (assert) {
  define(
    'like-button',
    class extends Component {
      install() {
        this.data = { liked: false }
      }

      render() {
        if (this.data.liked) {
          return 'You liked this.'
        }

        return h(
          'button',
          {
            onClick: () => {
              this.data.liked = true
              this.update()
            },
          },
          'Like',
        )
      }
    },
  )

  render(h('like-button'), '#root')

  assert.deepEqual(
    document.querySelector('#root').firstElementChild.shadowRoot.innerHTML,
    '<button>Like</button>',
  )

  document
    .querySelector('#root')
    .firstElementChild.shadowRoot.querySelector('button')
    .click()

  assert.deepEqual(
    document.querySelector('#root').firstElementChild.shadowRoot.innerHTML,
    'You liked this.',
  )
})

QUnit.test('props.children', function (assert) {
  define(
    'my-p',
    class extends Component {
      render(props) {
        assert.deepEqual(props.children, [Omi.h('h2', null, 'Hello World')])
        return props.children
      }
    },
  )

  define(
    'my-app',
    class extends Component {
      render() {
        return Omi.h(
          'div',
          null,
          Omi.h('my-p', null, Omi.h('h2', null, 'Hello World')),
        )
      }
    },
  )

  render(h('my-app'), '#root2')
})

QUnit.test('css', function (assert) {
  define(
    'hello-element',
    class extends Component {
      static css = 'div{color:green;}'

      render() {
        return h('div', null, 'Hello Element')
      }

      installed() {
        assert.deepEqual(
          getComputedStyle(
            document.querySelector('#root4').firstElementChild.shadowRoot
              .firstChild,
          ).color,
          'rgb(0, 128, 0)',
        )
      }
    },
  )

  render(h('hello-element'), '#root4')
})

QUnit.test('render array', function (assert) {
  define(
    'ra-e',
    class extends Component {
      installed() {
        assert.deepEqual(
          document.querySelector('#root5').firstElementChild.shadowRoot
            .innerHTML,
          '<div>Hello</div><div>Element</div>',
        )

        this.aa = 1
        this.update()

        assert.deepEqual(
          document.querySelector('#root5').firstElementChild.shadowRoot
            .innerHTML,
          '<div>Hell2</div><div>Element</div><div>Element2</div>',
        )
      }

      render() {
        if (this.aa === 1) {
          return [
            Omi.h('div', null, 'Hell2'),
            Omi.h('div', null, 'Element'),
            Omi.h('div', null, 'Element2'),
          ]
        }
        return [Omi.h('div', null, 'Hello'), Omi.h('div', null, 'Element')]
      }
    },
  )

  render(h('ra-e'), '#root5')
})
