import { define, render, Component } from '../../src/omi'

define('my-hello', class extends Component {
  render() {
    //can get the parent's div style, can't get the h3's style
    return <div><h3> {this.props.name}</h3></div>
  }
})

define('my-app', class extends Component {
  install() {
    this.name = 'Omi'
  }

  handleClick = e => {
    this.name = 'Hello Omi !'
    this.update()
  }

  css() {
    return `h3{
                    cursor:pointer;
                    color: ${Math.random() > 0.5 ? 'red' : 'green'};
                }`
  }

  staticCss() {
    return `div{
                    font-size:30px;
                }`
  }

  render() {
    return (
      <div>
        <my-hello name={this.name} />
        <h3 onclick={this.handleClick}>Scoped css and event test! click me!</h3>
      </div>
    )
  }
})

render(<my-app />, 'body')
