@tag('hello-omi')
class extends WeElement {
  static css = `p { color: #07c160 } `
  render() {
    return (
      <p>Hello, {this.props.msg}</p>
    )
  }
}

render(<hello-omi msg='Omi' />, 'body')