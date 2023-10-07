import { h, tag, WeElement, OmiProps, classNames, createRef } from 'omi'
import { TdRowProps } from './type'
import isObject from 'lodash/isObject'
import { canUseDocument, getCssVarsValue } from '../utils/dom'
import { StyledProps } from '../common'
export interface RowProps extends TdRowProps, StyledProps { }
const calcSize = (width: number) => {
  const smWidth = getCssVarsValue('--td-screen-sm') || 768
  const mdWidth = getCssVarsValue('--td-screen-md') || 992
  const lgWidth = getCssVarsValue('--td-screen-lg') || 1200
  const xlWidth = getCssVarsValue('--td-screen-xl') || 1400
  const xxlWidth = getCssVarsValue('--td-screen-xxl') || 1880

  let size = 'xs'
  if (width >= xxlWidth) {
    size = 'xxl'
  } else if (width >= xlWidth) {
    size = 'xl'
  } else if (width >= lgWidth) {
    size = 'lg'
  } else if (width >= mdWidth) {
    size = 'md'
  } else if (width >= smWidth) {
    size = 'sm'
  } else {
    size = 'xs'
  }
  return size
}

const calcRowStyle = (gutter: RowProps['gutter'], currentSize: string): object => {
  const rowStyle = {}
  if (typeof gutter === 'number') {
    Object.assign(rowStyle, {
      marginLeft: `${gutter / -2}px`,
      marginRight: `${gutter / -2}px`,
    })
  } else if (Array.isArray(gutter) && gutter.length) {
    if (typeof gutter[0] === 'number') {
      Object.assign(rowStyle, {
        marginLeft: `${gutter[0] / -2}px`,
        marginRight: `${gutter[0] / -2}px`,
      })
    }
    if (typeof gutter[1] === 'number') {
      Object.assign(rowStyle, { rowGap: `${gutter[1]}px` })
    }

    if (isObject(gutter[0]) && gutter[0][currentSize] !== undefined) {
      Object.assign(rowStyle, {
        marginLeft: `${gutter[0][currentSize] / -2}px`,
        marginRight: `${gutter[0][currentSize] / -2}px`,
      })
    }
    if (isObject(gutter[1]) && gutter[1][currentSize] !== undefined) {
      Object.assign(rowStyle, { rowGap: `${gutter[1][currentSize]}px` })
    }
  } else if (isObject(gutter) && gutter[currentSize]) {
    if (Array.isArray(gutter[currentSize]) && gutter[currentSize].length) {
      Object.assign(rowStyle, {
        marginLeft: `${gutter[currentSize][0] / -2}px`,
        marginRight: `${gutter[currentSize][0] / -2}px`,
      })
      Object.assign(rowStyle, { rowGap: `${gutter[currentSize][1]}px` })
    } else {
      Object.assign(rowStyle, {
        marginLeft: `${gutter[currentSize] / -2}px`,
        marginRight: `${gutter[currentSize] / -2}px`,
      })
    }
  }
  return rowStyle
}

@tag('t-row')
export default class Row extends WeElement<RowProps> {
  static defaultProps = { align: 'top', gutter: 0, justify: 'start', tag: 'div' }
  static isLightDOM = true
  static propTypes = {
    align: String,
    gutter: [Number, Object, Array],
    justify: String,
    tag: String,
    class: String,
    style: Object,
  }

  size = canUseDocument ? calcSize(window.innerWidth) : 'md'
  updateSize = () => {
    const currentSize = calcSize(window.innerWidth)
    if (currentSize !== this.size) {
      this.size = currentSize
      // this.update()
    }
  }

  install() {
    window.addEventListener('resize', this.updateSize)
  }

  unintall() {
    window.removeEventListener('resize', this.updateSize)
  }

  provide = {
    gutter: this.props.gutter,
    size: this.size,
  }
  ref = createRef()

  installed() {
    this.provide = {
      gutter: this.props.gutter,
      size: this.size,
    }
  }

  render(props: OmiProps<RowProps>) {
    const { align, gutter, justify, tag, children } = props
    const classPrefix = 't'
    const rowClassNames = classNames(`${classPrefix}-row`, props.class, {
      [`${classPrefix}-row--${props.justify}`]: true,
      [`${classPrefix}-row--${props.align}`]: true,
    })

    const rowStyle = calcRowStyle(props.gutter, this.size)
    //set style
    Object.keys(rowStyle).forEach((key) => {
      this.style[key] = rowStyle[key]
    })

    this.className = rowClassNames
    return <></>
  }
}
