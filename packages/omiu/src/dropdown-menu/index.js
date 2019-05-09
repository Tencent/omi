import { define, WeElement, extractClass } from 'omi'
import css from './_index.css'
import '../icon'

define('o-dropdown-menu', class extends WeElement {
  static css = css

  onClick = index => {
    this.props.onChange(index)
  }

  render(props) {
    return (
      <div {...extractClass(props, 'o-dropdown-menu')}>
        <span class="arrow" />
        <div class="ctn">
          {props.children.map((item, index) => (
            <a>
              <o-icon class="icon" color={item.attributes.icon.color} path={item.attributes.icon.path} />
              <div class="wd">{item.attributes.text}</div>
            </a>
          ))}
        </div>
      </div>
    )
  }
})
