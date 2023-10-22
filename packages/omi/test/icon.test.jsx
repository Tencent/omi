import { define, render, Component, h, tag } from '@/index'

const hyphenateRE = /\B([A-Z])/g
const hyphenate = function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
}

describe('icon', () => {
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






  it('createSvgIcon', () => {
    createSvgIcon(h('path', {
      d: 'M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22v-2z'
    }), 'AcUnitOutlined')


    render(<o-icon-ac-unit-outlined />, parentElement)

    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<svg viewBox=\"0 0 24 24\"><path d=\"M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22v-2z\"></path></svg>')
  })
})


function createSvgIcon(path, displayName) {

  define(hyphenate('OIcon' + displayName), class extends Component {

    render() {
      return h('svg', {
        viewBox: '0 0 24 24',
      }, path)
    }
  })
}
