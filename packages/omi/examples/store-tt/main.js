import { render, define, h } from '../../src/omi'

const store = {
	data: {
		count: 1
	},
	done: [],
	undone: []
}

store.sub = () => {
	store.data.count--
}

store.add = () => {
	store.data.count++
}

store.reset = () => {
	store.data.count = 1
}

store.redo = () => {
	store._commit(store.undone.pop(), true)
}

store.undo = () => {
	store.undone.push(store.done.pop())
	store.reset()
	store.done.forEach(action => {
		store._commit(action)
	})
}

store._commit = (action, record) => {
	if (record) store.done.push(action)
	store.exec(action)
}

store.commit = (action) => {
	store.undone.length = 0
	store.done.push(action)
	store.exec(action)
}

store.exec = (action) => {
	switch (action) {
		case 'add':
			store.add()
			break
		case 'sub':
			store.sub()
			break
	}
}

define('my-counter', _ =>
	<h.f>
		<button disabled={!_.store.done.length} onClick={_.store.undo}>undo</button>
		<button disabled={!_.store.undone.length} onClick={_.store.redo}>redo</button>
		<br/>
		<button onClick={() => _.store.commit('sub')}>-</button>
		<span>{_.store.data.count}</span>
		<button onClick={() => _.store.commit('add')}>+</button>
	</h.f>
	, {
		use: ['count']
	})

render(<my-counter />, 'body', store)
