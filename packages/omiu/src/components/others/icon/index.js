import { define, WeElement } from 'omi'
import css from './_index.css'
import path from './path'

define('o-icon', class extends WeElement {
  css() {
    return css
  }

  onClick = (e) => {
    this.props.onClick && this.props.onClick(e)
    e.stopPropagation()
  }

  render(pops) {
    const props = {}
    if (this.props.rotate) {
      props.class = 'rotate '
    }
    props.scale = this.props.scale || 2
    return (
      <i class={`o-icon ${this.props.class || ''}`} onClick={this.onClick}>
        <svg viewBox="0 0 1024 1024" {...props} data-icon="loading" width={props.scale+"em"} height={props.scale+"em"} fill={this.props.color} aria-hidden="true">
          <path d={path[this.props.type][this.props.isFill?1:0]||path[this.props.type][0]}></path>
        </svg>
      </i>
    )

  }
})
