import { define, render, WeElement } from 'omi'
import '../../src/pagination'

define('my-app', class extends WeElement {

  render() {
    return (
      <div>
        <o-pagination total={125} currentPage={2} pageSize={10} />
      </div>
    )
  }
})

render(<my-app />, 'body')
