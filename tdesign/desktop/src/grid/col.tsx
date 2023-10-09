import { h, tag, WeElement, OmiProps, classNames, createRef } from 'omi'
import { TdColProps, TdRowProps } from './type'
import isObject from 'lodash/isObject'
import { StyledProps } from '../common'
type FlexType = number | 'none' | 'auto' | string
export interface ColProps extends TdColProps, StyledProps { }
const calcColPadding = (gutter: TdRowProps['gutter'], currentSize: string) => {
  const paddingObj = {}
  if (typeof gutter === 'number') {
    Object.assign(paddingObj, {
      paddingLeft: `${gutter / 2}px`,
      paddingRight: `${gutter / 2}px`,
    })
  } else if (Array.isArray(gutter) && gutter.length) {
    if (typeof gutter[0] === 'number') {
      Object.assign(paddingObj, {
        paddingLeft: `${gutter[0] / 2}px`,
        paddingRight: `${gutter[0] / 2}px`,
      })
    }

    if (isObject(gutter[0]) && gutter[0][currentSize]) {
      Object.assign(paddingObj, {
        paddingLeft: `${gutter[0][currentSize] / 2}px`,
        paddingRight: `${gutter[0][currentSize] / 2}px`,
      })
    }
  } else if (isObject(gutter) && gutter[currentSize]) {
    Object.assign(paddingObj, {
      paddingLeft: `${gutter[currentSize] / 2}px`,
      paddingRight: `${gutter[currentSize] / 2}px`,
    })
  }
  return paddingObj
}

const parseFlex = (flex: FlexType) => {
  if (typeof flex === 'number') {
    return `${flex} ${flex} auto`
  }

  if (/^\d+(\.\d+)?(px|r?em|%)$/.test(flex)) {
    return `0 0 ${flex}`
  }

  return flex
}

@tag('t-col')
export default class Col extends WeElement<ColProps> {
  static defaultProps = { offset: 0, order: 0, pull: 0, push: 0, tag: 'div' }
  static isLightDOM = true
  static propTypes = {
    flex: [String, Number],
    lg: [Number, Object],
    md: [Number, Object],
    offset: Number,
    order: Number,
    pull: Number,
    push: Number,
    sm: [Number, Object],
    span: Number,
    tag: String,
    xl: [Number, Object],
    xs: [Number, Object],
    xxl: [Number, Object],
  }

  inject = ['gutter', 'size']

  tagRef = createRef()
  render(props: OmiProps<ColProps>) {
    const { flex, offset, order, pull, push, span, tag } = props
    const classPrefix = 't'
    const allSizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']
    const sizeClasses = allSizes.reduce((acc, currSize) => {
      const sizeProp = props[currSize]
      let sizeObj: any = {}
      if (typeof sizeProp === 'number') {
        sizeObj.span = sizeProp
      } else if (isObject(sizeProp)) {
        sizeObj = sizeProp || {}
      }
      return {
        ...acc,
        [`${classPrefix}-col-${currSize}-${sizeObj.span}`]: sizeObj.span !== undefined,
        [`${classPrefix}-col-${currSize}-order-${sizeObj.order}`]: parseInt(sizeObj.order, 10) >= 0,
        [`${classPrefix}-col-${currSize}-offset-${sizeObj.offset}`]: parseInt(sizeObj.offset, 10) >= 0,
        [`${classPrefix}-col-${currSize}-push-${sizeObj.push}`]: parseInt(sizeObj.push, 10) >= 0,
        [`${classPrefix}-col-${currSize}-pull-${sizeObj.pull}`]: parseInt(sizeObj.pull, 10) >= 0,
      }
    }, {})
    const colClassNames = classNames(
      `${classPrefix}-col`,
      props.class,
      {
        [`${classPrefix}-col-${span}`]: span !== undefined,
        [`${classPrefix}-col-offset-${offset}`]: parseInt(offset as unknown as string, 10) >= 0,
        [`${classPrefix}-col-pull-${pull}`]: parseInt(pull as unknown as string, 10) >= 0,
        [`${classPrefix}-col-push-${push}`]: parseInt(push as unknown as string, 10) >= 0,
        [`${classPrefix}-col-order-${order}`]: parseInt(order as unknown as string, 10) >= 0,
      },
      sizeClasses,
    )

    const colStyle = calcColPadding(this.injection.gutter, this.injection.size)
    flex && (colStyle['flex'] = parseFlex(flex))

    this.className = colClassNames
    Object.keys(colStyle).forEach((key) => {
      this.style[key] = colStyle[key]
    })
    return <></>
  }
}
