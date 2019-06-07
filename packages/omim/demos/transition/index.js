import '../../src/transition-group/index.tsx'
import { define, WeElement, render, h } from 'omi'


define('my-app', class extends WeElement {

  static css = `
  .item-enter {
    opacity: 0;
  }
  .item-enter-active {
    transition: opacity 500ms ease-in;
  }

  .item-enter-to {
    opacity: 1;
  }


  .item-leave {
    opacity: 1;
  }
  .item-leave-active {
    transition: opacity 500ms ease-in;
  }

  .item-leave-to {
    opacity: 0;
  }
  `

  _id = 0

  items = [
    { _id: this._id++, text: 'Buy eggs' },
    { _id: this._id++, text: 'Pay bills' },
    { _id: this._id++, text: 'Invite friends over' },
    { _id: this._id++, text: 'Fix the TV' },
  ]



  render() {
    const items = this.items
    return (
      <div style={{ marginTop: '2rem' }}>
        <ul style={{ marginBottom: '1rem' }}>
          <m-transition-group name="item">
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
              this.items.push({ _id: this._id++, text })
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

