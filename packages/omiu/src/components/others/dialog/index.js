import { define, WeElement } from 'omi'
import css from './_index.css'
import '../../form/button'
import '../icon'

define('o-dialog', class extends WeElement {
  css() {
    return css
  }

  render(props) {
    return (
      <div class='o-dialog'>
        <div class='content'>
          <div class='header'>
            <span class='title'>添加模块</span>
            <o-icon class="close" type='close' ></o-icon>
          </div>
          <div class='main'>
            {props.children}
            <div class='footer'>
              <o-button>取消</o-button>
              <o-button type='primary'>确定</o-button>
            </div>
          </div>

        </div>
      </div>
    )
  }
})
