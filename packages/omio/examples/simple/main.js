import { define, render, Component } from '../../src/omi'

define('my-hello', class extends Component {
  render() {
    //can get the parent's div style, can't get the h3's style
    return <div><h3> {this.props.name}</h3></div>
  }
})

define('my-app', class extends Component {
  
  css = `div{
      font-size:30px;
  }`

  install() {
    this.name = 'Omi'
  }

  handleTap = e => {
    this.name = 'Hello Omi !'
    this.update()
  }

  installed() {
    setTimeout(() => {
      this.name = 11
      this.update()
    }, 1000)
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
