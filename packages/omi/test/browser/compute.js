import {
	define,
	render,
	WeElement,
	cloneElement,
	createRef,
	getHost,
	h
} from '../../src/omi'

describe('compute', () => {
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

	it('should render computed', () => {

		const store = {
			data: {
				count: 1
			}
		}

		store.sub = () => {
			store.data.count--
		}

		store.add = () => {
			store.data.count++
		}

		define('my-counter', _ => (
			<h.f>
				<span>Double: {_.computed.doubleCount}</span>
			</h.f>
		), {
				use: ['count'],
				compute: {
					doubleCount() {
						return this.count * 2
					}
				}
			})

		render(<my-counter />, scratch, store)
		expect(scratch.firstChild.shadowRoot.innerHTML).to.equal('<span>Double: 2</span>')
	})


	it('should rerender computed', () => {

		const store = {
			data: {
				count: 1
			}
		}

		store.sub = () => {
			store.data.count--
		}

		store.add = () => {
			store.data.count++
		}

		define('my-counter', _ => (
			<h.f>
				<span>Double: {_.computed.doubleCount}</span>
			</h.f>
		), {
				use: ['count'],
				compute: {
					doubleCount() {
						return this.count * 2
					}
				}
			})



		render(<my-counter />, scratch, store)
		store.add()
		expect(scratch.firstChild.shadowRoot.innerHTML).to.equal('<span>Double: 4</span>')
	})
})
