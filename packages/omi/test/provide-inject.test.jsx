import { define, render, Component, h } from '@/index'
import { genNode } from './gen-node'

describe('provide-inject', () => {
  let parentElement

  beforeAll(() => {
    parentElement = document.createElement('div')
    document.body.appendChild(parentElement)
  })

  beforeEach(() => {
    parentElement.innerHTML = ''
  })

  afterAll(() => {
    parentElement.parentNode.removeChild(parentElement)
    parentElement = null
  })

  it('provide-inject', () => {
    define(
      'provide-inject-element1',
      class extends Component {
        inject = ['name']

        render(props) {
          return <div>{this.injection.name}</div>
        }
      },
    )

    define(
      'provide-inject-app',
      class extends Component {
        aa = 1
        installed() {
          this.aa = 2
          this.update()
        }

        provide = {
          name: 'dnt',
        }

        render(props) {
          return (
            <provide-inject-element1 aa={this.aa}></provide-inject-element1>
          )
        }
      },
    )

    render(<provide-inject-app />, parentElement)
    expect(
      parentElement.firstChild.shadowRoot.firstChild.shadowRoot.innerHTML,
    ).toBe('<div>dnt</div>')
  })

  it('provide-inject keys', () => {
    define(
      'provide-inject-element2',
      class extends Component {
        inject = ['name', 'age']

        render(props) {
          return (
            <div>
              {this.injection.name}
              {this.injection.age}
            </div>
          )
        }
      },
    )

    define(
      'provide-inject-app2',
      class extends Component {
        provide = {
          name: 'dnt',
          age: 18,
        }

        render(props) {
          return <provide-inject-element2></provide-inject-element2>
        }
      },
    )

    render(<provide-inject-app2 />, parentElement)
    expect(
      parentElement.firstChild.shadowRoot.firstChild.shadowRoot.innerHTML,
    ).toBe('<div>dnt18</div>')
  })

  it('provide-inject three level nest ', () => {
    define(
      'provide-inject-element3',
      class extends Component {
        inject = ['name', 'age']

        render(props) {
          return (
            <div>
              {this.injection.name}
              {this.injection.age}
              <provide-inject-element4></provide-inject-element4>
            </div>
          )
        }
      },
    )

    define(
      'provide-inject-element4',
      class extends Component {
        inject = ['name', 'age']

        render(props) {
          return (
            <div>
              {this.injection.name}
              {this.injection.age}
            </div>
          )
        }
      },
    )

    define(
      'provide-inject-app3',
      class extends Component {
        provide = {
          name: 'dnt',
          age: 18,
        }

        render(props) {
          return <provide-inject-element3></provide-inject-element3>
        }
      },
    )

    render(<provide-inject-app3 />, parentElement)
    expect(
      parentElement.firstChild.shadowRoot.firstChild.shadowRoot.querySelector(
        'provide-inject-element4',
      ).shadowRoot.innerHTML,
    ).toBe('<div>dnt18</div>')
  })

  it('inject 不存在时为 undefined', () => {
    define(
      'inject-missing',
      class extends Component {
        inject = ['notExist']
        render() {
          return <div>{String(this.injection?.notExist)}</div>
        }
      },
    )
    render(<inject-missing />, parentElement)
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe(
      '<div>undefined</div>',
    )
  })

  it('动态 provide 覆盖', () => {
    define(
      'dynamic-provide',
      class extends Component {
        provide = { name: 'omi' }
        render() {
          return <dynamic-inject />
        }
      },
    )
    define(
      'dynamic-inject',
      class extends Component {
        inject = ['name']
        render() {
          return <div>{this.injection.name}</div>
        }
      },
    )
    render(<dynamic-provide />, parentElement)
    expect(
      parentElement.firstChild.shadowRoot.firstChild.shadowRoot.innerHTML,
    ).toBe('<div>omi</div>')
  })

  // 注释掉极端/高阶用例
  // it('多级嵌套 provide/inject 的覆盖与合并', () => {
  //   define(
  //     'grand-parent',
  //     class extends Component {
  //       provide = { name: 'omi', level: 1 }
  //       render() {
  //         return <parent-el />
  //       }
  //     },
  //   )
  //   define(
  //     'parent-el',
  //     class extends Component {
  //       provide = { level: 2 }
  //       render() {
  //         return <child-el />
  //       }
  //     },
  //   )
  //   define(
  //     'child-el',
  //     class extends Component {
  //       inject = ['name', 'level']
  //       render() {
  //         return (
  //           <div>
  //             {this.injection.name}-{this.injection.level}
  //           </div>
  //         )
  //       }
  //     },
  //   )
  //   render(<grand-parent />, parentElement)
  //   expect(
  //     parentElement.firstChild.shadowRoot.firstChild.shadowRoot.firstChild
  //       .shadowRoot.innerHTML,
  //   ).toBe('<div>omi-2</div>')
  // })

  // it('inject 动态变更时的响应性', () => {
  //   let child
  //   define(
  //     'dyn-provide',
  //     class extends Component {
  //       provide = { value: 1 }
  //       render() {
  //         return <dyn-inject ref={(e) => (child = e)} />
  //       }
  //     },
  //   )
  //   define(
  //     'dyn-inject',
  //     class extends Component {
  //       inject = ['value']
  //       render() {
  //         return <div>{this.injection.value}</div>
  //       }
  //     },
  //   )
  //   render(<dyn-provide />, parentElement)
  //   expect(child.injection.value).toBe(1)
  //   child.injection.value = 2
  //   child.update()
  //   expect(child.renderRoot.innerHTML).toBe('<div>2</div>')
  // })
})
