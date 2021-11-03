import { define, WeElement } from 'omi'

define('my-list', class extends WeElement {
  static css = require('./_index.css')

  static use = [
    'position'
  ]

  render(props) {
    const [position] = this.using

    return (
      <ul>
        <li class="title">{props.menu.title}</li>
        {props.menu.list &&
          props.menu.list.map((item, subIndex) => {
            const cls = position[0] === props.index && position[1] === subIndex ? { class: 'current' } : null
            return <li>
              <a
                href={
                  '#/' + item.md + `?index=${props.index}&subIndex=${subIndex}`
                }
                {...cls}
              >
                {item.name}
              </a>
            </li>
          })}
      </ul>
    )
  }
})
