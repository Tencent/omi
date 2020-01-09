import {
	define,
	render,
	WeElement,
	h
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
			data: { a: 1 }
		})

		expect(scratch.firstChild.shadowRoot.innerHTML).to.equal('<div>1</div>')
	})

	it('test use method', () => {

		class Ele extends WeElement {
			use() {
				return ['a']
			}

			installed() {
				this.store.data.a = 2
			}

			render() {
				return <div>{this.store.data.a}</div>
			}
		}

		define('my-ele4', Ele)
		sinon.spy(Ele.prototype, 'render')
		render(<my-ele4 />, scratch, {
			data: { a: 1 }
		})

		expect(scratch.firstChild.shadowRoot.innerHTML).to.equal('<div>2</div>')
	})


	it('test use prop', () => {

		class Ele extends WeElement {
			use = ['a']

			installed() {
				this.store.data.a = 2
			}

			render() {
				return <div>{this.store.data.a}</div>
			}
		}

		define('my-ele6', Ele)
		sinon.spy(Ele.prototype, 'render')
		render(<my-ele6 />, scratch, {
			data: { a: 1 }
		})

		expect(scratch.firstChild.shadowRoot.innerHTML).to.equal('<div>2</div>')
	})


	it('test  use', () => {

		class Ele extends WeElement {
			use = ['a']

			installed() {
				this.store.data.a = 2
			}

			render() {
				return <div>{this.store.data.a}</div>
			}
		}

		define('my-ele5', Ele)
		sinon.spy(Ele.prototype, 'render')
		render(<my-ele5 />, scratch, {
			data: { a: 1 }
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
			data: { a: 2 }
		})

		expect(scratch.firstChild.shadowRoot.firstChild.firstChild.shadowRoot.innerHTML).to.equal('<div>2</div>')
	})



	it('test useSelf', () => {

		class Ele extends WeElement {
			useSelf = ['a']

			installed() {
				this.store.data.a = 2
			}

			render() {
				return <div>{this.store.data.a}</div>
			}
		}

		define('my-ele7', Ele)
		sinon.spy(Ele.prototype, 'render')
		render(<my-ele7 />, scratch, {
			data: { a: 1 }
		})

		expect(scratch.firstChild.shadowRoot.innerHTML).to.equal('<div>2</div>')
	})


	it('test auto updata a', () => {

		class Ele extends WeElement {
			use = ['a.b']

			installed() {
				this.store.data.a.b = 2
			}

			render() {
				return <div>{this.store.data.a.b}</div>
			}
		}

		define('my-ele8', Ele)
		sinon.spy(Ele.prototype, 'render')
		render(<my-ele8 />, scratch, {
			data: { a: { b: 1 } }
		})

		expect(scratch.firstChild.shadowRoot.innerHTML).to.equal('<div>2</div>')
	})

	it('test auto updata b', () => {

		class Ele extends WeElement {
			use = ['a']

			installed() {
				this.store.data.a.b = 2
			}

			render() {
				return <div>{this.store.data.a.b}</div>
			}
		}

		define('my-ele9', Ele)
		sinon.spy(Ele.prototype, 'render')
		render(<my-ele9 />, scratch, {
			data: { a: { b: 1 } }
		})

		expect(scratch.firstChild.shadowRoot.innerHTML).to.equal('<div>2</div>')
	})

	it('test auto updata c', () => {

		class Ele extends WeElement {


			installed() {
				this.store.data.a.b = 2
			}

			render() {
				return <div>{this.store.data.a.b}</div>
			}
		}

		define('my-ele10', Ele)
		sinon.spy(Ele.prototype, 'render')
		render(<my-ele10 />, scratch, {
			data: { a: { b: 1 } }
		})

		expect(scratch.firstChild.shadowRoot.innerHTML).to.equal('<div>1</div>')
	})


	it('test auto updata with array path a', () => {

		class Ele extends WeElement {
			useSelf = ['a[0]']

			installed() {
				this.store.data.a[0].b = 2
			}

			render() {
				return <div>{this.store.data.a[0].b}</div>
			}
		}

		define('my-ele11', Ele)
		sinon.spy(Ele.prototype, 'render')
		render(<my-ele11 />, scratch, {
			data: { a: [{ b: 1 }] }
		})

		expect(scratch.firstChild.shadowRoot.innerHTML).to.equal('<div>2</div>')
	})


	it('test auto updata with array path b', () => {

		class Ele extends WeElement {
			useSelf = ['a[0].b']

			installed() {
				this.store.data.a[0].b = 2
			}

			render() {
				return <div>{this.store.data.a[0].b}</div>
			}
		}

		define('my-ele12', Ele)
		sinon.spy(Ele.prototype, 'render')
		render(<my-ele12 />, scratch, {
			data: { a: [{ b: 1 }] }
		})

		expect(scratch.firstChild.shadowRoot.innerHTML).to.equal('<div>2</div>')
	})

	it('test auto updata with array path c', () => {

		class Ele extends WeElement {
			use = ['a[0].b']

			installed() {
				this.store.data.a[0].b = 2
			}

			render() {
				return <div>{this.store.data.a[0].b}</div>
			}
		}

		define('my-ele13', Ele)
		sinon.spy(Ele.prototype, 'render')
		render(<my-ele13 />, scratch, {
			data: { a: [{ b: 1 }] }
		})

		expect(scratch.firstChild.shadowRoot.innerHTML).to.equal('<div>2</div>')
	})

	it('test auto updata with array path c', () => {

		class Ele extends WeElement {
			use = ['a']

			installed() {
				this.store.data.a[0].b = 2
			}

			render() {
				return <div>{this.store.data.a[0].b}</div>
			}
		}

		define('my-ele14', Ele)
		sinon.spy(Ele.prototype, 'render')
		render(<my-ele14 />, scratch, {
			data: { a: [{ b: 1 }] }
		})

		expect(scratch.firstChild.shadowRoot.innerHTML).to.equal('<div>2</div>')
	})

	it('test extention method', () => {

		define('my-ele15', _ => <div onClick={_.myMethod()}>1</div>, {
			install() {
				this.a = 1
			},
			myMethod() {
				this.a++
			}
		})

		render(<my-ele15 />, scratch)

		scratch.firstChild.shadowRoot.querySelector('div').click()
		expect(scratch.firstChild.a).to.equal(2)
	})

	it('test use prop', () => {


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

		define('my-counter111', _ => (
			<h.f>
				<button onClick={_.store.sub}>-</button>
				<span>{_.store.data.count}</span>
				<button onClick={_.store.add}>+</button>
			</h.f>
		))

		define('my-ele16', _ => (
			<div>
				<my-counter111 use={['count']} ></my-counter111>
			</div>
		))

		render(<my-ele16 />, scratch, store)
		scratch.firstChild.shadowRoot.querySelector('my-counter111').shadowRoot.querySelector('button').click()

		expect(scratch.firstChild.shadowRoot.querySelector('my-counter111').shadowRoot.querySelector('span').innerHTML).to.equal('0')
	})
})
