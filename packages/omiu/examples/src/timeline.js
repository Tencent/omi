import { WeElement, define, render } from 'omi'
import '../../src/equal-space'
import '../../src/badge'
import '../../src/icon'
define('my-app', class extends WeElement {
  render() {
    return (
      <o-equal-space>
        <o-badge number={8}>
          <o-icon type="chat" isFill color="#07C160" />
        </o-badge>

        <o-badge number={99}>
          <o-icon type="pay" isFill color="#07C160" />
        </o-badge>

        <o-badge>
          <o-icon type="github" isFill color="black" />
        </o-badge>
      </o-equal-space>
    )
  }
})

render(<my-app />, 'body')
