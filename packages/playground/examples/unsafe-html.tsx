const markup = '<h3>Some HTML to render.</h3>'

@tag('my-element')
class extends WeElement {
  render() {
    return <div unsafeHTML={markup}></div>
  }
}

render(<my-element />, 'body')