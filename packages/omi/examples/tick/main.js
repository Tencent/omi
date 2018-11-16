import { render, WeElement, define, tick, nextTick } from '../../src/omi'

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
  static observe = true

  static get data() {
    return { items: [], a: { b: 1 }, text: '' }
  }
  install() {
    tick(() => {
      console.log('tick')
    })

    tick(() => {
      console.log('tick2')
    })
  }

  beforeRender() {
    nextTick(() => {
      console.log('nextTick')
    })

    // don't using tick in beforeRender
    // tick(() => {
    //   console.log(Math.random())
    // })
  }

  installed() {
    console.log('installed')
  }

  render() {
    this.data.a = { c: 2 }
    console.log('render')
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
          <button>Add #{this.data.items.length + 1}</button>
        </form>
      </div>
    )
  }

  handleChange = e => {
    this.data.text = e.target.value
  }

  handleSubmit = e => {
    e.preventDefault()
    if (!this.data.text.trim().length) {
      return
    }
    this.data.items.push({
      text: this.data.text,
      id: Date.now()
    })
    this.data.text = ''
  }
})

render(<todo-app />, 'body')
