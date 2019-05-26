import { tag, WeElement, classNames, h } from 'omi'
import * as css from './index.scss'


interface Props {
	menus: any[],
	actions?: any[],
	onClose?: (evt)=>void,
	show?: boolean,
	type: 'ios'|'android'
}

@tag('m-action-sheet')
export default class ActionSheet extends WeElement<Props, {}> {
  static defaultProps = {
    type: '',
    menus: [],
    actions: [],
		show: false
  }

  static css = css

  renderMenuItem() {
    return this.props.menus.map((menu, idx) => {
      const { label, className, ...others } = menu
      const cls = classNames({
        'm-actionsheet__cell': true,
        [className]: className
      })

      return (
        <div key={idx} {...others} className={cls}>
          {label}
        </div>
      )
    })
  }

  renderActions() {
    return this.props.actions.map((action, idx) => {
      const { label, className, ...others } = action
      const cls = classNames({
        'm-actionsheet__cell': true,
        [className]: className
      })

      return (
        <div key={idx} {...others} className={cls}>
          {label}
        </div>
      )
    })
  }

  handleMaskClick = e => {
    if (this.props.onClose) this.props.onClose(e)
  }

  render() {
    const { show, type, onClose, menus, actions, ...others } = this.props
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
