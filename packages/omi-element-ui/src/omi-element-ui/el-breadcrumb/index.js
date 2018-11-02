import { tag, WeElement } from 'omi'
import style from '../style/_breadcrumb.scss'

@tag('el-breadcrumb', true)
class ElBreadcrumb extends WeElement {
  css() {
    return style
  }

  install() {
    this.data.separator = this.props.separator
    this.data.separatorClass = this.props.separatorClass
    if (this.children.length > 0) {
      this.children[this.children.length - 1].setAttribute(
        'aria-current',
        'page'
      )
    }
  }

  render(props, data) {
    return (
      <div class="el-breadcrumb" aria-label="Breadcrumb">
        <slot />
      </div>
    )
  }
}
