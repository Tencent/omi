import { define, WeElement, getHost } from 'omi'
import style from './_index.css'

define('ow-cells', class extends WeElement {
  css() {
    return style + getHost(this).css()
  }

  render() {
    return (
      <div class="weui-cells">
        <slot></slot>
      </div>
    )
  }
})


define('ow-cell', class extends WeElement {
  css() {
    return style
  }

  render() {
    return (
      <a class="weui-cell weui-cell_access" href="javascript:;">
        <div class="weui-cell__bd">
          <p><slot></slot></p>
        </div>
        <div class="weui-cell__ft">
        </div>
      </a>
    )
  }
})