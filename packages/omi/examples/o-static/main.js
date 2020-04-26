import { define, render, WeElement, h } from '../../src/omi'
import './my-element'

define('my-app', class extends WeElement {

	myCSS = `
  h1{
    color: green;
  }`

	onClick = () => {
		this.myCSS = `
    h1{
      color: blue;
    }`
		this.update()
	}

	render() {
		return (
			<div onClick={this.onClick}>
				{this.xx && <div>test22222</div>}
				<h.f>
					<div>c</div>
					<div>d</div>
				</h.f>
				{[<div>a</div>, <div>b</div>]}
				<my-element css={this.myCSS} />
			</div>
		)
	}
})

render(<my-app />, 'body')

