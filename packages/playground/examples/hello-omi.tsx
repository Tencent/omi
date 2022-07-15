@tag('hello-omi')
class extends WeElement {
  render() {
    return (
      <div>Hello, {this.props.msg}</div>
    )
  }
}

render(<hello-omi msg='Omi' />, 'body')