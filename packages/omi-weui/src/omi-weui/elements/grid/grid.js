import React from 'react'
import PropTypes from 'prop-types'
import classNames from '../../utils/classnames'
import GridIcon from './grid_icon'
import GridLabel from './grid_label'

/**
 * WeUI Grid wrapper, contain elements of `GridIcon` and `GridLabel`
 *
 */
export default class Grid extends React.Component {
  static propTypes = {
    /**
     * Label string for grid
     *
     */
    label: PropTypes.string,
    /**
     * Icon placeholder
     *
     */
    icon: PropTypes.any,
    /**
     * pass in an component to replace Grid but apply same style
     */
    component: PropTypes.func
  }

  static defaultProps = {
    label: '',
    icon: false
  }

  render() {
    const {children, icon, label, className, component, ...others} = this.props
    const cls = classNames({
      'weui-grid': true
    },
      className
    var DefaultComponent = 'a'
    let GridComponent = component ? component : DefaultComponent

    return (
      <GridComponent className={cls} {...others}>
        {icon ? <GridIcon>{icon}</GridIcon> : false}
        {children}
        {label ? <GridLabel>{label}</GridLabel> : false}
      </GridComponent>
    );
  }
}
