import {
	render, h
} from '../../src/omis'

describe('global store', () => {
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
		const HelloMessage = (props, store, _, $) => {
			return h('div', { ref: ele => _.abc = ele }, `Hello ${$.data.name}`)
		}
		let a
		HelloMessage.store = _ => {

			return {
				installed() {
					
				}
			}
		}


		render(<HelloMessage  />, scratch,{
			data:{
				name: 'abc'
			}
		})

		expect(scratch.innerHTML).to.deep.equal('<div>Hello abc</div>')
	})

	it('observer testA', () => {
		const HelloMessage = (props, store, _, $) => {
			return h('div', { ref: ele => _.abc = ele }, `Hello ${$.data.name}`)
		}

		let a
		HelloMessage.store = (_, $) => {

			_.use = ['name']
			
			return {
				installed() {
					$.data.name = 'cde'
				}
			}
		}


		render(<HelloMessage  />, scratch,{
			data:{
				name: 'abc'
			}
		})

		expect(scratch.innerHTML).to.deep.equal('<div>Hello cde</div>')
	})

	it('observer testB', () => {
		const HelloMessage = (props, store, _, $) => {
			return h('div', { ref: ele => _.abc = ele }, `Hello ${$.data.name}`)
		}

		HelloMessage.store = (_, $) => {

			_.use = ()=>	['name']
			
			return {
				installed() {
					$.data.name = 'cde'
				}
			}
		}


		render(<HelloMessage  />, scratch,{
			data:{
				name: 'abc'
			}
		})

		expect(scratch.innerHTML).to.deep.equal('<div>Hello cde</div>')
	})
})
