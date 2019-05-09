import { define, WeElement, extractClass, classNames } from 'omi'
import css from './_index.css'
import path from './path'

define('o-icon', class extends WeElement {
  static css = css

  static defaultProps = {
    scale: 2
  }

  onClick = e => {
    this.props.onClick && this.props.onClick(e)
    //e.stopPropagation()
  }

  render(props) {
    const style = { style: props.style }
    return (
      <i {...extractClass(props, 'o-icon')} {...style} onClick={this.onClick}>
        <svg
          viewBox="0 0 1024 1024"
          class={classNames({ rotate: props.rotate })}
          width={props.scale + 'em'}
          height={props.scale + 'em'}
          fill={props.color}
          aria-hidden="true"
        >
          {props.paths ? (
            props.paths.map(item => {
              const attrs = { d: item.path }
              if (item.color) attrs.fill = item.color

              return <path {...attrs}></path>
            })
          ) : <path
              d={
                props.path
                  ? props.path
                  : path[props.type][props.isFill ? 1 : 0] || path[props.type][0]
              }
            />}

        </svg>
        {props.children && (
          <div style={`color:${props.color || 'black'};`}>
            {props.children[0]}
          </div>
        )}
      </i>
    )
  }
})
