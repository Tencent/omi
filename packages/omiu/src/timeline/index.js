import { define, WeElement, extractClass } from 'omi'
import css from './_index.css'

define('o-timeline', class extends WeElement {
  css() {
    return css
  }


  render(props) {
    return <div {...extractClass(props, 'o-timeline')}>
      {props.data.map(item => (
        <div class="item">
          <div class="circle" />
          <div class="msgs">
           <div class='one'> <div class='msg left'>{item.msgA}</div> <div  class='msg'>{item.msgB}</div></div>
           <div  class='two'>  <div  class='msg left'>{item.msgC}</div> <div  class='msg'>{item.msgD}</div></div>
          </div>
        
        </div>
      ))}

    </div>
  }
})
