import { define, WeElement } from 'omi'
import classNames from '../../utils/classnames'
import css from '../../style/widget/weui-tips/_weui-mask.less'

/**
 * screen mask, use in `Dialog`, `ActionSheet`, `Popup`.
 *
 */

define('ow-mask', class extends WeElement {

  css(){
    return css
  }

  render() {
    const { transparent, className, ...others } = this.props
    const clz = classNames({
      'weui-mask': !transparent,
      'weui-mask_transparent': transparent
    })
    return <div className={clz} {...others} />
  }
})
