import { tag, WeElement, h, classNames } from 'omi'
import { createPopper } from '@popperjs/core';

import * as css from './index.scss'

interface Props {
  src?: string
}

@tag('o-image')
export default class Image extends WeElement<Props> {
  static css = css

  static defaultProps = {

  }

  static propTypes = {
    src: String,
  }

  installed() {

  }

  render(props) {
    return <div>
      <img src={props.src} ></img>
      <div>{props.errorMsg}</div>
      <slot name="error"></slot>
      <slot name="placeholder"></slot>
    </div>
  }
}
