import { define, WeElement, extractClass, classNames } from 'omi'
import css from './_index.css'
import path from './path'

define('o-icon', class extends WeElement {
  css() {
    return css
  }

  onClick = (e) => {
    this.props.onClick && this.props.onClick(e)
    //e.stopPropagation()
  }

  render() {
    const props = {}
    props.scale = this.props.scale || 2
    return (
      <i {...extractClass(this.props, 'o-icon')} onClick={this.onClick}>
        <svg viewBox="0 0 1024 1024" class={classNames({ 'rotate': this.props.rotate })} width={props.scale + "em"} height={props.scale + "em"} fill={this.props.color} aria-hidden="true">
          <path d={props.path ? props.path : (path[this.props.type][this.props.isFill ? 1 : 0] || path[this.props.type][0])}></path>
        </svg>
        {this.props.children && <div style={`color:${this.props.color || 'black'};`}>{this.props.children[0]}</div>}
      </i>
    )

  }
})
