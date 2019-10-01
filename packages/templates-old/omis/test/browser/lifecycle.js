import {
	render, h
} from '../../src/omis'

describe('lifecycle', () => {
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

	it('simple test', () => {

		const arr = []
		const Counter = (props, store) => {
			return (
				<div>
					<button class='simple-test-a' onClick={store.sub}>-</button>
					<span>{store.count}</span>
					<button onClick={store.add}>+</button>
				</div>
			)
		}

		Counter.store = _ => {
			return {
				count: 1,
				add(e) {
					this.count++
					this.update()
					_.props.onChange(this.count)
				},
				sub() {
					this.count--
					this.update()
					_.props.onChange(this.count)
				},
				install() {
					arr.push('install')
				},
				installed() {
					arr.push('installed')
				},
				uninstall() {
					arr.push('uninstall')
				},
				beforeUpdate() {
					arr.push('beforeUpdate')
				},
				updated() {
					arr.push('updated')
				},
				beforeRender() {
					arr.push('beforeRender')
				},
				receiveProps() {
					arr.push('receiveProps')
				}
			}
		}

		const App = (props, store) => {
			return (
				<div>
					<div class='simple-test-b' onClick={store.toggle}>Count from child event: {store.count}</div>
					{store.show && <Counter onChange={store.changeHandle}></Counter>}
				</div>
			)
		}

		App.store = _ => {
			class Store {
				count = null
				show = true
				changeHandle = (count) => {
					this.count = count
					this.update()
				}
				toggle = () => {
					this.show = !this.show
					this.update()
				}
			}

			return new Store
		}

		render(<App />, scratch)

		document.querySelector('.simple-test-a').click()
		document.querySelector('.simple-test-b').click()
		expect(arr).to.deep.equal(['install', 'beforeRender', 'installed', 'beforeUpdate', 'beforeRender', 'updated', 'receiveProps', 'beforeUpdate', 'beforeRender', 'updated', 'uninstall'])
	})



	it('receiveProps return false test', () => {

		const arr = []
		const Counter = (props, store) => {
			return (
				<div>
					<button class='simple-test-a' onClick={store.sub}>-</button>
					<span>{store.count}</span>
					<button onClick={store.add}>+</button>
				</div>
			)
		}

		Counter.store = _ => {
			return {
				count: 1,
				add(e) {
					this.count++
					this.update()
					_.props.onChange(this.count)
				},
				sub() {
					this.count--
					this.update()
					_.props.onChange(this.count)
				},
				install() {
					arr.push('install')
				},
				installed() {
					arr.push('installed')
				},
				uninstall() {
					arr.push('uninstall')
				},
				beforeUpdate() {
					arr.push('beforeUpdate')
				},
				updated() {
					arr.push('updated')
				},
				beforeRender() {
					arr.push('beforeRender')
				},
				receiveProps() {
					arr.push('receiveProps')
					return false
				}
			}
		}

		const App = (props, store) => {
			return (
				<div>
					<div class='simple-test-b' onClick={store.toggle}>Count from child event: {store.count}</div>
					{store.show && <Counter onChange={store.changeHandle}></Counter>}
				</div>
			)
		}

		App.store = _ => {
			class Store {
				count = null
				show = true
				changeHandle = (count) => {
					this.count = count
					this.update()
				}
				toggle = () => {
					this.show = !this.show
					this.update()
				}
			}

			return new Store
		}

		render(<App />, scratch)

		document.querySelector('.simple-test-a').click()
		document.querySelector('.simple-test-b').click()
		expect(arr).to.deep.equal(['install', 'beforeRender', 'installed', 'beforeUpdate', 'beforeRender', 'updated', 'receiveProps',  'uninstall'])
	})
})
