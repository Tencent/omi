import {
	define,
	render,
	WeElement
} from '../../src/omi'


describe('provide-inject', () => {
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

	it('provide-inject', () => {
		define('provide-inject-element1', class extends WeElement {

			inject = ['name']

			render(props) {

				return <div>{this.injection.name}</div>
			}
		})


		define('provide-inject-app', class extends WeElement {
			aa = 1
			installed() {
				this.aa = 2
				this.update()

			}

			provide = {
				name: 'dnt'
			}

			render(props) {
				return <provide-inject-element1 aa={this.aa}></provide-inject-element1>
			}
		})

		render(<provide-inject-app />, scratch)
		expect(scratch.firstChild.shadowRoot.firstChild.shadowRoot.innerHTML).to.equal('<div>dnt</div>')

	})


	it('provide-inject keys', () => {
		define('provide-inject-element2', class extends WeElement {

			inject = ['name', 'age']

			render(props) {

				return <div>{this.injection.name}{this.injection.age}</div>
			}
		})


		define('provide-inject-app2', class extends WeElement {

			provide = {
				name: 'dnt',
				age: 18
			}

			render(props) {
				return <provide-inject-element2 ></provide-inject-element2>
			}
		})

		render(<provide-inject-app2 />, scratch)
		expect(scratch.firstChild.shadowRoot.firstChild.shadowRoot.innerHTML).to.equal('<div>dnt18</div>')

	})


	it('provide-inject three level nest ', () => {
		define('provide-inject-element3', class extends WeElement {

			inject = ['name', 'age']

			render(props) {

				return <div>{this.injection.name}{this.injection.age}<provide-inject-element4></provide-inject-element4></div>
			}
		})

		define('provide-inject-element4', class extends WeElement {

			inject = ['name', 'age']

			render(props) {

				return <div>{this.injection.name}{this.injection.age}</div>
			}
		})



		define('provide-inject-app3', class extends WeElement {

			provide = {
				name: 'dnt',
				age: 18
			}

			render(props) {
				return <provide-inject-element3 ></provide-inject-element3>
			}
		})

		render(<provide-inject-app3 />, scratch)
		expect(scratch.firstChild.shadowRoot.firstChild.shadowRoot.querySelector('provide-inject-element4').shadowRoot.innerHTML).to.equal('<div>dnt18</div>')

	})

})
