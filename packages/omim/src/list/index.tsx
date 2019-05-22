import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
import {MDCList} from '@material/list';
import {MDCRipple} from '@material/ripple';

//@ts-ignore
import { theme } from '../theme.ts'

interface Props {
  
}

interface Data {

}

@tag('m-list')
export default class Switch extends WeElement<Props, Data>{
  static css = theme() + css

  static propTypes = {
    
  }

  static defaultProps = {

  }
  
  installed() {
    const list = new MDCList(this.shadowRoot.querySelector('.mdc-list'));
    const listItemRipples = list.listElements.map((listItemEl) => new MDCRipple(listItemEl));
  }
  
  render(props) {
    return [
      <ul class="mdc-list">
        <li class="mdc-list-item" tabindex="0">
          <span class="mdc-list-item__text">Single-line item</span>
        </li>
        <li class="mdc-list-item">
          <span class="mdc-list-item__text">Single-line item</span>
        </li>
        <li class="mdc-list-item">
          <span class="mdc-list-item__text">Single-line item</span>
        </li>
      </ul>
    ]
  }
}
