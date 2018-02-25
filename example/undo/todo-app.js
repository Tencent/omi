import TodoList from './todo-list.js'

class TodoApp extends Omi.Component {
    constructor(data) {
        super(data)
        this.undo = this.undo.bind(this)
        this.redo = this.redo.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
        this.handleChange= this.handleChange.bind(this)

    }

    handleSubmit(e) {
        e.preventDefault()
        const text = this.$store.text
        this.$store.text = ''
        this.$store.add(text)
    }

    handleChange(e) {
        this.$store.text = e.target.value
    }

    undo(){
        this.$store.undo()
    }

    redo(){
        this.$store.redo()
    }



    render() {
        return <div>
            <h3>TODO <button onClick={this.undo}>Undo</button><button onClick={this.redo}>Redo</button></h3>
            <TodoList></TodoList>

            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} value={this.$store.text} />
                <button>{'Add #' + (this.$store.items.length )}</button>

            </form>
        </div>
    }
}

export default TodoApp