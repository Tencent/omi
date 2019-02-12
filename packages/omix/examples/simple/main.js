import { define, render, WeElement } from '../../src/omix'

define('my-counter', class extends WeElement {
  count = 1

  sub = () => {
    this.count--
    this.update()
  }

  add = () => {
    this.count++
    this.update()
  }

  buttonStyle = {
		color: 'red'
  }

  testStyle = {
    backgroundColor: 'red'
  }

	divStyle = {
		position: 'absolute',
		left: 100,
		width: 100,
		height: 100,
		backgroundColor: 'red'
	}

  render() {
    return (
      <div style={this.divStyle}>
        <button style={this.buttonStyle} onClick={this.sub}>-</button>
        <span style={this.testStyle}>{this.count}</span>
        <button style={this.buttonStyle} onClick={this.add}>+</button>
      </div>
    )
  }
})

render(<my-counter />, 'body')
