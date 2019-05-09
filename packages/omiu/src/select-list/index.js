

import { define, WeElement, extractClass } from 'omi'
import css from './_index.css'

define('o-select-list', class extends WeElement {
  static defaultProps = {
    selectedIndex: 0,
    list: []
  }

  static css = css

  onSelect = (item, index) => {
    this.props.onSelect && this.props.onSelect(item, index)
  }

  render(props) {
    const { selectedIndex, list, onSelect, ...other } = props
    return (
      <ul  {...extractClass(other, 'o-select-list')} {...other}>
        {list.map((item, index) => {
          return <li
            class={index === selectedIndex ? '_slt' : ''}
            onClick={() => this.onSelect(item, index)} >
            {item.text}
          </li>
        })}
      </ul>

    )
  }
})
