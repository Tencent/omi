import { render, WeElement, tag } from '../../src/omi'
import 'omi-tap'

@tag('my-app')
class MyApp extends WeElement {
	onTap = () => {
	  console.log('tap')
	}

	css() {
	  return `
		div{
		  width: 100px;
		  height: 100px;
		  background-color: rgb(56,121,217);
		  text-align: center;
		  color: white;
		  margin: 0 auto;
		  line-height: 93px;
		}`
	}

	render() {
	  return (
	    <omi-tap onTap={this.onTap}>
	      <div>Tap Me!</div>
	    </omi-tap>
	  )
	}
}

render(<my-app />, 'body')
