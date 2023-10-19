import {
  define,
  render,
  Component,
  h
} from '@/index'


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
    define('provide-inject-element1', class extends Component {

      inject = ['name']

      render(props) {

        return <div>{this.injection.name}</div>
      }
    })


    define('provide-inject-app', class extends Component {
      aa = 1
      installed() {
        this.aa = 2
        this.update()

      }

      provide = {
        name: 'dnt'
      }

      render(props) {
        return <provide-inject-element1 aa={this.aa}></provide-inject-element1>
      }
    })

    render(<provide-inject-app />, parentElement)
    expect(parentElement.firstChild.shadowRoot.firstChild.shadowRoot.innerHTML).toBe('<div>dnt</div>')

  })


  it('provide-inject keys', () => {
    define('provide-inject-element2', class extends Component {

      inject = ['name', 'age']

      render(props) {

        return <div>{this.injection.name}{this.injection.age}</div>
      }
    })


    define('provide-inject-app2', class extends Component {

      provide = {
        name: 'dnt',
        age: 18
      }

      render(props) {
        return <provide-inject-element2 ></provide-inject-element2>
      }
    })

    render(<provide-inject-app2 />, parentElement)
    expect(parentElement.firstChild.shadowRoot.firstChild.shadowRoot.innerHTML).toBe('<div>dnt18</div>')

  })


  it('provide-inject three level nest ', () => {
    define('provide-inject-element3', class extends Component {

      inject = ['name', 'age']

      render(props) {

        return <div>{this.injection.name}{this.injection.age}<provide-inject-element4></provide-inject-element4></div>
      }
    })

    define('provide-inject-element4', class extends Component {

      inject = ['name', 'age']

      render(props) {

        return <div>{this.injection.name}{this.injection.age}</div>
      }
    })



    define('provide-inject-app3', class extends Component {

      provide = {
        name: 'dnt',
        age: 18
      }

      render(props) {
        return <provide-inject-element3 ></provide-inject-element3>
      }
    })

    render(<provide-inject-app3 />, parentElement)
    expect(parentElement.firstChild.shadowRoot.firstChild.shadowRoot.querySelector('provide-inject-element4').shadowRoot.innerHTML).toBe('<div>dnt18</div>')

  })

})
