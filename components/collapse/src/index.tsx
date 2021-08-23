import { tag, h, WeElement, OverwriteProps } from 'omi'

import * as css from './index.scss'

export type Attrs = {
  opened?: boolean
  horizontal?: boolean
  noAnimation?: boolean
}

const tagName = 'o-collapse'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Attrs
    }
  }
}

export type Props = OverwriteProps<Attrs, { count: number }>

@tag(tagName)
export default class Collapse extends WeElement<Props> {
  static css = css.default ? css.default : css

  static defaultProps = {
    opened: false,
    horizontal: false,
    noAnimation: false
  }

  static propTypes = {
    opened: Boolean,
    horizontal: Boolean,
    noAnimation: Boolean
  }

  installed() {

    this.style.transitionProperty = this._dimensionMaxCss
    this.updateSize(this.props.opened ? 'auto' : '0px', false)
    this.toggleClass('o-collapse-closed', true)
    this.toggleClass('o-collapse-opened', false)


    this.addEventListener('transitionend', () => {
      this._transitionEnd()
    })

    this._opened = this.props.opened

  }


  _opened?: boolean = false

  receiveProps() {

    if (this._opened !== this.props.opened) {
      this.updateSize(this.props.opened ? 'auto' : '0px', true)
      this._opened = this.props.opened
    }
  }

  _desiredSize?: string

  updateSize(size: string, hasAnimation: boolean) {

    this._transitionStart()
    size = size === 'auto' ? '' : size

    this._updateTransition(false)

    const startSize = this._calcSize()


    if (size === '') {
      this.style[this._dimensionMax] = ''
      size = this._calcSize()
    }

    this.style[this._dimensionMax] = startSize

    this.scrollTop = this.scrollTop

    this._updateTransition(hasAnimation)


    this.style[this._dimensionMax] = size

    if (this.props.noAnimation) {
      this._transitionEnd()
    }

  }


  get dimension() {
    return this.props.horizontal ? 'width' : 'height'
  }

  get _dimensionMax() {
    return this.props.horizontal ? 'maxWidth' : 'maxHeight'
  }

  get _dimensionMaxCss() {
    return this.props.horizontal ? 'max-width' : 'max-height'
  }

  toggle() {
    this.props.opened = !this.props.opened
    this.receiveProps()
  }

  show() {
    this.props.opened = true
    this.receiveProps()
  }

  hide() {
    this.props.opened = false
    this.receiveProps()
  }


  _updateTransition(enabled) {
    this.style.transitionDuration = (enabled && !this.props.noAnimation) ? '.3s' : '0s'
  }


  _transitionStart() {
    this.setAttribute('aria-hidden', !this.props.opened)
    this.toggleClass('o-collapse-closed', false)
    this.toggleClass('o-collapse-opened', false)

  }

  _transitionEnd() {
    this.style[this._dimensionMax] = this._desiredSize
    this.toggleClass('o-collapse-closed', !this.props.opened)
    this.toggleClass('o-collapse-opened', this.props.opened)
    this._updateTransition(false)

  }


  toggleClass(className, state) {
    if (state) {
      this.classList.add(className)
    } else {
      this.classList.remove(className)
    }
  }


  _calcSize() {
    return this.getBoundingClientRect()[this.dimension] + 'px'
  }

  render() {
    return <slot></slot>
  }
}
