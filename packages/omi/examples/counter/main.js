import { render, WeElement, tag, observe } from "../../src/omi"


@observe
@tag("my-counter")
class MyApp extends WeElement {

	data = {
	  count: 0
	}

	sub = () => {
	  this.data.count--
	}

	add = () => {
	  this.data.count++
	}

	render() {
	  return (
	    <div>
	      <button onClick={this.sub}>-</button>
	      <span>{this.data.count}</span>
	      <button onClick={this.add}>+</button>
	    </div>
	  )
	}
}

render(<my-counter />, "body")
