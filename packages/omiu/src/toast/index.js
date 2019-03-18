import { define, WeElement, extractClass, render } from 'omi'
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
            <o-icon type={'check'} color='white' class='icon' scale={4} class="weui-icon_toast" /> :
            <o-icon type={'loading'} rotate color='white' class='icon-l' scale={3} class="weui-icon_toast" />}


          <p class="weui-toast_content">{children}</p>
        </div>
      </div>
    )
  }
})

let toast = {},
  dom

toast.showLoading = function (wording) {
  if (dom) {
    document.body.removeChild(dom)
  }
  dom = render(<o-toast
    type='loading'
    show={true} >{wording || '加载中'}</o-toast>, 'body')
}

toast.hideLoading = function () {
  if (dom) {
    document.body.removeChild(dom)
    dom = null
  }
}

export default toast
