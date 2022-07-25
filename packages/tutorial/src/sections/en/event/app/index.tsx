import { tag, render, WeElement } from 'omi'

@tag('my-element')
class MyElement extends WeElement {
  count = 0

  onClick = () => {
    this.count++
    this.fire('count-changed', this.count)
    this.update()
  }

  render() {
    return (
      <>
        <span>{this.count}</span>
        <button onClick={this.onClick}>+1</button>
      </>
    )
  }
}

@tag('my-app')
class MyApp extends WeElement {
  evtDetail: number

  onCountChanged = (evt) => {
    this.evtDetail = evt.detail
    this.update()
  }

  render() {
    return (
      <>
        <div>evt.detail: {this.evtDetail}</div>
        <my-element onCountChanged={this.onCountChanged}></my-element>
      </>

    )
  }
}

render(<my-app />, 'body')