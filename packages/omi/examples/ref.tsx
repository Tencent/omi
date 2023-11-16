import { render, tag, Component, h, bind, createRef } from '@/index'

@tag('counter-demo')
class CounterDemo extends Component {
  count: number = 0

  static css = 'span { color: red; }'

  @bind
  add() {
    this.count++
    this.update()

  }

  installed() {
    const p = document.createElement('p')
    p.textContent = 'hello'
    // 更新后消失
    this.refSpan.current.appendChild(p)
  }

  refSpan = createRef()

  render() {
    return (
      <>
        <span>{this.count}  <button onClick={this.add}>+</button></span>
        <div>
          <div ref={this.refSpan}></div>
        </div>
      </>
    )
  }
}

render(<counter-demo />, document.body)