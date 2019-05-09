import { define, WeElement, extractClass } from 'omi'
import css from './_index.css'

define('o-loading', class extends WeElement {
  static css = css
  
  render(props) {
    return (
      <div {...extractClass(props, 'o-loading')}
        style={{ width: props.size, height: props.size }}
      />
    )
  }
})
