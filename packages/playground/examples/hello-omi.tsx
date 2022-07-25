@tag('hello-omi')
class extends WeElement {
  static css = `span { color: #07c160 }`

  render() {
    return (
      <p>Hello, <span>{this.props.msg}</span>!</p>
    )
  }
}

render(<hello-omi msg='Omi' />, 'body')