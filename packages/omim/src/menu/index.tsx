import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'
import { MDCMenu } from '@material/menu';
// @ts-ignore
import { extract, htmlToVdom } from '../util.ts'

//@ts-ignore
import { theme } from '../theme.ts'

interface Props {
  show?: boolean,
  list: object,
  anchor: boolean
}

interface Data {

}


@tag('m-menu')
export default class Menu extends WeElement<Props, Data>{
  static css = theme() + css

  static defaultProps = {

  }

  static propTypes = {
    list: Object,
    show: Boolean,
    anchor: Boolean
  }

  menu: MDCMenu = null

  installed() {
    const menu = new MDCMenu(this.shadowRoot.querySelector('.mdc-menu'))
    menu.open = this.props.show

    menu.listen('MDCMenu:selected', (evt: CustomEvent) => {
      this.fire('selected', evt.detail)
    });
    this.menu = menu
  }

  toggle() {
    console.log(11)
    this.menu.open = !this.menu.open
  }

  open() {
    this.menu.open = true
  }

  close() {
    this.menu.open = false
  }

  install() {

  }

  receiveProps() {
    this.menu.open = this.props.show
  }

  render(props) {
    if (props.anchor) {
      return (
        <div class='mdc-menu-surface--anchor'>
          <div {...extractClass(props, 'mdc-menu mdc-menu-surface')} tabIndex={-1}>
            <ul class="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical">
              {props.list.map(item => <li class="mdc-list-item" role="menuitem">
                <span class={classNames('mdc-list-item__text', {
                  'mdc-list-item--disabled': item.disabled
                })}>{item.text}</span>
              </li>)}

            </ul>
          </div>
        </div>

      )
    }
    return (
      <div {...extractClass(props, 'mdc-menu mdc-menu-surface')} tabIndex={-1}>
        <ul class="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical">
          {props.list.map(item => <li class="mdc-list-item" role="menuitem">
            <span class={classNames('mdc-list-item__text', {
              'mdc-list-item--disabled': item.disabled
            })}>{item.text}</span>
          </li>)}

        </ul>
      </div>
    )
  }
}
