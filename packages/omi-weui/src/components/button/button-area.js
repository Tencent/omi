import { define, WeElement } from 'omi'

import classNames from '../../utils/classnames'

define('button-area', class extends WeElement {
  static defaultProps = {
    direction: 'vertical'
  }

  render() {
    const { direction, children, className } = this.props
    const cls = classNames({
      'weui-btn-area': true,
      'weui-btn-area_inline': direction === 'horizontal',
      [className]: className
    })

    return <div className={cls}>{children}</div>
  }
})
