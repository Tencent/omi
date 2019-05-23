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


@tag('m-tree')
export default class Tree extends WeElement<Props, Data>{
  static css = theme() + css

  static defaultProps = {
    view: 1024,
    scale: 2
  }

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
      <div style='width:100px;height:100px;    position: relative;'>
      <div class='my-surface' style='width:100px;height:100px;'>
</div>
      </div>
    )
  }
}
