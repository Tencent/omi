import { render, signal, tag, Component, h } from '@/index'

@tag('my-animal')
class Animal extends Component {
  static props = {
    name: String,
  }
  renderHead() {
    return <>this is a head.</>
  }
  renderLimbs() {
    return <>this is a limb.</>
  }
  renderBody() {
    return <>this is a body.</>
  }
  render() {
    return (
      <div>
        This is an animal.
        <slot name="type"></slot>
        {this.renderHead()}
        {this.renderLimbs()}
        {this.renderBody()}
      </div>
    )
  }
}

@tag('my-dog')
class Dog extends Animal {
  renderHead() {
    return (
      <>
        {super.renderHead()}
        <div>🐶</div>
      </>
    )
  }
  renderLimbs() {
    return <div>4 legs</div>
  }
  renderBody() {
    return <div>🐕</div>
  }
  render() {
    return (
      <>
        I am a dog.
        {super.render()}
      </>
    )
  }
}

render(<my-dog />, document.body)
