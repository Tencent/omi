import { render, WeElement } from '../../src/omi'

class TodoList extends WeElement {
    render(props) {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        );
    }
}

customElements.define('todo-list', TodoList)

class TodoApp extends WeElement {
    constructor() {
        super();
        this.data = { items: [], text: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <h3>TODO</h3>
                <todo-list items={this.data.items} />
                <form onSubmit={this.handleSubmit}>
                    <input
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.data.text}
                    />
                    <button>
                        Add #{this.data.items.length + 1}
                    </button>
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.data.text = e.target.value 
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.data.text.length) {
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

customElements.define('todo-app', TodoApp)


render(<todo-app></todo-app>, 'body')