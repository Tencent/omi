import { define, WeElement, extractClass } from 'omi'
import css from './_index.css'
import '../icon'

define('o-toast', class extends WeElement {
  static defaultProps = {
    type: 'success',
    show: false
  }

  css() {
    return css
  }

  render(props) {
    const cls = extractClass(props, 'weui-toast')
    const { type, show, children, iconSize, ...others } = props
    
    return (
      <div style={{ display: show ? 'block' : 'none' }}>
        <div {...cls} {...others}>
          {type === 'success' ? 
            <o-icon type={'check'}  color='white' class='icon' scale={4} class="weui-icon_toast" />:
            <o-icon type={'loading'} rotate color='white' class='icon-l' scale={3} class="weui-icon_toast" />}
          

          <p class="weui-toast_content">{children}</p>
        </div>
      </div>
    )
  }
})
