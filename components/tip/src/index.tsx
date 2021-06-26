import { tag, WeElement, h, extractClass, classNames, options } from 'omi'
import { createPopper } from '@popperjs/core';


import * as css from './index.scss'

interface Props {

}

@tag('o-tip')
export default class Table extends WeElement<Props> {
  static css = css

  static defaultProps = {

  }

  static propTypes = {

  }

  installed() {
    const tip = this.shadowRoot.querySelector('slot').assignedNodes()[0]

    const tooltip = document.createElement('div')
    tooltip.innerHTML = 'af'

    this.shadowRoot.appendChild(tooltip)
    createPopper(tip, tooltip, {
      placement: 'bottom',
    });
  }

  render() {
    return <slot></slot>
  }
}
