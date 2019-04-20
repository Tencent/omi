import {
  define,
  render,
  WeElement,
  cloneElement,
  createRef,
  getHost
} from '../../src/omi'

describe('store', () => {
  let scratch
  //const Empty = () => null

  before(() => {
    scratch = document.createElement('div')
      ; (document.body || document.documentElement).appendChild(scratch)
  })

  beforeEach(() => {
    //let c = scratch.firstElementChild;
    //if (c) render(<Empty />, scratch, { merge: c })
    scratch.innerHTML = ''
  })

  after(() => {
    scratch.parentNode.removeChild(scratch)
    scratch = null
  })

  it('should render store.data', () => {

    class Ele extends WeElement {
      render() {
				return <div>{this.store.data.a}</div>
      }
    }

    define('my-ele2', Ele)
    sinon.spy(Ele.prototype, 'render')
    render(<my-ele2 />, scratch, {
			data:{a:1}
		})

    expect(scratch.firstChild.shadowRoot.innerHTML).to.equal('<div>1</div>')
  })

	it('test initUse', () => {

    class Ele extends WeElement {
			initUse (){
				return ['a']
			}

			installed(){
				this.store.data.a = 2
			}

      render() {
				return <div>{this.store.data.a}</div>
      }
    }

    define('my-ele4', Ele)
    sinon.spy(Ele.prototype, 'render')
    render(<my-ele4 />, scratch, {
			data:{a:1}
		})

    expect(scratch.firstChild.shadowRoot.innerHTML).to.equal('<div>2</div>')
	})

	it('test static use', () => {

    class Ele extends WeElement {
			static use = ['a']

			installed(){
				this.store.data.a = 2
			}

      render() {
				return <div>{this.store.data.a}</div>
      }
    }

    define('my-ele5', Ele)
    sinon.spy(Ele.prototype, 'render')
    render(<my-ele5 />, scratch, {
			data:{a:1}
		})

    expect(scratch.firstChild.shadowRoot.innerHTML).to.equal('<div>2</div>')
	})

	it('should render store.data in sub element', () => {
		class SubEle extends WeElement {
      render() {
				return <div>{this.store.data.a}</div>
      }
    }

		define('sub-ele', SubEle)

    class Ele extends WeElement {
      render() {
				return <div><sub-ele></sub-ele></div>
      }
    }

		define('my-ele3', Ele)



    render(<my-ele3 />, scratch, {
			data:{a:2}
		})

    expect(scratch.firstChild.shadowRoot.firstChild.firstChild.shadowRoot.innerHTML).to.equal('<div>2</div>')
  })

})
