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
	</h.f>
))

define('my-app', _ => (
	<div>
		<my-counter use={['count']} ></my-counter>
	</div>
))


render(<my-app />, 'body', store)
