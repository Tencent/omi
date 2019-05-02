import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'


interface Props {
  onClick: (...arg: any) => {}
}

interface Data {

}

function attrToProp(ele, attrs) {
  if (ele.normalizedNodeName) return

  Object.keys(attrs).forEach(key => {
    const type = attrs[key]
    const val = ele.getAttribute(key)
    if (val !== null) {
      switch (type) {
        case String:
          ele.props[key] = val
          break
        case Number:
          ele.props[key] = Number(val)
          break
        case Boolean:
          ele.props[key] = true
        case Object:
          ele.props[key] = JSON.parse(val.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:([^\/])/g, '"$2":$4').replace(/'([\s\S]*?)'/g, '"$1"'))
          ele.removeAttribute(key)
          break
      }
    }
  })
}

@tag('m-icon')
export default class Icon extends WeElement<Props, Data>{
  static css = css

  static defaultProps = {
    scale: 2
  }

  onClick = e => {
    this.props.onClick && this.props.onClick(e)
    //e.stopPropagation()
  }

  render(props) {
    //兼容 web components 模式直接再 html 中使用 标签，而不使用omi render 函数
    attrToProp(this, {
      path: String,
      paths: Object,
      scale: Number
    })

    return (
      <i {...extractClass(props, 'm-icon')} onClick={this.onClick} >
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
              const attrs = { d: item.path, fill: props.color || 'black' }
              if (item.color) attrs.fill = item.color
              return <path {...attrs}></path>
            })
          ) : <path d={props.path} />}
        </svg>
        {props.children && (
          <div style={`color:${props.color || 'black'};`}>
            {props.children[0]}
          </div>
        )}
      </i>
    )
  }
}
