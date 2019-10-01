import {
	render, h
} from '../../src/omis'

describe('base', () => {
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

		const HelloMessage = props => {
			return h('div', {}, `Hello ${props.name}`)
		}

		render(<HelloMessage name="Omis" />, scratch)

		expect(scratch.innerHTML).to.equal('<div>Hello Omis</div>')
	})

	it('css test', () => {

		const HelloMessage = props => {
			return h('div', {}, `Hello ${props.name}`)
		}

		HelloMessage.css = `div{
			color: red;
		}`


		render(<HelloMessage name="Omis" />, scratch)

		expect(window.getComputedStyle(scratch.querySelector('div')).color).to.equal('rgb(255, 0, 0)')
	})



	it('event test', () => {

		const Counter = (props, store) => {
			return (
				<div>
					<button class='event-test' onClick={store.sub}>-</button>
					<text>{store.count}</text>
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
				}
			}
		}

		const App = (props, store) => {
			return (
				<div>
					<div>Hello Omis</div>
					<Counter onChange={store.changeHandle}></Counter>
				</div>
			)
		}

		let v
		App.store = _ => {
			return {
				changeHandle(count) {
					console.log(count)
					v = count
				}
			}
		}

		render(<App />, scratch)


		scratch.querySelector('.event-test').click()
		expect(v).to.equal(0)
	})


	it('prop css test', () => {

		const HelloMessage = props => {
			return h('div', { class:'prop-css-test'}, props.name)
		}

		HelloMessage.css = `div{
			color: red;
		}`

		const App = props => {
			return h('div', {}, [
				props.name,
				h(HelloMessage, {name: 'Child Yellow', css: `div{color: yellow !important;}` })
			])
		}

		App.css = `div{
			color: green;
		}`

		render(<App name="Parent Green" />, scratch)


		expect(window.getComputedStyle(scratch.querySelector('.prop-css-test')).color).to.equal('rgb(255, 255, 0)')
	})
})
