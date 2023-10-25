import { render, signal, tag, Component, h } from '@/index'



@tag('aa-demo')
class AADemo extends Component {
  static css = 'span { color: red; }'

  render() {
    return (
      <>

        <slot name='bc'></slot>
        <slot></slot>
      </>
    )
  }
}


@tag('my-el')
class myel extends Component {
  static css = 'span { color: red; }'

  render() {
    return (
      <>

        <div>myel</div>
      </>
    )
  }
}

@tag('my-el2')
class myel2 extends Component {
  static css = 'span { color: red; }'

  render() {
    return (
      <>

        <div>myel2</div>
      </>
    )
  }
}



@tag('my-app')
class CounterDemo extends Component {
  static css = 'span { color: red; }'
  tagName = 'div'
  sub() {

    this.show = true
    this.update()
  }

  render() {
    if (this.show) {
      return (
        <aa-demo>
          <h2 slot='bc'>sfsdaf</h2>
          <my-el2 onClick={() => this.sub()}>click me</my-el2>
        </aa-demo>
      )
    }
    return (
      <aa-demo>
        <my-el onClick={() => this.sub()}>click me!!!</my-el>
      </aa-demo>
    )
  }
}



render(<my-app />, document.body)