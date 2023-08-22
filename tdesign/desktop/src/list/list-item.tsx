import { OmiProps, WeElement, h, tag, classNames } from 'omi'
import style from './style'
import { ListItemProps } from './types'
import { TdClassNamePrefix } from '../utils/clsx'
import './list-item-meta'

const ListItemClassNamePrefix = (className: string) => TdClassNamePrefix('list-item__') + className

@tag('t-list-item')
export default class ListItem extends WeElement<ListItemProps> {
  static css = style

  static defaultProps = {}

  static propTypes = {
    action: String,
    children: String,
    content: String,
    onClick: Function,
  }

  installed() {
    console.log(this.props)
  }
  onClick = () => {
    console.log(111)
  }
  render(props: OmiProps<ListItemProps, any>, store: any) {
    const { action, children, content } = props

    return (
      <>
        <li class={classNames(TdClassNamePrefix('list-item'))} onClick={this.onClick()}>
          <div class={classNames(TdClassNamePrefix('list-item-main'))}>
            <slot></slot>
            <slot name="action" class={classNames(ListItemClassNamePrefix('action'))}></slot>
          </div>
        </li>
      </>
    )
  }
}
