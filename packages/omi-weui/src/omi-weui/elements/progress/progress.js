import {define,WeElement} from 'omi'
import classNames from '../../utils/classnames'
import Icon from '../icon'

/**
 *  progress bar
 *
 */
define('ow-progress',props=>{
  const { className, showCancel, value, onClick, ...others } = props
  const cls = classNames({
    'weui-progress': true,
    [className]: className
  })

  let pgWdith = value > 100 ? 100 : value < 0 ? 0 : value

  return (
    <div className={cls} {...others}>
      <div className="weui-progress__bar">
        <div
          className="weui-progress__inner-bar"
          style={{ width: `${pgWdith}%` }}
        />
      </div>

      {showCancel ? (
        <a
          href="javascript:;"
          className="weui-progress__opr"
          onClick={e => {
            if (onClick) onClick(e)
          }}
        >
          <Icon value="cancel" />
        </a>
      ) : (
        false
      )}
    </div>
  )
})
Progress.defaultProps = {
  value: 0,
  showCancel: true
}
