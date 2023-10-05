import { h, WeElement, tag, classNames, OmiProps, createRef } from 'omi'
import { RadioProps } from './type'
import css from './style'
import { TdClassNamePefix } from '../utils'
import {} from '../common'

@tag('t-radio')
export default class Radio extends WeElement<RadioProps> {
  static css = css

  static defaultProps = {
    allowUncheck: false,
    checked: false,
    defaultChecked: false,
    disabled: 'undefined',
    value: 'undefined',
  }

  static propTypes = {
    allowUncheck: Boolean,
    checked: Boolean,
    defaultChecked: Boolean,
    default: String,
    disabled: Boolean,
    label: String,
    name: String,
    value: String,
    onChange: Function,
    onClick: Function,
  }

  render(props: OmiProps<RadioProps, any>, store: any) {}
}
