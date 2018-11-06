import { render, define, getHost } from 'omi'
import '../style/global/index.css'
import notification from '../style/_notification.scss'
import icon from '../../omi-element-ui/style/global/_icon.scss'

const offsetHeight = 94

define('el-notification', props => {
  let notifiDom = document.querySelectorAll(
    `el-notification[type="${props.ops.position}"]`
  )
  let closeBtn = null
  let position = props.ops.position.split('-')

  const close = evt => {
    document.body.removeChild(getHost(evt.currentTarget || evt.parentNode))

    notifiDom = document.querySelectorAll(
      `el-notification[type="${props.ops.position}"]`
    )

    for (let i = 0; i < notifiDom.length; i++) {
      notifiDom[i].host[1].style[position[0]] = `${offsetHeight * i +
        props.ops.offset}px`
    }
  }

  if (props.ops.duration !== 0) {
    setTimeout(() => {
      close(closeBtn)
    }, 4500)
  }
  return [
    <style>{notification + icon}</style>,
    <div
      class={`el-notification ${position[1]}`}
      style={`${position[0]}: ${offsetHeight * (notifiDom.length - 1) +
        props.ops.offset}px; z-index: 2129;`}
    >
      {props.ops.type && (
        <i class={`el-notification__icon el-icon-${props.ops.type}`} />
      )}
      <div
        class={`el-notification__group ${props.ops.type ? 'is-with-icon' : ''}`}
      >
        <h2 class="el-notification__title">{props.ops.title}</h2>
        <div class="el-notification__content">
          <p>{props.ops.message}</p>
        </div>
        {props.ops.showClose ? (
          <div
            ref={e => (closeBtn = e)}
            class="el-notification__closeBtn el-icon-close"
            onClick={evt => close(evt)}
          />
        ) : (
          <div ref={e => (closeBtn = e)} />
        )}
      </div>
    </div>
  ]
})

const Notification = function(opts) {
  opts.position = opts.position || 'top-right'
  opts.offset = opts.offset || 16
  opts.showClose = opts.showClose === false ? false : true

  render(<el-notification type={opts.position} ops={opts} />, document.body)
}

export default Notification
