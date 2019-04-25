import { render, WeElement, define } from '../../src/omi'

define('todo-list', class extends WeElement {
  render(props) {
    return (
      <ul>
        {props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    )
  }
})

define('todo-app', class extends WeElement {
  static get data() {
    return {
      showList: null,
      items: null,
      text: null,
      firstName: null,
      lastName: null
    }
  }

  render(props, data, store) {
    return (
      <div>
        <h3>TODO by {store.data.fullName()}</h3>
        {store.data.showList && <todo-list items={store.data.items} />}
        <form onSubmit={this.handleSubmit}>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={store.data.text}
          />
          <button>Add #{store.data.items.length + 1}</button>
        </form>
      </div>
    )
  }

  handleChange = e => {
    this.store.data.text = e.target.value
  }

  handleSubmit = e => {
    e.preventDefault()
    this.store.add()
  }

  installed() {
    setTimeout(() => {
      this.store.rename()
    }, 2000)

    setTimeout(() => {
      this.store.data.items.push({ text: 'abc' })
    }, 4000)

    setTimeout(() => {
      this.store.data.items[2].text = 'changed'
    }, 6000)

    setTimeout(() => {
      this.store.data.items.splice(1, 1)
    }, 8000)

    setTimeout(() => {
      this.store.data.showList = false
    }, 10000)

    setTimeout(() => {
      this.store.data.showList = true
    }, 12000)
  }
})

const store = {
  data: {
    showList: true,
    items: [{ text: 'Omi', id: Date.now() }, { text: 'JSX', id: Date.now() }],
    text: '',
    firstName: 'dnt',
    lastName: 'zhang',
    fullName: function() {
      return this.firstName + this.lastName
    }
  },
  rename: function() {
    this.data.firstName = 'Dnt'
  },
  add: function() {
    if (!this.data.text.trim().length) {
      return
    }
    this.data.items.push({
      text: this.data.text,
      id: Date.now()
    })
    this.data.text = ''
  }
}

render(<todo-app />, 'body', store)
