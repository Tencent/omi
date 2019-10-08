import { define, render } from '../../src/omi'

define('my-app', _ => {
	const store = _.store.storeA
	const { data, add, sub } = store
	return (
		<p>
			Clicked: {data.count} times
			<button onClick={add}>+</button>
			<button onClick={sub}>-</button>

			<div>
				{_.store.storeB.data.msg}
				<button  onClick={_.store.storeB.changeMsg}>
				change storeB's msg
				</button>
			</div>
		</p>
	)
}, {
	useSelf: {
		storeA: ['count', 'adding'],
		storeB: ['msg']
	}
})

const storeA = new class Store {
	data = {
		count: 0,
		adding: false
	}
	sub = () => {
		this.data.count--
	}
	add = () => {
		this.data.count++
	}
}

const storeB = new class Store {
	data = {
		msg: 'abc'
	}
	changeMsg = () => {
		this.data.msg = 'bcd'
	}
}

render( <my-app /> , 'body', {
	storeA,
	storeB
})
