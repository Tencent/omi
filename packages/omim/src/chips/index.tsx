import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
import { MDCChipSet, MDCChip } from '@material/chips'
import '../icon'

interface Props {
  chips: [{
    text: string,
    selected?: boolean,
    leading?: {
      icon: object,
      tabindex?: number,
      role?: string
    },
    trailing?: {
      icon: object,
      tabindex?: number,
      role?: string
    },
    checkmark: boolean
  }],
  input?: boolean,
  choice?: boolean,
  filter?: boolean
}

interface Data {

}

@tag('m-chips')
export default class chipSet extends WeElement<Props, Data>{
  static css = css

  static propTypes = {
    chips: Object,
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
        {
          props.chips.map(item => {
            return <div {
              ...extractClass(props,
                'mdc-chip', {
                  'mdc-chip--selected': props.choice && item.selected
                })}>

              {(item.leading) && <i class="material-icons mdc-chip__icon mdc-chip__icon--leading" role="button">
                {(item.leading.icon) && <m-icon class='m-icon' {...item.leading.icon}></m-icon>}
              </i>}

              {(props.filter && item.checkmark) && <div class="mdc-chip__checkmark" >
                <svg class="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30">
                  <path class="mdc-chip__checkmark-path" fill="none" stroke="black"
                        d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                </svg>
              </div>}

              <div class="mdc-chip__text">{ item.text }</div>

              {(item.trailing) && <i class="material-icons mdc-chip__icon mdc-chip__icon--trailing" tabindex="0" role="button">
                {(item.trailing.icon) && <m-icon class='m-icon' {...item.trailing.icon}></m-icon>}
              </i>}
            </div>
          })
        }
      </div>
    )
  }
}