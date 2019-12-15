import {
	define,
	render,
	Component,
	cloneElement,
	WeElement,
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

	it('store 1', () => {
		class Store {
			data = {
				count: 1
			}
			sub = () => {
				this.data.count--
			}
			add = () => {
				this.data.count++
			}
		}

		define('my-counter', _ => (
			<div>
				<button onClick={_.store.sub}>-</button>
				<span>{_.store.data.count}</span>
				<button onClick={_.store.add}>+</button>
			</div>
		), {
				use: ['count']
			})
		const store = new Store
		render(<my-counter />, scratch, store)

		expect(scratch.innerHTML).to.equal('<div><button>-</button><span>1</span><button>+</button></div>')
	})




	it('store 2', () => {
		class Store {
			data = {
				count: 1
			}
			sub = () => {
				this.data.count--
			}
			add = () => {
				this.data.count++
			}
		}

		define('my-counter', _ => (
			<div>
				<button onClick={_.store.sub}>-</button>
				<span>{_.store.data.count}</span>
				<button onClick={_.store.add}>+</button>
			</div>
		), {
				use: ['count']
			})
		const store = new Store
		render(<my-counter />, scratch, store)
		store.data.count++
		expect(scratch.innerHTML).to.equal('<div><button>-</button><span>2</span><button>+</button></div>')
	})



	it('store 3', () => {
		class Store {
			data = {
				count: 1
			}
			sub = () => {
				this.data.count--
			}
			add = () => {
				this.data.count++
			}
		}

		define('my-counter', _ => (
			<div>
				<button onClick={_.store.sub}>-</button>
				<span>{_.store.data.count}</span>
				<button onClick={_.store.add}>+</button>
			</div>
		), {
				//use: ['count']
			})
		const store = new Store
		render(<my-counter />, scratch, store)
		store.data.count++
		expect(scratch.innerHTML).to.equal('<div><button>-</button><span>1</span><button>+</button></div>')
	})
})
