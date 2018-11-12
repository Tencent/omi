import {define} from 'omi'

/**
 * Evenly distribute flex items
 *
 */

 define('flex-item',props=>{
   const { component, children, ...others } = props
  return (
    <component className="weui-flex__item" {...others}>
      {children}
    </component>
  )
 })
FlexItem.defaultProps = {
  component: 'div'
}

export default FlexItem
