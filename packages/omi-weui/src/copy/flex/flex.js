import { define } from 'omi'

/**
 * FlexItem Container
 *
 */

define('ow-flex', props => {
  <div className="weui-flex" {...props}>
    {props.children}
  </div>
})
