import { tag, WeElement } from 'omi'
import '../style/global/index.css'
import style from '../style/_breadcrumb-item.scss'

@tag('el-breadcrumb-item', true)
class ElBreadcrumbItem extends WeElement {
  css() {
    return style
  }

  install() {
    this._initData()

    if (this.parentNode.nodeName === 'EL-BREADCRUMB') {
      for (let i = 0, len = this.parentNode.childNodes.length; i < len; i++) {
        if (this.parentNode.childNodes[i] === this) {
          if (i === len - 1) {
            this.data.position = 'last'
          }
          break
        }
      }
    }
  }

  onClick = evt => {
    let { to, goto, replace } = this.props
    if (to && goto) {
      goto(to.path)
    }
  }

  _initData() {
    if (this.parentNode.nodeName === 'EL-BREADCRUMB') {
      this.data.separator = this.parentNode.data.separator || '/'
      this.data.separatorClass = this.parentNode.data.separatorClass || ''
    }
  }

  render(props, data) {
    let separatorStr = 'el-breadcrumb__separator'
    let innerClassStr = 'el-breadcrumb__inner'
    let { to } = props
    let { separator, separatorClass } = data

    if (separatorClass) {
      separatorStr += ' el-icon-' + separatorClass
    }

    if (typeof data.position === 'string') {
      separatorStr += ' ' + data.position
    }

    if (to) {
      innerClassStr += ' is-link'
    }

    return (
      <span class="el-breadcrumb__item">
        <span class={innerClassStr} onClick={this.onClick}>
          <slot />
        </span>
        {separatorClass ? (
          <i class={separatorStr} />
        ) : (
          <span v-else class={separatorStr} role="presentation">
            {separator}
          </span>
        )}
      </span>
    )
  }
}
