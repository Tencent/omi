import { define, WeElement, extractClass, h, render } from 'omi'
import * as css from './index.scss'
import '../icon'

//@ts-ignore
import '../theme.ts'

define('m-toast', class extends WeElement {
  static defaultProps = {
    show: false
  }

  static css = css

  render(props) {
    const cls = extractClass(props, 'm-toast')
    const { type, show, children, iconSize, ...others } = props

    return (
      <div style={{ display: show ? 'block' : 'none' }}>
        <div {...cls} {...others}>
          <i class="icon" ><svg viewBox="0 0 1024 1024" {...extractClass({},{
            'rotate': props.rotate
          })} width="3em" height="3em" fill="white" aria-hidden="true" ><path d={props.path} ></path></svg><div style="color: white;"></div></i>
          <p class="m-toast_content">{children}</p>
        </div>
      </div>
    )
  }
})

let toast: any = {},
  dom

toast.showLoading = function (text) {
  if (dom) {
    document.body.removeChild(dom)
  }
  dom = render(<m-toast
    path='M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z'
    rotate={true}
    show={true} >{text || '加载中'}</m-toast>, 'body')
}

toast.hideLoading = function () {
  if (dom) {
    document.body.removeChild(dom)
    dom = null
  }
}

toast.show = function ({path, text, rotate}) {
  if (dom) {
    document.body.removeChild(dom)
  }
  dom = render(<m-toast
    show={true}
    rotate={rotate}
    path={path}
  >{text || ''}</m-toast>, 'body')
}

toast.hide = toast.hideLoading

export default toast
