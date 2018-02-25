import TodoList from './todo-list.js'

class TodoApp extends Omi.Component {
    constructor(data) {
        super(data)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.$store.add(this.$store.text)
        this.$store.text = ''
    }

    handleChange(e) {
        this.$store.text = e.target.value
    }

    render() {
        return <div>
            <h3>TODO</h3>
            <TodoList></TodoList>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input onChange={this.handleChange.bind(this)} value={this.$store.text} />
                <button>{'Add #' + (this.$store.items.length )}</button>
            </form>
        </div>
    }
}

export default TodoApp