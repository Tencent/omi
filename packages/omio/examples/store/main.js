import { define, render, Component } from '../../src/omi'

define('my-hello', class extends Component {

  render() {
    return <div>{this.store.name}</div>
  }
})

define('my-app', class extends Component {

  handleClick = () => {
    this.store.rename('Hello Omi !')
    this.update()
  }

  render() {
    return (
      <div>
        <my-hello
          ref={c => {
            this.hello = c
          }}
        />
        <button onclick={this.handleClick}>
          Click me to call this.store.rename('Hello Omi !'){' '}
        </button>
      </div>
    )
  }
})


render(<my-app />, document.body, {
  name: 'abc',
  rename: function (name) {
    this.name = name
  }
})
