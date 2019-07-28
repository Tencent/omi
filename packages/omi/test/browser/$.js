import {
	define,
	render,
	WeElement,
	cloneElement,
	createRef,
	getHost
} from '../../src/omi'

import {
	getValByPath
} from '../../src/util'

describe('$ props data center', () => {
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

		var Omi = { $: { user: { name: 'dnt', age: 18 } } }
		expect(getValByPath('user', Omi.$)).to.deep.equal({ name: "dnt", age: 18 })
		expect(getValByPath('user.age', Omi.$)).to.deep.equal(18)

	})

	it('array test', () => {

		var Omi = { $: { user: { name: 'dnt', age: 18, list: [{ a: 1 }, { b: 2 }] } } }
		expect(getValByPath('user.list[1].b', Omi.$)).to.deep.equal(2)

	})


	it('render test', () => {


		define('my-component', class extends WeElement {
			static propTypes = {
				user: Object
			}

			render(props) {
				return (
					<div>name: {props.user.name}, age: {props.user.age}</div>
				)
			}
		})

		Omi.$.user = { name: 'dntzhang', age: 18 }
		scratch.innerHTML = `
	<my-component user=":user" ></my-component>
	`


		expect(document.querySelector('my-component').shadowRoot.innerHTML).to.deep.equal('<div>name: dntzhang, age: 18</div>')

	})



})
