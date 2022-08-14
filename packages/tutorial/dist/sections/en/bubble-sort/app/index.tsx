import { tag, render, h, WeElement, classNames } from 'omi'
import Store from './store'
import css from './index.css'

@tag('my-element')
class MyElement extends WeElement {
  static css = css

  store: Store

  installed() {
    this.store.ui = this
  }

  render(prop, store) {
    return (
      <div>
        <div>
          {store.data.arr.map((item, index) => (
            <div class={classNames('bar', {
              'active': index === store.data.indexA || index === store.data.indexB
            })} style={{ height: item * 10 }}></div>
          ))}
        </div>

        <button disabled={store.data.sorting} onClick={store.sort}>Start Bubble Sort</button>
        <button style="margin-left: 5px" disabled={store.data.sorting} onClick={store.reset}>Reset</button>
      </div>
    )
  }
}

render(<my-element />, 'body', new Store)