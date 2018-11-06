import { render, WeElement, define } from '../../src/omi'

define('my-timer',
	class extends WeElement {
		static observe = true

		data = {
			seconds: 0
		}

		tick() {
			this.data.seconds++
		}

		install() {
			this.interval = setInterval(() => this.tick(), 1000)
		}

		uninstall() {
			clearInterval(this.interval);
		}

		render() {
			return (
				<div>
					Seconds: {this.data.seconds}
				</div>
			);
		}
	})

render(<my-timer />, 'body')


