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
            <span>标题</span>

            <o-icon class="abc" type='close' ></o-icon>
          </div>
          {props.children}
          <div class='footer'>
            <o-button>取消</o-button>
            <o-button type='primary'>确定</o-button>
          </div>
        </div>
      </div>
    )
  }
})
