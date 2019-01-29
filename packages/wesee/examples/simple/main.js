import { define, render, Component } from '../../src/wesee'

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

  handleTap = e => {
    this.name = 'Hello Omi !'
    this.update()
  }

  dynamicCss() {
    return `h3{
                    cursor:pointer;
                    color: ${Math.random() > 0.5 ? 'red' : 'green'};
                }`
  }

  installed() {
    setTimeout(() => {
      this.name = 11
      this.update()
    }, 1000)
  }
  css() {
    return `div{
                    font-size:30px;
                }`
  }

  render() {
    return (
      <div>
        <div onTap={this.handleTap}>tap me</div>
        <my-hello name={this.name} />
      </div>
    )
  }
})

render(<my-app />, 'body')
