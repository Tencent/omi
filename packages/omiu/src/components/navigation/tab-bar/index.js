import { define, WeElement } from 'omi'
import css from './_index.css'

define('o-tab-bar', class extends WeElement {
  css() {
    return css
  }

  onClick = (index) => {
    this.props.onChange(index)
  }

  render(props) {
    return <ul class="o-tab-bar">
    {props.children.map(child=>(

      <li class="item"><a href="">{child}</a></li>
    ))}
      
    </ul>
  }
})
