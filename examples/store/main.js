import { render, WeElement, define } from '../../src/omi'

class TodoList extends WeElement {
    render(props) {
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
        return {
            items: [],
            text: '',
            firstName: 'dnt',
            lastName: 'zhang',
        }
    }

    render() {
        const data = this.store.data
        return (
            <div>
                <h3>TODO by {data.fullName()}</h3>
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
        e.preventDefault()
        this.store.add()
    }

    installed() {
        setTimeout(() => {
            this.store.rename()
        }, 1000)
    }
}

define('todo-app', TodoApp)

const store = {
    data: {
        items: [],
        text: '',
        firstName: 'dnt',
        lastName: 'zhang',
        fullName: function () {
            return this.firstName + this.lastName
        }
    },
    rename: function () {
        this.data.firstName = 'Dnt'
        this.update()
    },
    add: function () {
        if (!this.data.text.trim().length) {
            return;
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