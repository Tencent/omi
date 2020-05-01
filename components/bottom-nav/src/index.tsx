import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'


interface Props {
  selectedColor: string
  items: any[]
}


@tag('m-bottom-nav')
export default class BottomNav extends WeElement<Props>{
  static css = css

  static defaultProps = {
  }

  static propTypes = {
    selectedColor: String,
    items: Array
  }

  clickHandler = (item) => {
    this.fire('item-click', item)
    if (!item.selected) {
      this.props.items.forEach(_ => _.selected = false)
      item.selected = true
      this.fire('change', item)
      this.update(true)
    }
  }

  _iconTag

  render(props) {
    return <div class="o-bottom-nav">
      {props.items.map((item, index) => {

        this._iconTag = 'o-icon-' + item.icon
        return <button onClick={_ => { this.clickHandler(item) }} {...extractClass({}, 'item', {
          'selected': item.selected
        })} {...(item.selected && props.selectedColor) ? { style: `color:${props.selectedColor}` } : null} tabindex={index}>

          <this._iconTag class="icon" />
          <span class="m-action-label">{item.label}</span>

        </button>
      })}
    </div>

  }
}
