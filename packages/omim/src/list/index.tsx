import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'
import { MDCList } from '@material/list';
import { MDCRipple } from '@material/ripple';
import { domReady } from '../util/dom-ready'

//@ts-ignore
import '../theme.ts'

interface Props {
  items: object,
  singleSelection: boolean,
  checkbox: boolean,
  radio: boolean,
  onItemClick: (evt: CustomEvent) => void
}

interface Data {

}

@tag('m-list')
export default class List extends WeElement<Props, Data>{
  static css = css

  static propTypes = {
    items: Object,
    singleSelection: Boolean,
    checkbox: Boolean,
    radio: Boolean
  }

  static defaultProps = {

  }

  installed() {
    domReady(() => {

      //init mdc list
      const lists = this.shadowRoot.querySelectorAll('.mdc-list')
      lists.forEach((list, index) => {
        const listControl = new MDCList(list)
        listControl.listElements.map((listItemEl) => new MDCRipple(listItemEl))
        listControl.singleSelection = this.props.singleSelection
        listControl.listen('MDCList:action', (evt: any) => {
          this.fire('itemclick', { item: this.props.items[evt.detail.index], index: evt.detail.index })
          // if(this.listAll[index][evt.detail.index]) {
          //   this.fire('change', this.listAll[index][evt.detail.index])
          // } else {
          //   this.fire('change', this.listAll[index+1][evt.detail.index])
          // }
        })
      })
    })
  }


  render(props) {

    return <ul {...extractClass(props, 'mdc-list', {
      'mdc-list--two-line': props.items[0].secondaryText
    })}>
      {props.items.map(item => {
        if (item.divider || item === true) {
          return <li role="separator" class="mdc-list-divider"></li>
        }
        return <li class={classNames('mdc-list-item', {
          'mdc-list-item--selected': item.selected
        })}   >
          {item.icon && <span class="mdc-list-item__graphic material-icons" aria-hidden="true">{item.icon}</span>}
          <span class="mdc-list-item__text">
            {item.text ? (item.text && item.secondaryText ? [
              <span class="mdc-list-item__primary-text">{item.text}</span>,
              <span class="mdc-list-item__secondary-text">{item.secondaryText}</span>] : item.text) : item}
          </span>
          {item.rightIcon && <span class="mdc-list-item__graphic mdc-list-item__meta material-icons" aria-hidden="true">{item.rightIcon}</span>}

          {props.checkbox &&
            <div class="mdc-checkbox mdc-list-item__meta mdc-checkbox--upgraded mdc-ripple-upgraded mdc-ripple-upgraded--unbounded" style="--mdc-ripple-fg-size:24px; --mdc-ripple-fg-scale:1.66667; --mdc-ripple-left:8px; --mdc-ripple-top:8px;"><input type="checkbox" class="mdc-checkbox__native-control" aria-labelledby="2c7710a7-dda2-45e4-b64b-3144fca2bb32" checked={item.checked} tabindex="-1" /><div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg><div class="mdc-checkbox__mixedmark"></div></div></div>}

          {props.radio &&
            <div class="mdc-radio mdc-list-item__meta mdc-ripple-upgraded mdc-ripple-upgraded--unbounded" style="--mdc-ripple-fg-size:24px; --mdc-ripple-fg-scale:1.66667; --mdc-ripple-left:8px; --mdc-ripple-top:8px;"><input class="mdc-radio__native-control" type="radio" name="listRadioGroup" aria-labelledby="1ad8870d-6eb4-4710-bfb6-a295ddc0f64c" checked={item.checked} tabindex="-1" /><div class="mdc-radio__background"><div class="mdc-radio__outer-circle"></div><div class="mdc-radio__inner-circle"></div></div></div>}
        </li>
      })}


    </ul>
  }
}

