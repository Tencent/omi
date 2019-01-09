import { define, WeElement, extractClass } from 'omi'
import css from './_index.css'

define('o-row', class extends WeElement {

  css() {
    console.log(this)
    return css
  }

  render(props) {
    console.log(this.props)
    return (
      <div {...extractClass(props, "o-row")} {...props}>
        {props.children.map(child => {
          
          return (
            <div {...this.___scopedCssAttr} {...this.scopedCssAttr} {...extractClass(child.attributes,`col${child.attributes.span}`)}>{child.children}</div>
          )
        })}
      </div>
    )
  }
})
