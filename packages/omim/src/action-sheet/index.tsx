import { tag, WeElement, classNames, h, render } from 'omi'
import * as css from './index.scss'


interface Props {
  items: any[],
  actions?: any[],
  onClose?: (evt) => void,
  show?: boolean,
  type: 'ios' | 'android'
}

@tag('m-action-sheet')
class ActionSheet extends WeElement<Props, {}> {
  static defaultProps = {
    type: '',
    items: [],
    actions: [],
    show: false
  }

  static propTypes = {
    type: String,
    items: Object,
    actions: Object,
    show: Boolean
  }

  static css = css

  renderMenuItem() {
    return this.props.items.map((menu, idx) => {
      if (typeof menu === 'string') {
        return <div key={idx} onClick={_ => this.menuClick(menu)} className='m-actionsheet__cell'>
          {menu}
        </div>
      }
      const { label, className, ...others } = menu
      const cls = classNames({
        'm-actionsheet__cell': true,
        [className]: className
      })

      return (
        <div key={idx} {...others} onClick={_ => this.menuClick(menu)} className={cls}>
          {label}
        </div>
      )
    })
  }

  actionClick = (item) => {
    this.fire('actionclick', item)
  }


  menuClick = (item) => {
    this.fire('itemclick', item)
  }

  renderActions() {
    return this.props.actions.map((action, idx) => {
      const { label, className, ...others } = action
      const cls = classNames({
        'm-actionsheet__cell': true,
        [className]: className
      })

      return (
        <div key={idx} onClick={_ => this.actionClick(action)} {...others} className={cls}>
          {label}
        </div>
      )
    })
  }

  handleMaskClick = () => {
    this.fire('close')
  }

  render() {
    const { show, type, onClose, items, actions, ...others } = this.props
    const cls = classNames({
      'm-actionsheet': true,
      'm-actionsheet_toggle': show
    })

    let styleType = type ? type : 'ios'

    return (
      <div className={styleType === 'android' ? 'm-skin_android' : ''}>
        <div
          class="mask"
          style={{ display: show ? 'block' : 'none' }}
          onClick={this.handleMaskClick}
        />
        <div className={cls} {...others}>
          <div className="m-actionsheet__menu">{this.renderMenuItem()}</div>
          <div className="m-actionsheet__action">{this.renderActions()}</div>
        </div>
      </div>
    )
  }
}

let dom

export default function actionSheet(options) {
  if (dom) {
    document.body.removeChild(dom)
    dom = null
  }

  dom = render(<m-action-sheet
    items={options.items}
    onItemClick={options.onItemClick}
    actions={options.ios? [{label:options.cancel?options.cancel:'Cancel'}]:[]}
    onClick={close}
    show
    type={options.ios ? 'ios' : 'android'}
  />, 'body')
}

function close() {
  if (dom) {
    document.body.removeChild(dom)
    dom = null
  }
}