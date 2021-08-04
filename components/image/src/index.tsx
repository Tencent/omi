import { tag, WeElement, h, classNames } from 'omi'

import * as css from './index.scss'

interface Props {
  src?: string
  fit?: string
  errorMsg?: string
}

@tag('o-image')
export default class Image extends WeElement<Props> {
  static css = css

  static defaultProps = {
    errorMsg: '加载失败'
  }

  static propTypes = {
    src: String,
    fit: String,
    errorMsg: String
  }

  loaded: boolean = false
  loadError: boolean = false

  onLoad = () => {
    this.loaded = true
    this.update()
  }

  onError = () => {
    this.loaded = false
    this.loadError = true
    this.update()
  }

  placeholder
  error

  installed() {
    const height = this.getBoundingClientRect().height + 'px'
    this.error && (this.error.style.lineHeight = height)
    this.placeholder && (this.placeholder.style.lineHeight = height)
  }

  updated() {
    const height = this.getBoundingClientRect().height + 'px'
    this.error && (this.error.style.lineHeight = height)
    this.placeholder && (this.placeholder.style.lineHeight = height)
  }

  render(props) {
    return <h.f>
      <img onload={this.onLoad}
        onerror={this.onError} src={props.src} style={{ objectFit: props.fit, display: this.loaded ? 'block' : 'none' }}></img>
      {this.loadError && <slot ref={_ => this.error = _} class="error" name="error">{props.errorMsg}</slot>}
      {!this.loadError && <slot name="placeholder" style={{ display: this.loaded ? 'none' : 'block  ' }} ref={_ => this.placeholder = _} class="placeholder"></slot>}
    </h.f>
  }
}
