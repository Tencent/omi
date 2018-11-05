import { define, WeElement } from "omi";

import '../style/global/index.css'
import dropdown from "../style/_dropdown.scss"
import popper from "../style/_popper.scss"
import icon from '../../omi-element-ui/style/global/_icon.scss'

import '../../omi-element-ui/el-button'
import '../../omi-element-ui/el-button-group'

define('el-dropdown', class extends WeElement {
  data = {
    showPopper: false,
    left: 0,
    top: 0,
    arrow_left: 0,
    trigger: ''
  }

  css() {
    return dropdown + popper + icon
  }

  clickHandle = (evt) => {
    if(this.data.showPopper) {
      this.hide()
    }else{
      this.show()
    }
  }


  show = () => {
    this.data.showPopper = true;
    const boxButton = this.dropElm.getBoundingClientRect()
    const boxList = this.menuElm.getBoundingClientRect()
    this.data.left = boxButton.left - (boxList.width - boxButton.width) / 2
    this.data.top = boxButton.top + boxButton.height
    this.data.arrow_left = boxButton.width / 2;
    this.update();
  }

  hide = () => {
    this.data.showPopper = false;
    this.update();

  }

  render(props, data) {
    data.trigger = props.trigger || 'hover';
    console.log(props);

    const triggerElm = props.splitButton ? (
              <el-button-group style="color:#fff">
                <el-button size={props.size} type={props.type}>
                  <slot></slot>
                </el-button>
                <el-button size={props.size} type={props.type}  class="el-dropdown__caret-button" style="padding: 0px;">
                    <i class="el-dropdown__icon el-icon-arrow-down"></i>
                </el-button>
              </el-button-group>
            ) : props.type ? (
              <el-button type={props.type}>
                <slot></slot>
              </el-button>
            ) : (
              <slot></slot>
            )

    const box = props.trigger === 'click' ? (
      <div ref={e => this.dropElm = e} class="el-dropdown" onClick={this.clickHandle}>
        {triggerElm}
      </div>
    ) : (
      <div ref={e => this.dropElm = e} class="el-dropdown" onMouseleave={this.hide} onMouseenter={this.show}>
        {triggerElm}
      </div>
    )




    const popper = (
      <ul class="el-dropdown-menu el-popper" ref={e => this.menuElm = e} style={`transform-origin: center top 0px;position: absolute; left:${data.left}px; top:${data.top}px; z-index: 2032;visibility: ${data.showPopper ? 'visible' : 'hidden'};`}>
        {props.menu}
      </ul>
    )



    return (
      <div>
        {box}
        {popper}
      </div>

    )
  }

})
