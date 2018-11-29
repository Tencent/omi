import { define, render, WeElement } from 'omi'
import '../../src/pagination'

define('my-app', class extends WeElement {
  onChange = evt => {
    console.log('page' + evt.detail.index)
  }

  render() {
    return (
      <div>
        <o-pagination
          total={125}
          currentPage={2}
          pageSize={10}
          onChange={this.onChange}
        />
      </div>
    )
  }
})

render(<my-app />, 'body')
