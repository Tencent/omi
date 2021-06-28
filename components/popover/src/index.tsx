import { tag, WeElement, h, classNames } from 'omi'
import { createPopper } from '@popperjs/core';

import * as css from './index.scss'

interface Props {
  effect?: string,
  position?: string,
  trigger?: string
}

@tag('o-popover')
export default class Popover extends WeElement<Props> {
  static css = css

  static defaultProps = {
    effect: 'light',
    position: 'bottom',
    trigger: 'click'
  }

  static propTypes = {
    content: String,
    effect: String,
    position: String,
    trigger: String
  }

  installed() {
    window.addEventListener('click', () => {
      this.isShow = false
      this.update()
    })
  }

  onEnter = (evt) => {

    clearTimeout(this.timeout)
    this.isShow = !this.isShow
    this.update()
    //html 模式过滤文本
    const tip = this.shadowRoot.querySelector('slot').assignedNodes().find(node => node.nodeType !== 3)

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
    evt.stopPropagation()
  }

  timeout

  onLeave = () => {
    this.timeout = setTimeout(() => {
      this.isShow = false
      this.update()
    }, 600)

  }

  onEnterPopover = (evt) => {
    clearTimeout(this.timeout)
    evt.stopPropagation()
  }

  onLeavePopover = () => {
    if (this.props.trigger !== 'click') {
      this.timeout = setTimeout(() => {
        this.isShow = false
        this.update()
      }, 600)
    }

  }

  isShow = false

  render(props) {

    const targetEvents: {
      onMouseEnter: () => void;
      onMouseLeave: () => void;
      onClick: () => void;
    } = {
      onMouseEnter: null,
      onMouseLeave: null,
      onClick: null
    }
    if (props.trigger === 'click') {
      targetEvents.onClick = this.onEnter

    } else {
      targetEvents.onMouseEnter = this.onEnter
      targetEvents.onMouseLeave = this.onLeave
    }


    return <div style="position:relative">
      <slot {...targetEvents}></slot>
      <div class={
        classNames({
          tip: true,
          show: this.isShow,
          [`is-${props.effect}`]: props.effect
        })
      }>
        <slot onMouseEnter={this.onEnterPopover} onMouseLeave={this.onLeavePopover} name="popover"></slot>
        <i class="tip-arrow" data-popper-arrow></i>
      </div>
    </div>
  }
}
