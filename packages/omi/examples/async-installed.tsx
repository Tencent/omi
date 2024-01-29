import { render, tag, Component, h } from '@/index'

@tag('o-appear')
class Appear extends Component {
  installed() {
    setTimeout(() => {
      console.log(this.classList)
    }, 0)
  }
  render() {
    return (
      <span>1</span>
    )
  }
}

@tag('my-app')
class MyApp extends Component {
  show = false

  async showAppear() {
    this.show = true
    this.update()
  }

  render() {
    if (!this.show) {
      return <div onClick={() => this.showAppear()}>click</div>
    }
    return (
      <o-appear class="aa bb cc">
      </o-appear>
    )
  }
}

render(<my-app />, document.body)