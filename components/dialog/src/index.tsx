import { tag, WeElement, classNames, h } from 'omi'
import * as css from './index.scss'

import '@omiu/transition'

interface Props {
  type: string,
  menus: any[],
  actions: any[],
  visible: boolean
}


@tag('o-dialog')
export default class Dialog extends WeElement<Props> {
  static css = css

  static defaultProps = {
    type: '',
    menus: [],
    actions: [],
    visible: false
  }

  static propTypes = {
    type: String,
    menus: Array,
    actions: Array,
    visible: Boolean
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

  open() {

    this.updateProps({
      visible: true
    })

    this.rootNode.childNodes[0].enter()
    //this.rootNode.childNodes[1].enter()
  }

  handleMaskClick = e => {
    this.hide()
    this.fire('close')
  }

  close = () => {
    this.rootNode.childNodes[0].leave()
    //this.rootNode.childNodes[1].leave()
  }

  onAfterLeave = () => {
    this.updateProps({ visible: false })
  }

  render(props) {
    return (


      props.visible && <div class="o-dialog__wrapper">
        <o-transition onafter-leave={this.onAfterLeave} appear name="dialog-fade">
          <div class="o-dialog__wrapper" style={`z-index: 2040;${!props.visible ? 'display:none' : ''}`}>

            <div role="dialog" aria-modal="true" aria-label="提示" class="o-dialog" style="margin-top: 15vh; width: 30%;">
              <div class="o-dialog__header">
                <span class="o-dialog__title">提示</span>

                <button type="button" aria-label="Close" class="o-dialog__headerbtn">
                  <svg onClick={this.close} class="o-dialog__close o-icon o-icon-close" fill="currentColor" width="1em" height="1em" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
                </button>

              </div><div class="o-dialog__body">
                <span>这是一段信息</span>
              </div>

              <div class="o-dialog__footer">
                <span class="dialog-footer"><button type="button" class="o-button o-button--default">
                  <span>取 消</span>
                </button>
                  <button type="button" class="o-button o-button--primary">
                    <span>确 定</span>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </o-transition>

        {/* <o-transition onafter-leave={this.onAfterLeave} appear name="dialog-fade"> */}
        <div
          class="mask"
          style={{ display: props.visible ? 'block' : 'none' }}
        />
        {/* </o-transition> */}
      </div>



    )
  }
}
