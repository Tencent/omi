import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'


interface Props {
  path?: string,
  paths?: object,
  scale?: number
}

interface Data {

}


@tag('m-icon')
export default class Icon extends WeElement<Props, Data>{
  static css = css

  static defaultProps = {
    scale: 2
  }

  static propTypes = {
    path: String,
    paths: Object,
    scale: Number
  }

  render(props) {
    return (
      <i {...extractClass(props, 'm-icon')} >
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
