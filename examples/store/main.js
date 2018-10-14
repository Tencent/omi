import { render, WeElement, define } from '../../src/omi'

class TodoList extends WeElement {
    render(props) {
        console.error(this.store)
        return (
            <ul>
                {props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        );
    }
}

define('todo-list', TodoList)

class TodoApp extends WeElement {
    static get data() {
        return { items: [], text: '' }
    }

    render() {
        const data = this.store.data
        return (
            <div>
                <h3>TODO</h3>
                <todo-list items={data.items} />
                <form onSubmit={this.handleSubmit}>
                    <input
                        id="new-todo"
                        onChange={this.handleChange}
                        value={data.text}
                    />
                    <button>
                        Add #{data.items.length + 1}
                    </button>
                </form>
            </div>
        );
    }

    handleChange = (e) => {
        this.store.data.text = e.target.value
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.store.data.text.length) {
            return;
        }
        this.store.data.items.push({
            text: this.store.data.text,
            id: Date.now()
        })
        this.store.data.text = ''
        this.update()
    }
}

define('todo-app', TodoApp)

const store = { data: { items: [], text: '' } }
render(<todo-app></todo-app>, 'body', store)