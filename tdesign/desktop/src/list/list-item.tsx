import { OmiProps, WeElement, h, tag, classNames } from 'omi'
import style from './style/index'
import { ListItemProps } from './types'
import { TdClassNamePrefix } from '../utils'
import './list-item-meta'

const ListItemClassNamePefix = (className: string) => TdClassNamePrefix('list-item__') + className

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

  install() {
    // console.log(this.props)
  }

  handleClick(e: MouseEvent) {
    console.log(e)
  }

  render(props: OmiProps<ListItemProps, any>, store: any) {
    const { action, children, content } = props

    const actionElement = action && <ul class={classNames(ListItemClassNamePefix(`action`))}>{action}</ul>

    return (
      <>
        <li class={classNames(TdClassNamePrefix('list-item'))} onClick={this.handleCilck}>
          <div class={classNames(TdClassNamePrefix('list-item-main'))}>
            {children}
            {action && actionElement}
          </div>
        </li>
      </>
    )
  }
}
