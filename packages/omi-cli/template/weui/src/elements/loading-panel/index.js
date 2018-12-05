import { define, WeElement } from 'omi'
import style from './_index.css'
import '../../weui/loading'

define('loading-panel', class extends WeElement {
  css() {
    return style
  }

  render() {
    return (
      <div>
        <ow-loading size="40px" />
      </div>
    )
  }
})