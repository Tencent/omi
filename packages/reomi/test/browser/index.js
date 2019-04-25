import {
  define,
  render,
  WeElement,
  cloneElement,
  createRef,
  getHost
} from '../../src/omi'

describe('install()', () => {
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

  it('should render components', () => {
    class Ele extends WeElement {
      render() {
        return <div>Ele</div>
      }
      install() {
        console.log(123)
      }
    }

    define('my-ele', Ele)
    sinon.spy(Ele.prototype, 'render')
    render(<my-ele />, scratch)

    expect(Ele.prototype.render)
      .to.have.been.calledOnce.and.to.have.been.calledWithMatch({}, {})
      .and.to.have.returned(sinon.match({ nodeName: 'div' }))

    expect(scratch.firstChild.shadowRoot.innerHTML).to.equal('<div>Ele</div>')
  })


  it('should render components with props', () => {
    const PROPS = { foo: 'bar', onBaz: () => { } }
    let constructorProps

    class C2 extends WeElement {
      install() {
        constructorProps = this.props
      }
      render(props) {
        return <div {...props} />
      }
    }
    sinon.spy(C2.prototype, 'render')

    define('c2-ele', C2)
    render(<c2-ele {...PROPS} />, scratch)

     expect(constructorProps).to.deep.equal(PROPS)

    expect(C2.prototype.render)
      .to.have.been.calledOnce.and.to.have.been.calledWithMatch(PROPS, {})
      .and.to.have.returned(
        sinon.match({
          nodeName: 'div',
          attributes: PROPS
        })
      )

    expect(scratch.firstChild.shadowRoot.innerHTML).to.equal('<div foo="bar"></div>')
  })


})
