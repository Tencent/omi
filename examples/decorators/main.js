import { tag, WeElement, render } from '../../src/omi'

@tag('todo-list', true)
class TodoList extends WeElement {
    render(props) {
        return (
            <ul>
                {props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        )
    }
}

@tag('todo-app')
class TodoApp extends WeElement {
    static get data() {
        return {
            items: [],
            text: ''
        }
    }

    render(props, data) {
        return (
            <div>
                <h3>TODO</h3>
                <todo-list items={data.items} />
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        value={data.text}
                    />
                    <button>
                        Add #{data.items.length + 1}
                    </button>
                </form>
            </div>
        )
    }

    handleChange = (e) => {
        this.store.data.text = e.target.value
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.store.add()
    }
}

const store = {
    data: {
        items: [],
        text: ''
    },
    add: function () {
        if (!this.data.text.trim().length) {
            return
        }
        this.data.items.push({
            text: this.data.text,
            id: Date.now()
        })
        this.data.text = ''
        this.update()
    }
}

render(<todo-app></todo-app>, 'body', store)