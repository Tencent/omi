import { tag, render, WeElement } from '../../src/omi'

@tag('hello-element')
class HelloElement extends WeElement {
  render(props) {
    const { count, num } = props
    return [
      <div>Hello</div>,
      <div>Element</div>,
      <div>{count}</div>,
      <div>{num}</div>
    ]
  }
}

@tag('my-app')
class MyApp extends WeElement {
  data = {
    count: 1,
    list: [0]
  }
  render() {
    this.data.map((item, index) => {
      return <hello-element key={index} num={item} />
    })
  }

  installed() {
    setTimeout(() => {
      this.data.count++
      this.data.list.push(1)
      this.update()
    })
  }
}

render(<my-app />, 'body')
