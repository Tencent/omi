import {
	define,
	render,
	WeElement
} from '../../src/omi'


describe('render array', () => {
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

	it('render array 1', () => {
		define('my-element11', class extends WeElement {

			render(props) {
				if (props.aa === 1) {
					return [<div>Hello</div>, <div>Element</div>, <div>Element2</div>]
				}
				return  <div>Element5</div>
			}
		})


		define('my-app11', class extends WeElement {
			aa = 1
			installed() {
					this.aa =2
					this.update()

			}

			render(props) {
				return <my-element11 aa={this.aa}></my-element11>
			}
		})

		render(<my-app11 />,scratch)
		expect(scratch.firstChild.shadowRoot.firstChild.shadowRoot.innerHTML).to.equal('<div>Element5</div>')



	})

	it('render array 2', () => {
		define('my-element12', class extends WeElement {

			render(props) {
				if (props.aa === 1) {
					return [<div>Hello</div>, <div>Element</div>, <div>Element2</div>]
				}
				return  <div>Element5</div>
			}
		})


		define('my-app12', class extends WeElement {
			aa = 2
			installed() {
					this.aa =1
					this.update()

			}

			render(props) {
				return <my-element12 aa={this.aa}></my-element12>
			}
		})

		render(<my-app12 />,scratch)
		expect(scratch.firstChild.shadowRoot.firstChild.shadowRoot.innerHTML).to.equal('<div>Hello</div><div>Element</div><div>Element2</div>')
	})



	it('render array 3', () => {
		define('my-element13', class extends WeElement {

			render(props) {
				if (props.aa === 1) {
					return [<div>Hello2</div>, <div>Element</div>, <div>Element2</div>]
				}
				return  [<div>Element5</div>, <div>Element</div>]
			}
		})


		define('my-app13', class extends WeElement {
			aa = 2
			installed() {
					this.aa =1
					this.update()

			}

			render(props) {
				return <my-element13 aa={this.aa}></my-element13>
			}
		})

		render(<my-app13 />,scratch)
		expect(scratch.firstChild.shadowRoot.firstChild.shadowRoot.innerHTML).to.equal('<div>Hello2</div><div>Element</div><div>Element2</div>')
	})



	it('render array 4', () => {
		define('my-element14', class extends WeElement {

			render(props) {
				if (props.aa === 1) {
					return [<div>Hello2</div>, <div>Element</div>, <div>Element2</div>]
				}
				return  [<div>Element5</div>, <div>Element</div>]
			}
		})


		define('my-app14', class extends WeElement {
			aa = 1
			installed() {
					this.aa =2
					this.update()

			}

			render(props) {
				return <my-element14 aa={this.aa}></my-element14>
			}
		})

		render(<my-app14 />,scratch)
		expect(scratch.firstChild.shadowRoot.firstChild.shadowRoot.innerHTML).to.equal('<div>Element5</div><div>Element</div>')
	})


	it('render array 5', () => {
		define('my-element15', class extends WeElement {

			render(props) {
				if (props.aa === 1) {
					return <div>Hello2</div>
				}
				return  [<div>Element5</div>, <div>Element</div>]
			}
		})


		define('my-app15', class extends WeElement {
			aa = 1
			installed() {
					this.aa =2
					this.update()

			}

			render(props) {
				return <my-element15 aa={this.aa}></my-element15>
			}
		})

		render(<my-app15 />,scratch)
		expect(scratch.firstChild.shadowRoot.firstChild.shadowRoot.innerHTML).to.equal('<div>Element5</div><div>Element</div>')
	})

	it('render array 6', () => {
		define('my-element16', class extends WeElement {

			render(props) {
				if (props.aa === 1) {
					return  [<div>Element5</div>, <div>Element</div>]
				}
				return <div>Hello2</div>
			}
		})


		define('my-app16', class extends WeElement {
			aa = 1
			installed() {
					this.aa =2
					this.update()

			}

			render(props) {
				return <my-element16 aa={this.aa}></my-element16>
			}
		})

		render(<my-app16 />,scratch)
		expect(scratch.firstChild.shadowRoot.firstChild.shadowRoot.innerHTML).to.equal('<div>Hello2</div>')
	})


	it('render array 7', () => {
		define('my-element17', class extends WeElement {

			render(props) {
				if (props.aa === 1) {
					return  [<div>Element5</div>, <div>Element</div>]
				}
				return <div>Hello2</div>
			}
		})


		define('my-app17', class extends WeElement {
			aa = 1
			installed() {
					this.aa =2
					this.updateSelf()

			}

			render(props) {
				return <my-element17 aa={this.aa}></my-element17>
			}
		})

		render(<my-app17 />,scratch)
		expect(scratch.firstChild.shadowRoot.firstChild.shadowRoot.innerHTML).to.equal('<div>Element5</div><div>Element</div>')
	})


	it('render array 8', () => {
		define('my-element18', class extends WeElement {

			render(props) {
				if (props.aa === 1) {
					return  [<div>Element1</div>, <div>Element2</div>]
				}
				return[<div>Element3</div>, <div>Element4</div>, <div>Element5</div>]
			}
		})


		define('my-app18', class extends WeElement {
			aa = 1
			installed() {
					this.aa =2
					this.update()

			}

			render(props) {
				return <my-element18 aa={this.aa}></my-element18>
			}
		})

		render(<my-app18 />,scratch)
		expect(scratch.firstChild.shadowRoot.firstChild.shadowRoot.innerHTML).to.equal('<div>Element3</div><div>Element4</div><div>Element5</div>')
	})


	it('render array 9', () => {
		define('my-element19', class extends WeElement {

			render(props) {
				if (props.aa === 1) {
					return  [<div>Element1</div>, <div>Element2</div>]
				}
				return[<div>Element3</div>]
			}
		})


		define('my-app19', class extends WeElement {
			aa = 1
			installed() {
					this.aa =2
					this.update()

			}

			render(props) {
				return <my-element19 aa={this.aa}></my-element19>
			}
		})

		render(<my-app19 />,scratch)
		expect(scratch.firstChild.shadowRoot.firstChild.shadowRoot.innerHTML).to.equal('<div>Element3</div>')
	})
})
