import Omi from '../../src/index.js'

class TodoApp extends Omi.Component {
    constructor(data) {
      super(data);
      this.data = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <h3>TODO</h3>
          <TodoList items={this.data.items} />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              What needs to be done?
            </label>
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
      this.data.text =  ''
      this.update()
    }
  }
  
  class TodoList extends Omi.Component {
    render() {
      return (
        <ul>
          {this.data.items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      );
    }
  }
  
  Omi.render(<TodoApp />, 'body');