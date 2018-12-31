import { define, WeElement, extractClass } from 'omi'
import css from './_index.css'

define('o-timeline', class extends WeElement {
  css() {
    return css
  }


  render(props) {
    return  <div {...extractClass(props, 'o-timeline')}>
    {props.data.map(item=>(
      <div class="item">
      <div class="circle" />
      <div class="time">
        <div>{item.msgA}</div>
        <div>{item.msgC}</div>
      </div>
      <div class="des">
        <div>{item.msgB}</div>
        <div>{item.msgD}</div>
      </div>
    </div>
    ))}
    
  </div>
  }
})
