import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
import { MDCChipSet, MDCChip } from '@material/chips'

interface Props {
  input?: boolean,
  choice?: boolean,
  filter?: boolean
}

interface Data {

}

@tag('m-chip-set')
export default class chipSet extends WeElement<Props, Data>{
  static css = css

  static propTypes = {
    input: Boolean,
    choice: Boolean,
    filter: Boolean
  }

  installed() {

  }

  render(props) {
    return (
      <div {...extractClass(props, 
        'mdc-chip-set', {
        'mdc-chip-set--input': props.input,
        'mdc-chip-set--choice': props.choice,
        'mdc-chip-set--filter': props.filter
      })}>
        <slot></slot>
      </div>
    )
  }
}