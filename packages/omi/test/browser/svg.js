import {
	define,
	render,
	WeElement,
	options
} from '../../src/omi'

describe('index', () => {
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

	it('should render svg', () => {
		class Ele extends WeElement {
			render() {
				return 		<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="5,5 195,10 185,185 10,195" fill="red" />
        <foreignObject x="20" y="20" width="160" height="160">
          <div xmlns="http://www.w3.org/1999/xhtml">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis mollis
            mi ut ultricies. Nullam magna ipsum, porta vel dui convallis, rutrum
            imperdiet eros. Aliquam erat volutpat.
          </div>
        </foreignObject>
      </svg>
			}

		}

		define('my-svg', Ele)
		sinon.spy(Ele.prototype, 'render')
		render(<my-svg />, scratch)

		expect(Ele.prototype.render)
			.to.have.been.calledOnce.and.to.have.been.calledWithMatch({})
			.and.to.have.returned(sinon.match({ nodeName: 'svg' }))

		expect(scratch.firstChild.shadowRoot.innerHTML).to.equal('<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="5,5 195,10 185,185 10,195" fill="red"></polygon><foreignObject x="20" y="20" width="160" height="160"><div xmlns="http://www.w3.org/1999/xhtml">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis mollis mi ut ultricies. Nullam magna ipsum, porta vel dui convallis, rutrum imperdiet eros. Aliquam erat volutpat.</div></foreignObject></svg>')
	})

})
