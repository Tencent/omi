import Omi from '../../src/index.js'

class TodoList extends Omi.Component {
    render() {
        return (
            <ul>
                {this.data.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        )
    }
}
Omi.tag('todo-list', TodoList)

class TodoApp extends Omi.Component {
    constructor(data) {
        super(data)
        this.data = {items: [{id: 1, text: 'Omi'}, {id: 2, text: 'AlloyTeam'}], text: ''}
    }

    handleSubmit(e) {
        e.preventDefault()
        this.data.items.push({id: this.data.items.length + 1, text: this.data.text})
        this.data.text = ''
        this.update()
    }

    handleChange(e) {
        this.data.text = e.target.value
    }

    render() {
        return <div>
            <h3>TODO</h3>
            <todo-list items={this.data.items}></todo-list>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input onChange={this.handleChange.bind(this)} value={this.data.text} />
                <button>{'Add #' + (this.data.items.length + 1)}</button>
            </form>
        </div>
    }
}

Omi.render(new TodoApp(), 'body')
