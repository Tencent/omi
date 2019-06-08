import '../../src/transition-group/index.tsx'
import '../../src/transition/index.tsx'
import { define, WeElement, render, h } from 'omi'


define('my-app', class extends WeElement {

  static css = `
  .item-leave-to, .item-enter, .item-appear {
    opacity: 0;
    transform: translateX(15px);
  }

  .item-leave-active, .item-enter-active,.item-appear-active {
    transition: all 500ms ease-in;
  }
  
  `

  _id = 0

  items = [
    { _id: this._id++, text: 'Buy eggs' },
    { _id: this._id++, text: 'Pay bills' },
    { _id: this._id++, text: 'Invite friends over' },
    { _id: this._id++, text: 'Fix the TV' },
  ]

  toggle = () => {
    this.removed = false
    this.show = !this.show
    console.log(this.show)
    this.update()
  }
  onRemoved= () => {
    console.log(123)
    this.removed = true
  }

  show = true

  removed = false

  render() {
    const items = this.items
    return (
      <div style={{ marginTop: '2rem' }}>

        <h1>Transition</h1>
        <m-transition onRemoved={this.onRemoved} name="item" appear remove removed={this.removed} show={this.show}>
          <p>Hello m-transition</p>
        </m-transition>
        <br />
        <button onclick={this.toggle}>Toggle</button>

        <h1>Transition Group</h1>
        <ul style={{ marginBottom: '1rem' }}>
          <m-transition-group name="item" appear delay={200}>
            {items.map(({ _id, text }) =>
              <li key={_id}>
                <button
                  onClick={() => {
                    this.items = items.filter(item => item._id !== _id)
                    this.update()
                  }}>
                  &times;
                </button> {text}
              </li>
            )}
          </m-transition-group>
        </ul>
        <button
          onClick={() => {
            const text = prompt('Enter some text');
            if (text) {
              this.items.splice(1, 0, { _id: this._id++, text })
              this.update()
            }
          }}
        >
          Add Item
      </button>
      </div>
    )

  }
})
render(<my-app />, 'body')

