import { define, WeElement } from 'omi'
import classNames from '../../utils/classnames'
import css from '../../style/widget/weui-page/_weui-article.less'

/**
 * Use to format WeUI style contents
 *
 */
define('ow-article', class extends WeElement {
  css(){
    return css
  }
  render() {
    const { className, children, ...others } = this.props
    const cls = classNames({
      'weui-article': true,
      [className]: className
    })
    return (
      <article className={cls} {...others}>
        {children}
      </article>
    )
  }
})
