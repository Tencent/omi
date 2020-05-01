import { tag, WeElement, classNames, h } from 'omi'
import * as css from './index.scss'


interface Props {
  type: string,
  menus: any[],
  actions: any[],
  show: boolean
}


@tag('o-action-sheet')
export default class ActionSheet extends WeElement<Props> {
  static css = css

  static defaultProps = {
    type: '',
    menus: [],
    actions: [],
    show: false
  }

  static propTypes = {
    type: String,
    menus: Array,
    actions: Array,
    show: Boolean
  }


  renderMenuItem() {
    return this.props.menus.map((menu, idx) => {
      const { label, className, ...others } = menu
      const cls = classNames({
        'o-actionsheet__cell': true,
        [className]: className
      })

      return (
        <div key={idx} onClick={_ => {
          this.hide()
          this.fire('item-click', menu)
        }} {...others} class={cls}>
          {label}
        </div>
      )
    })
  }

  show() {
    this.updateProps({
      show: true
    })
  }

  hide() {
    this.updateProps({
      show: false
    })
  }

  renderActions() {
    return this.props.actions.map((action, idx) => {
      const { label, className, ...others } = action
      const cls = classNames({
        'o-actionsheet__cell': true,
        [className]: className
      })

      return (
        <div key={idx} {...others} onClick={_ => {
          this.hide()
          this.fire('item-click', action)
        }} className={cls}>
          {label}
        </div>
      )
    })
  }

  handleMaskClick = e => {
    this.hide()
    this.fire('close')
  }

  render() {
    const { show, type, menus, actions, ...others } = this.props
    const cls = classNames({
      'o-actionsheet': true,
      'o-actionsheet_toggle': show
    })

    let styleType = type ? type : 'ios'

    return (
      <div className={styleType === 'android' ? 'o-skin_android' : ''}>
        <div
          class="mask"
          style={{ display: show ? 'block' : 'none' }}
          onClick={this.handleMaskClick}
        />
        <div className={cls} {...others}>
          <div className="o-actionsheet__menu">{this.renderMenuItem()}</div>
          <div className="o-actionsheet__action">{this.renderActions()}</div>
        </div>
      </div>
    )
  }
}
