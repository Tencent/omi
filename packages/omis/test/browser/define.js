import {
	render, h, define
} from '../../src/omis'

describe('web components', () => {
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

		const HelloMessage = (props, store) => {
			return (
				<div onClick={store.clickHandler} >
					<div>Hello {props.msg}</div>
					<div>{props.user.name}</div>
					<div>{props.user.age}</div>
				</div>
			)
		}
		
		HelloMessage.css = `div{
			color: red;
		}`
		
		HelloMessage.store = _ => {
			return {
				clickHandler() {
					_.props.onMyEvent && _.props.onMyEvent(123)
				}
			}
		}
		
		HelloMessage.propTypes = {
			msg: String,
			user: Object
		}
		
		define('hello-msg', HelloMessage)

	
		scratch.innerHTML += `<hello-msg msg="Omis" user="{name:'dntzhang', age: 18}"></hello-msg>`

		expect(scratch.querySelector('hello-msg').shadowRoot.innerHTML).to.deep.equal('<style type="text/css" id="_ss0">div[_ss0]{\n\t\t\tcolor: red;\n\t\t}</style><div _ss0=""><div _ss0="">Hello Omis</div><div _ss0="">dntzhang</div><div _ss0="">18</div></div>')
	})

	it('setAttribute test', () => {

		const HelloMessage = (props, store) => {
			return (
				<div onClick={store.clickHandler} >
					<div>Hello {props.msg}</div>
					<div>{props.user.name}</div>
					<div>{props.user.age}</div>
				</div>
			)
		}
		
		HelloMessage.css = `div{
			color: red;
		}`
		
		HelloMessage.store = _ => {
			return {
				clickHandler() {
					_.props.onMyEvent && _.props.onMyEvent(123)
				}
			}
		}
		
		HelloMessage.propTypes = {
			msg: String,
			user: Object
		}
		
		define('hello-msg2', HelloMessage)

	
		scratch.innerHTML += `<hello-msg2 msg="Omis" user="{name:'dntzhang', age: 18}"></hello-msg2>`

		const ele = scratch.querySelector('hello-msg2')
		ele.setAttribute('msg','abc')
		ele.setAttribute('user',{name:'dntzhang',age:20})
		ele.setAttribute('user',`{name:'DNTzhang',age:20}`)
		expect(scratch.querySelector('hello-msg2').shadowRoot.innerHTML).to.deep.equal('<style type="text/css" id="_ss1">div[_ss1]{\n\t\t\tcolor: red;\n\t\t}</style><div _ss1=""><div _ss1="">Hello abc</div><div _ss1="">DNTzhang</div><div _ss1="">20</div></div>')

		expect(ele.getAttribute('user')).to.deep.equal(`{name:'DNTzhang',age:20}`)
	})


	it('removeAttribute test', () => {

		const HelloMessage = (props, store) => {
			return (
				<div onClick={store.clickHandler} >
					<div>Hello {props.msg}</div>
				</div>
			)
		}
		
		HelloMessage.store = _ => {
			return {
				clickHandler() {
					_.props.onMyEvent && _.props.onMyEvent(123)
				}
			}
		}
		
		HelloMessage.propTypes = {
			msg: String,
			user: Object
		}
		
		HelloMessage.defaultProps = {
			msg: 'abc'
		}

		define('hello-msg3', HelloMessage)

	
		scratch.innerHTML += `<hello-msg3 msg="Omis" user="{name:'dntzhang', age: 18}"></hello-msg3>`
		const ele = scratch.querySelector('hello-msg3')
		ele.removeAttribute('msg')
		expect(ele.shadowRoot.innerHTML).to.deep.equal('<div><div>Hello abc</div></div>')

	})


})
