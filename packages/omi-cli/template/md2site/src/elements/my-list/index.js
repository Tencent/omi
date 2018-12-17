import { define, WeElement } from 'omi'
import css from './_index.css'

define('my-list', class extends WeElement {


  render(props) {
    return (
      <ul>
        <li class="title">{props.menu.title}</li>
        {props.menu.list &&
          props.menu.list.map((item, index) => (
            <li>
              <a
                href={`#/`+item.md}
                class={item.selected ? 'current' : ''}
              >
                {item.name}
              </a>
            </li>
          ))}
      </ul>
    )
  }

  staticCss() {
    return css
  }
})
