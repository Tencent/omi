import { define, WeElement } from 'omi'
import css from './_index.css'
import '../../form/button'

define('o-dialog', class extends WeElement {
  css() {
    return css
  }
  render(props) {
    console.log(this)
    return <div class='o-dialog'>
    <div class='header'>
    <span>标题</span>

    <span>关闭按钮</span>
    </div>
    {props.children}
    <div class='footer'>
      <o-button>取消</o-button>
      <o-button type='primary'>确定</o-button>
    </div>
    </div>
  }
})
