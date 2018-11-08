import { define, WeElement } from 'omi'

import '../style/global/index.css'
import dropdown from '../style/_dropdown.scss'
import popper from '../style/_popper.scss'
import icon from '../../omi-element-ui/style/global/_icon.scss'

import '../../omi-element-ui/el-button'
import '../../omi-element-ui/el-button-group'

define('el-dropdown', class extends WeElement {
  data = {
    showPopper: false,
    left: 0,
    top: 0,
    arrow_left: 0,
    trigger: '',
    timer: null
  }

  css() {
    return dropdown + popper + icon
  }

  clickHandle = evt => {
    if (this.data.showPopper) {
      this.hide()
    } else {
      this.show()
    }
  }

  show = () => {
    clearTimeout(this.data.timer)
    this.data.showPopper = true
    const boxButton = this.dropElm.getBoundingClientRect()
    const boxList = this.menuElm.getBoundingClientRect()
    // this.data.left = (boxButton.width + 60 - boxList.width) / 2;
    this.data.left = boxButton.left - (boxList.width - boxButton.width) / 2
    // this.data.left = boxButton.left + boxButton.width / 2 - boxButton.width / 2
    this.data.top = boxButton.top + boxButton.height
    // this.data.top = boxButton.height + 30;
    this.data.arrow_left = boxButton.width / 2
    this.update()
  }

  hide = () => {
    this.data.timer = setTimeout(() => {
      this.data.showPopper = false
      this.update()
    }, 200)
  }

  render(props, data) {
    data.trigger = props.trigger || 'hover'

    props.size = props.size || 'medium'

    const triggerElm = props.splitButton ? (
      <el-button-group style="color:#fff">
        <el-button size={props.size} type={props.type}>
          <slot />
        </el-button>
        <el-button
          size={props.size}
          type={props.type}
          style={{
            'border-left': '1px solid'
          }}
        >
          <i class="el-dropdown__icon el-icon-arrow-down" />
        </el-button>
      </el-button-group>
    ) : props.type ? (
      <el-button type={props.type}>
        <slot />
      </el-button>
    ) : (
      <slot />
    )

    const box =
      props.trigger === 'click' ? (
        <div
          ref={e => (this.dropElm = e)}
          class="el-dropdown"
          onClick={this.clickHandle}
        >
          {triggerElm}
        </div>
      ) : (
        <div
          ref={e => (this.dropElm = e)}
          class="el-dropdown"
          onMouseleave={this.hide}
          onMouseenter={this.show}
        >
          {triggerElm}
        </div>
      )

    const popper = (
      <ul
        class="el-dropdown-menu el-popper"
        onClick={this.hide}
        onMouseenter={this.show}
        onMouseleave={this.hide}
        ref={e => (this.menuElm = e)}
        style={`transform-origin: center top 0px;position: fixed; left:${
          data.left
        }px; top:${data.top}px; z-index: 2032;visibility: ${
          data.showPopper ? 'visible' : 'hidden'
        };`}
      >
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

function renderMenu() {
  render(<el-notification type={opts.position} ops={opts} />, document.body)
}
