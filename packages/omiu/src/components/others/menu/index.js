import { define, WeElement } from 'omi'
import css from './_index.css'
import '../icon'

define('o-menu', class extends WeElement {
  css() {
    return css
  }

  onClick = (index) => {
    this.props.onChange(index)
  }

  render(props) {
    return <div class='o-menu'><ul>
      {/* {props.children.map((item, index) => {
        const props = {}
        const isActive = item.attributes && item.attributes.active
        
        if(isActive){
          props.class= 'active'
        }else{
          props.onClick= () =>  this.onClick(index) 
        }
        
        return <li {...props}>      
          {item.children[0]}
        </li>
      })} */}
      <li>
        <o-icon class='icon' type='chat'></o-icon>
        <div class='wd'>发起群聊</div>
      </li>
      <li>
        <o-icon class='icon' type='add-friend'></o-icon>
        <div class='wd'>添加朋友</div>
      </li>
      <li>
        <o-icon class='icon' type='scan'></o-icon>
        <div class='wd'>扫一扫吧</div>
      </li>
      <li>
        <o-icon class='icon' type='pay'></o-icon>
        <div class='wd'>收款支付</div>
      </li>
    </ul>
    <span class='arrow'></span></div>
  }
})
