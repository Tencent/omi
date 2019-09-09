import { render, WeElement, define, html } from '../../src/omi'

define("todo-list", _ => {
  return html`
    <ul>
      ${_.props.items.map(
        item => html`
        <li key=${item.id}>${item.text}</li>
      `
      )}
    </ul>
  `;
});

define("todo-app", class extends WeElement {
  constructor() {
    super();
    this.items = [];
    this.text = '';
  }

  render() {
    return html`
      <div>
        <h3>TODO</h3>
        <todo-list items=${this.items} />
        <form onSubmit=${this.handleSubmit.bind(this)}>
          <input
            onChange=${this.handleChange.bind(this)}
            value=${this.text}
          />
          <button>Add #${this.items.length + 1}</button>
        </form>
      </div>
    `;
  }

  handleChange(e) {
    this.text = e.target.value;
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.text.trim().length) {
      return;
    }
    this.items.push({
      text: this.text,
      id: Date.now()
    });
    this.text = "";
    this.update();
  }
});

render(<todo-app />, 'body')
