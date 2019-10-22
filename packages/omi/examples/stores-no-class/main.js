import { define, render } from '../../src/omi'
import store from './store'

define('my-app', _ => {
	const data = _.store.counterStore.data

	const { add, sub } = _.store.counterStore
	return (
		<p>
			Clicked: {data.count} times
			<button onClick={add}>+</button>
			<button onClick={sub}>-</button>

			<div>
				{_.store.msgStore.data.msg}
				<button  onClick={_.store.msgStore.changeMsg}>
				change storeB's msg
				</button>
			</div>
		</p>
	)
}, {
	useSelf: {
		counterStore:['count'],
		msgStore: ['msg']
	}
})

render( <my-app /> , 'body', store)
