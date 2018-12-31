import { define, WeElement } from 'omi'
import css from './_index.css'
import '../icon'

define('o-menu', class extends WeElement {
  css() {
    return css
  }

  onClick = index => {
    this.props.onChange(index)
  }

  render(props) {
    return (
      <div class="o-menu">
        <div class="ctn">
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
          <a>
            <o-icon class="icon" color="#F2F2F2" type="chat" />
            <div class="wd">发起群聊</div>
          </a>
          <a>
            <o-icon class="icon" color="#F2F2F2" type="add-friend" />
            <div class="wd">添加朋友</div>
          </a>
          <a>
            <o-icon class="icon" color="#F2F2F2" type="scan" />
            <div class="wd">扫一扫吧</div>
          </a>
          <a>
            <o-icon class="icon" color="#F2F2F2" type="pay" />
            <div class="wd">收款支付</div>
          </a>
        </div>
        <span class="arrow" />
      </div>
    )
  }
})
