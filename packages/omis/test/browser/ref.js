import {
	render, h
} from '../../src/omis'

describe('ref', () => {
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

		const HelloMessage = (props, store, _) => {
			return h('div', { ref: ele => _.abc = ele }, `Hello ${props.name}`)
		}
		let a
		HelloMessage.store = _ => {

			return {
				installed() {
					a = _.abc
				}
			}
		}

		HelloMessage.css = `div{
			color: red;
		}`

		render(<HelloMessage name="Omis" />, 'body')

		expect(a.innerHTML).to.deep.equal('Hello Omis')
	})
})
