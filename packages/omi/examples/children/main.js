import { render, define, WeElement } from '../../src/omi'

define('my-p',
	class extends WeElement {

		render(props) {
			return props.children
		}
	})

define('my-app',
	class extends WeElement {

		render() {
			return (
				<div>
					<my-p>
						<h2>Hello World</h2>
					</my-p>
				</div>
			)
		}
	})

render(
	<my-app />,
	'body'
)
