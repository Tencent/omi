import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'
import { MDCMenu } from '@material/menu';
// @ts-ignore
import { extract, htmlToVdom } from '../util.ts'

interface Props {
  label?: string,
}

interface Data {

}


@tag('m-menu')
export default class Menu extends WeElement<Props, Data>{
  static css = css

  static defaultProps = {

  }

  static propTypes = {

  }

  installed() {
    const menu = new MDCMenu(this.shadowRoot.querySelector('.mdc-menu'))
    menu.open = true

    menu.listen('MDCMenu:selected', (evt:CustomEvent) => {
      this.fire('selected', evt.detail)
    });
  }

  install() {

  }

  render(props) {
    return (
      <div class="mdc-menu mdc-menu-surface" tabIndex={-1}>
        <ul class="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical">
          {props.list.map(item => <li class="mdc-list-item" role="menuitem">
            <span class={classNames('mdc-list-item__text',{
              'mdc-list-item--disabled':item.disabled
            })}>{item.text}</span>
          </li>)}

        </ul>
      </div>
    )
  }
}
