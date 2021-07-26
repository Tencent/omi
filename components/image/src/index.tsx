import { tag, WeElement, h, classNames } from 'omi'
import { createPopper } from '@popperjs/core';

import * as css from './index.scss'

interface Props {
  src?: string
  fit?: string
}

@tag('o-image')
export default class Image extends WeElement<Props> {
  static css = css

  static defaultProps = {

  }

  static propTypes = {
    src: String,
    fit: String,
  }

  installed() {

  }

  render(props) {
    return <h.f>
      <img src={props.src} style={{ objectFit: props.fit }}></img>
      <div>{props.errorMsg}</div>
      <slot name="error"></slot>
      <slot name="placeholder"></slot>
    </h.f>
  }
}
