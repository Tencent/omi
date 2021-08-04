import { tag, WeElement, h, classNames } from 'omi'
import { createPopper } from '@popperjs/core';
import '@omiu/button'
import * as css from './index.scss'

interface Props {
  content?: string,
  effect?: string,
  position?: string
}

@tag('o-popconfirm')
export default class ToolTip extends WeElement<Props> {
  static css = css

  static defaultProps = {
    content: '',
    effect: 'light',
    position: 'bottom'
  }

  static propTypes = {
    content: String,
    effect: String,
    position: String
  }

  popEl

  refEl

  install() {
    window.addEventListener('click', (evt) => {

      const path = evt.path || (evt.composedPath && event.composedPath())
      const isClickOutside = (path
        ? path.indexOf(this.popEl) < 0
        : !this.popEl.contains(evt.target)) && (path
          ? path.indexOf(this.refEl) < 0
          : !this.refEl.contains(evt.target))
      if (!isClickOutside) {
        return
      }
      this.isShow = false
      this.update()
    })
  }

  cancel = () => {
    this.isShow = false
    this.update()
    this.fire('cancel')
  }

  confirm = () => {
    this.isShow = false
    this.update()
    this.fire('confirm')
  }

  showConfirm = (evt) => {
    this.isShow = true
    this.update()
    const tip = this.shadowRoot.querySelector('slot').assignedNodes()[0]
    createPopper(tip, this.shadowRoot.querySelector('.tip'), {
      placement: this.props.position,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
    });
  }

  isShow = false

  render(props) {
    return <h.f>
      <slot ref={e => this.refEl = e} style="cursor:pointer" onclick={this.showConfirm}></slot>
      <div
        ref={e => this.popEl = e}
        class={
          classNames({
            tip: true,
            show: this.isShow,
            [`is-${props.effect}`]: props.effect
          })
        }>
        <p class="content">
          <slot name="icon"></slot>{props.content}
        </p>
        <div class="btns">
          <o-button size="mini" onclick={this.cancel}>{props.cancelButtonText || '取消'}</o-button> <o-button onclick={this.confirm} type="primary" size="mini">{props.confirmButtonText || '确认'}</o-button>
        </div>
        <i class="tip-arrow" data-popper-arrow></i>
      </div>
    </h.f>
  }
}
