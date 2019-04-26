import { define, render, Component } from '../../src/omi'

define('my-hello', class extends Component {
  handleClick = e => {
    this.fire('myevent', { a: 2 })
  }

  render() {
    return <h3 onclick={this.handleClick}> {this.props.name}</h3>
  }
})

define('my-app', class extends Component {
  install() {
    this.name = 'Omi'
  }

  onMyEvent = e => {
    console.log(e.detail)
  }

  render() {
    return (
      <div>
        <my-hello onMyEvent={this.onMyEvent} name={this.name} />
      </div>
    )
  }
})

render(<my-app />, 'body')
