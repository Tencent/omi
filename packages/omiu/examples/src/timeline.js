import { WeElement, define, render } from 'omi'
import '../../src/nav'


define('my-app', class extends WeElement {

  navIndex = 0

  navChange = index => {
    this.navIndex = index
    this.update()
  }

  render() {
    return (
      <o-nav onChange={this.navChange}>
        <item active={this.navIndex === 0}>我的项目</item>
        <item active={this.navIndex === 1}>所有项目</item>
      </o-nav>
    )
  }
})

render(<my-app />, 'body')
