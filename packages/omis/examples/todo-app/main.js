import { render, h } from '../../src/omis'

const TodoList = props => (
	h('ul', {}, props.items.map(
		item => h('li', { key: item.id }, item.text)
	))
)

// <ul>
// 	{props.items.map(
// 		item => <li key={item.id}>{item.text}</li>
// 	)}
// </ul>

const TodoApp = (props, store) => (
	<div>
		<h3>TODO</h3>
		<TodoList items={store.items} />
		<form onSubmit={store.handleSubmit}>
			<input onChange={store.handleChange} value={store.text} />
			<button>Add #{store.items.length + 1}</button>
		</form>
	</div>
)

TodoApp.store = _ => ({
	items: [],
	text: '',
	handleChange(e) {
		this.text = e.target.value
	},

	handleSubmit(e) {
		e.preventDefault()
		if (!this.text.trim().length) {
			return
		}
		this.items.push({
			text: this.text,
			id: Date.now()
		})
		this.text = ""
		this.update()
	}
}
)

render(<TodoApp></TodoApp>, 'body')
