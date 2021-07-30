import { define, WeElement, h, render } from '../../src/omi'

define('my-el', class extends WeElement {

	static css = `
    span {
      color: red;
    }`

	static propTypes = {
		count: Number
	}


	installed() {

		this.hasBcd = true
		this.update()


		setTimeout(() => {
			this.hasBcd = !this.hasBcd
			this.update()
		}, 1000)
	}


	render() {
		return (
			<h.f>
				<div>abc</div>
				{this.hasBcd && <div>bcd</div>}
			</h.f>
		)
	}
})


render(<my-el />, 'body')
