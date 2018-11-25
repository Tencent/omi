import { WeElement, define } from '../../../src/omi'
import vd from '../view-data/other'
import { random } from '../controller/other'

define('other-view', class extends WeElement {
  static observe = true

  data = vd

  onClick = () => {
    random()
  }

  render() {
    return (
      <div>
        <h3>Other View</h3>
        <div>{vd.data.num} </div>
        <button onClick={this.onClick}>random</button>
        <div>Todo List Length: {vd.data.length}</div>
      </div>
    )
  }
})
