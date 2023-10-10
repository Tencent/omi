import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { TdTooltipLiteProps } from './type'
import css from './style/index'
import { StyledProps, commonClass } from '../common'
import { TdClassNamePrefix, parseTNode } from '../utils'
import '../popup'

export interface TooltipLiteProps extends TdTooltipLiteProps, StyledProps {}

@tag('t-tooltip-lite')
export default class TooltipLite extends WeElement<TooltipLiteProps> {
  static css = css as string
  static defaultProps = { placement: 'top', showArrow: true, showShadow: true, theme: 'default' }
  static propTypes = {
    children: Object,
    content: Object,
    placement: String,
    showArrow: Boolean,
    showShadow: Boolean,
    theme: String,
    triggerElement: Object,
  }

  componentName = TdClassNamePrefix('tooltip-lite')
  activeValue: string | number | boolean
  inactiveValue: string | number | boolean
  isControlled: boolean
  innerChecked: boolean
  SIZE = commonClass['SIZE']
  STATUS = commonClass['STATUS']

  install() {}

  render(props: OmiProps<TooltipLiteProps>) {
    return <div></div>
  }
}
