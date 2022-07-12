import { tag, WeElement, h, classNames } from 'omi'
import { createPopper } from '@popperjs/core';

import * as css from './index.scss'

interface Props {
  content?: string,
  effect?: string,
  position?: string
}

@tag('o-tooltip')
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

  installed() {

  }

  onMouseEnter = () => {
    this.isShow = true
    this.update()
    const tip = this.shadowRoot.querySelector('slot').assignedNodes()[0]
    if (this.popper) {
      this.popper.destroy();
    }
    this.popper = createPopper(tip, this.shadowRoot.querySelector('.tip'), {
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

  onMouseLeave = () => {
    this.isShow = false
    this.update()
  }

  isShow = false

  render(props) {
    return <div>
      <slot onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}></slot>
      <div class={
        classNames({
          tip: true,
          show: this.isShow,
          [`is-${props.effect}`]: props.effect
        })
      }>{props.content}
        <i class="tip-arrow" data-popper-arrow></i>
      </div>
    </div>
  }
}
