import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'
import { MDCList } from '@material/list';
import { MDCRipple } from '@material/ripple';
import { domReady } from '../util/dom-ready'

//@ts-ignore
import { theme } from '../theme.ts'

interface Props {
  items: object
}

interface Data {

}

@tag('m-list')
export default class List extends WeElement<Props, Data>{
  static css = theme() + css

  static resetTheme() {
    this.css = theme() + css
  }

  static propTypes = {
    items: Object
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
      {props.items.map(item => <li class="mdc-list-item" >
        <span class="mdc-list-item__text">
          {item.text ? (item.text && item.secondaryText ? [
            <span class="mdc-list-item__primary-text">{item.text}</span>,
            <span class="mdc-list-item__secondary-text">{item.secondaryText}</span>] : item.text) : item}
        </span>
      </li>)}

    </ul>
  }
}

