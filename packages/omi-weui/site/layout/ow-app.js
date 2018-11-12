import '../common/css/reset.css'
import '../common/css/index.css'

import { define, WeElement } from 'omi'
import './header/header'
import './mainer/mainer'

define('ow-app', class extends WeElement {
  render() {
    return (
      <div className="page">
        <ow-header />
        <ow-mainer />
      </div>
    )
  }
})
