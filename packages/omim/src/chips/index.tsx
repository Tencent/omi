import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'
import { MDCRipple } from '@material/ripple'
import { MDCChipSet, MDCChip } from '@material/chips'
import '../icon'
//@ts-ignore
import '../theme.ts'

interface Props {
  chips: [{
    text: string,
    selected?: boolean,
    leading?: {
      icon: object | string
    },
    trailing?: {
      icon: object | string,
      role?: string,
      tabindex?: number
    },
    checkmark: boolean
  }],
  input?: boolean,
  choice?: boolean,
  filter?: boolean,
  ripple?: boolean
}

interface Data {

}

@tag('m-chips')
export default class Chips extends WeElement<Props, Data>{
  static css = css

  static defaultProps = {
    ripple: true
  }

  static propTypes = {
    ripple: Boolean,
    chips: Object,
    input: Boolean,
    choice: Boolean,
    filter: Boolean
  }

  trailingClickHandle = (index) => {
    this.fire('trailingIconInteraction', index)
  }

  chipClickHandle = (index) => {
    this.fire('interaction', index)
  }

  installed() {
    if (this.props.ripple) {
      this.shadowRoot.querySelectorAll('.mdc-chip').forEach(item => {
        new MDCRipple(item)
      })
    }
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
          props.chips.map((item, index) => {
            return <div tabindex="0" {
              ...extractClass(props,
                'mdc-chip', {
                  'mdc-chip--selected': item.selected
                })} onClick={() => this.chipClickHandle(index)}>

              {(item.leading) && <i class={classNames('material-icons', 'mdc-chip__icon', 'mdc-chip__icon--leading', {'mdc-chip__icon--leading-hidden': props.filter && item.checkmark && item.selected})}>
                { (item.leading.icon && typeof item.leading.icon === 'object') && <m-icon class='m-icon' {...item.leading.icon}></m-icon>}
                { (item.leading.icon && typeof item.leading.icon === 'string') && item.leading.icon }
              </i>}

              {(props.filter && item.checkmark) && <div class="mdc-chip__checkmark" >
                <svg class="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30">
                  <path class="mdc-chip__checkmark-path" fill="none" stroke="black"
                        d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                </svg>
              </div>}

              <div class="mdc-chip__text">{ item.text }</div>

              {(item.trailing) && <i class="material-icons mdc-chip__icon mdc-chip__icon--trailing" onClick={() => this.trailingClickHandle(index) }>
                {(item.trailing.icon && typeof item.trailing.icon === 'object') && <m-icon class='m-icon' {...item.trailing.icon}></m-icon>}
                { (item.trailing.icon && typeof item.trailing.icon === 'string') && item.trailing.icon }
              </i>}
            </div>
          })
        }
      </div>
    )
  }
}
