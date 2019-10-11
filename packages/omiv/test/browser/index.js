import Counter from './components/counter.vue'

describe('base', () => {
  let scratch

  before(() => {
    scratch = document.createElement('div')
      ; (document.body || document.documentElement).appendChild(scratch)
  })

  beforeEach(() => {
    scratch.innerHTML = ''
  })

  after(() => {
    scratch.parentNode.removeChild(scratch)
    scratch = null
  })

  it('simple', () => {
 
    expect(1).to.equal(1)
  })


  // it('should render components with props', () => {
  //   const PROPS = { foo: 'bar', onBaz: () => { } }
  //   let constructorProps

  //   class C2 extends WeElement {
  //     install() {
  //       constructorProps = this.props
  //     }
  //     render(props) {
  //       return <div {...props} />
  //     }
  //   }
  //   sinon.spy(C2.prototype, 'render')

  //   define('c2-ele', C2)
  //   render(<c2-ele {...PROPS} />, scratch)

  //    expect(constructorProps).to.deep.equal(PROPS)

  //   expect(C2.prototype.render)
  //     .to.have.been.calledOnce.and.to.have.been.calledWithMatch(PROPS)
  //     .and.to.have.returned(
  //       sinon.match({
  //         nodeName: 'div',
  //         attributes: PROPS
  //       })
  //     )

  //   expect(scratch.firstChild.shadowRoot.innerHTML).to.equal('<div foo="bar"></div>')
  // })


})
