import { define, WeElement, extractClass } from 'omi'
import css from './_index.css'

define('o-tab', class extends WeElement {
  static css = css

  onClick = index => {
    this.props.onChange(index)
  }

  render(props) {
    return (
      <ul {...extractClass(props, 'o-tab')}>
        {props.children.map((item, index) => {
          const props = {}
          const isActive = item.attributes && item.attributes.active

          if (isActive) {
            props.class = 'active'
          } else {
            props.onClick = () => this.onClick(index)
          }

          return <li {...props}>{item.children[0]}</li>
        })}
      </ul>
    )
  }
})
