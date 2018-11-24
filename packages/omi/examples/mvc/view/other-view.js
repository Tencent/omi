import { WeElement, define } from '../../../src/omi'
import vd from '../view-data/other'


define('other-view', class extends WeElement {
  static observe = true

  data = vd

  render() {

    return (
      <div>
        <h3>Other View</h3>
				<div>{vd.data.num}</div>
				<div>Todo List Length: {vd.data.length}</div>
      </div>
    )
  }

})
