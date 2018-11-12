import { define, WeElement } from 'omi'
import classNames from '../../utils/classnames'
import Icon from '../icon'

/**
 * Loadmore Indicators.
 *
 */
const defaultProps = {
  loading: false,
  showLine: false,
  showDot: false
}

define('load-more', props => {
  
  if (!props) props = defaultProps
  const { className, children, loading, showLine, showDot, ...others } = props
  const cls = classNames({
    'weui-loadmore': true,
    'weui-loadmore_line': showLine,
    'weui-loadmore_dot': showDot,
    [className]: className
  })

  return (
    <div className={cls} {...others}>
      {loading ? <Icon value="loading" /> : false}
      <span className="weui-loadmore__tips">{children}</span>
    </div>
  )
})
