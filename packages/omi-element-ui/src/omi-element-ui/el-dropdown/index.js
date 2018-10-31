import { define, WeElement } from "omi";
import "../style/global/index.css";
import icon from '../style/global/_icon.scss'
import style from "../style/_dropdown.scss"

define('el-dropdown', class extends WeElement {
  css() {
    return icon + style
  }

  install() {
    this.data.show = false
    this.data.left = 0
    this.data.top = 0
  }

  render(props, data) {

    return [
      <div class="el-dropdown" ref={e => { this.dd = e }} style="cursor:pointer;">
        <span class={`el-dropdown-${props.type} el-dropdown-selfdefine`} onClick={this.onBtnClick}>
          {props.text}<i class={`el-icon-${props.icon} el-icon--${props.iconLeft ? 'left' : 'right'}`}></i>
        </span>
      </div>,
      <ul ref={e => { this.list = e }} class="el-dropdown-menu el-popper" style={`transform-origin: center top 0px;left:${data.left}px;top:${data.top}px; z-index: 2016; visibility: ${data.show ? 'visible' : 'hidden'};`}>
        {props.items.map((item) => {
          return <li tabindex="-1" class={`el-dropdown-menu__item ${item.disabled?'is-disabled':''} ${item.divided?'el-dropdown-menu__item--divided':''}`} onClick={()=>{this.onItemClick(item)}}>{item.text}</li>
        })}
      </ul>
    ]
  }

  onItemClick = (item) => {
    this.fire('itemclick', item)
    this.data.show = false
    this.update()
  }

  onBtnClick = () => {
    this.data.show = !this.data.show
    if (this.data.show) {

      const boxButton = this.dd.getBoundingClientRect()

      const boxList = this.list.getBoundingClientRect()
      this.data.left = boxButton.left - (boxList.width - boxButton.width) / 2
      this.data.top = boxButton.top + boxButton.height
    }
    this.update()
  }
})