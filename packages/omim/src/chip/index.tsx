import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
// import { MDCChipSet, MDCChip } from '@material/chips'

interface Props {
  id?: string,
  selected?: boolean,
  shouldRemoveOnTrailingIconClick?: boolean
}

interface Data {

}


@tag('m-chip')
export default class chip extends WeElement<Props, Data>{
  static css = css

  static propTypes = {
    id: String,
    selected: Boolean,
    shouldRemoveOnTrailingIconClick: Boolean
  }

  installed() {
    // const chipSet = new MDCChipSet(this.shadowRoot.querySelector('.mdc-chip-set'))
    // const chip = new MDCChip(this.shadowRoot.querySelector('.mdc-chip'))
  }

  render(props) {
    return (
      <div {...extractClass(props, 'mdc-chip', {
      'mdc-chip--selected': props.selected
    })}>
        <div class="mdc-chip__text">
          <slot></slot>
        </div>
      </div>
    )
  }
}