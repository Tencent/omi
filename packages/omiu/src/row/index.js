import { define, WeElement, extractClass, getHost } from 'omi'
import css from './_index.css'

define('o-row', class extends WeElement {

  css() {
    return getHost(this).css() + css
  }

  render(props) {
    return (
      <div {...extractClass(props, "o-row")} {...props}>
        {props.children.map(child => {

          return (
            <div {...extractClass(child.attributes, `col${child.attributes.span}`)}>{child.children}</div>
          )
        })}
      </div>
    )
  }
})
