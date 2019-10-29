import { render, define, h } from '../../src/omi'

const store = {
	data: {
		count: 1
	}
}

store.sub = () => {
	store.data.count--
}

store.add = () => {
	store.data.count++
}

define('my-counter', _ => (
	<h.f>
		<button onClick={_.store.sub}>-</button>
		<span>{_.store.data.count}</span>
		<button onClick={_.store.add}>+</button>
		<span>Double: {_.computed.doubleCount}</span>
	</h.f>
), {
		use: ['count'],
		compute: {
			doubleCount() {
				return this.count * 2
			}
		}
	})

render(<my-counter />, 'body', store)
