import { define, WeElement } from 'omi'
import style from './_index.css'
import '../../weui/icon'

define('icon-panel', class extends WeElement {
  css() {
    return style
  }

  render() {
    return (
      <div>
        <ow-icon size="big" />
        <ow-icon type="info" size="big" />
        <ow-icon type="warn" size="big" />
        <ow-icon />
        <ow-icon type="success-circle" />
        <ow-icon type="success-no-circle" />
        <ow-icon type="info" />
        <ow-icon type="waiting" />
        <ow-icon type="waiting-circle" />
        <ow-icon type="circle" />
        <ow-icon type="warn" />
        <ow-icon type="info-circle" />
        <ow-icon type="cancel" />
        <ow-icon type="clear" />
        <ow-icon type="search" />
      </div>
    )
  }
})