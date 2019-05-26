import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'

//@ts-ignore
import { theme } from '../theme.ts'

interface Props {
  path?: string,
  paths?: object,
  view?: number,
  scale?: number,
  color?: string,
  rotate?: boolean
}

interface Data {

}


@tag('m-row')
export default class Row extends WeElement<Props, Data>{
  static css = theme() + css

  static propTypes = {
    path: String,
    paths: Object,
    view: Number,
    scale: Number,
    color: String,
    rotate: Boolean
  }

  render(props) {
    return (
      <div {...extractClass(props, props.type === 'flex'?'flex':'block')}>
				{props.cols.map( (_,index) =><div class={`col col${_.span===undefined?_:_.span}`}><slot name={index}></slot></div>)}
			</div>
    )
  }
}
