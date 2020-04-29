import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'


interface Props {
  split: string,
  items: any[]
}


@tag('o-breadcrumb')
export default class Breadcrumb extends WeElement<Props>{
  static css = css

  static defaultProps = {
    split: '/'
  }

  static propTypes = {
    items: Array,
    split: String
  }

  _tempIcon

  render(props) {

    const items = []
    props.items.forEach((item, index) => {

      this._tempIcon = null

      if (item.icon) {
        this._tempIcon = 'o-icon-' + item.icon
      }

      if (index !== props.items.length - 1) {
        items.push(<li class="breadcrumb-li">
          {item.icon && <this._tempIcon class="icon"></this._tempIcon>}<a class="" href={item.href}>{item.text}</a>
        </li>, <li class='split'>{props.split}</li>)
      } else {
        items.push(<li class="current">{item.icon && <this._tempIcon class="icon"></this._tempIcon>}{item.text}
        </li>)
      }
    })
    return (
      <nav {...extractClass(props, 'o-breadcrumb')}>
        <ol class="breadcrumb-ol">
          {items}
        </ol>
      </nav>
    )
  }
}
