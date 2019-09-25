import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'

//@ts-ignore
import '../theme.ts'

interface Props {
  list: object
}

@tag('m-menu')
export default class Menu extends WeElement<Props>{
  static css = css

  static defaultProps = {

  }

  static propTypes = {
    list: Object
  }

  clickHandler = (item)=>{
    if(!item.disabled){
      this.fire('selected', item)
    }
  }

  render(props) {
    return (
      <div {...extractClass(props, 'mdc-menu mdc-menu-surface')} tabIndex={-1}>
        <ul class="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical">
          {props.list.map(item => <li onClick={_=>this.clickHandler(item)} class="mdc-list-item" role="menuitem">
            <span class={classNames('mdc-list-item__text', {
              'mdc-list-item--disabled': item.disabled
            })}>{item.text}</span>
          </li>)}

        </ul>
      </div>
    )
  }
}
