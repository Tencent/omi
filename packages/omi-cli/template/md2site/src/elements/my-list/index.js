import { define, WeElement } from 'omi';
import { list } from 'postcss';
import css from './_index.css'

define('my-list', class extends WeElement {

  goto(md, index) {
    this.$store.goto(md, index)
  }

  render() {
    return (
      <ul>
        <li class="title">{{ title }}</li>
        {list.map(item => (
          <li>
            <a href="#" onclick="goto('{{md}}',{{index}})" class={selected ? 'current' : ''}>{{ name }}</a>
          </li>
        ))}

      </ul>
    )
  }

  style() {
    return css;
  }
})

