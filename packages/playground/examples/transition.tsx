@tag('my-app')
class extends WeElement {

  list = ['ItemA', 'ItemB', 'ItemC', 'ItemD', 'ItemE']

  static css = `
    .fade-leave-to,
    .fade-enter {
      opacity: 0;
      transform: translateX(15px);
    }

    .fade-leave-active,
    .fade-enter-active {
      transition: all 500ms ease-in;
    }`

  toggle = () => {
    this.transition.toggle();
  }

  render() {
    return (
      <>
        <o-transition ref={e => this.transition = e} appear name="fade">
          <div>OMI</div>
        </o-transition>
        <button onClick={this.toggle}>Toggle</button>
        <ul>
          {this.list.map((item, index) => (
            <o-transition
              appear={true}
              name='fade'
              delay={index * 300}>
              <li>{item}</li>
            </o-transition>
          ))}

        </ul >
      </>
    )
  }
}

render(<my-app />, 'body')
