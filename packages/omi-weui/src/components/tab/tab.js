import React from 'react'
import PropTypes from 'prop-types'
import classNames from '../../utils/classnames'

import TabBody from './tab_body'
import TabBodyItem from './tab_body_item'
import NavBar from './navbar'
import NavBarItem from './navbar_item'
import TabBar from './tabbar'
import TabBarItem from './tabbar_item'
import TabBarIcon from './tabbar_icon'
import TabBarLabel from './tabbar_label'

/**
 *  Weui Tab component, can be auto mount items or mannually display items
 *
 */
export default class Tab extends React.Component {
  static propTypes = {
    /**
     * layout of the tab, auto mount components when set to `navbar` or `tabbar`
     *
     */
    type: PropTypes.string,
    /**
     * default select index
     *
     */
    defaultIndex: PropTypes.number,
    onChange: PropTypes.func
  }

  static defaultProps = {
    type: 'normal',
    defaultIndex: 0
  }

  state = {
    index: this.props.defaultIndex
  }

  handleHeaderClick(idx) {
    this.setState({ index: idx })
    if (this.props.onChange) this.props.onChange(idx)
  }

  parseChild(childrenInput) {
    const ChildHeaders = []
    const ChildContents = []

    React.Children.map(childrenInput, child => {
      if (!child) return
      const { children, type, ...others } = child.props
      if (child.type === TabBarItem || child.type === NavBarItem) {
        ChildHeaders.push(child)
        if (children) ChildContents.push(<TabBodyItem children={children} />)
      } else if (child.type === TabBodyItem) {
        ChildContents.push(child)
      }
    })

    return { ChildHeaders, ChildContents }
  }

  renderBar(type, children, cls) {
    const { ChildHeaders, ChildContents } = this.parseChild(children)

    let _headers = ChildHeaders.map((item, idx)=>{
      return React.cloneElement(item, {
        key: idx,
        active: this.state.index === idx,
        onClick: this.handleHeaderClick.bind(this, idx, item)
      })
    })

    let _contents = ChildContents.map((item, idx) => {
      return React.cloneElement(item, {
        key: idx,
        active: this.state.index === idx,
        tabIndex: idx
      })
    })

    if (type === 'tabbar') {
      return (
        <div className={cls}>
          <TabBody>{_contents}</TabBody>
          <TabBar>{_headers}</TabBar>
        </div>
      )
    }
    else if (type === 'navbar'){
      return (
        <div className={cls}>
          <NavBar>{_headers}</NavBar>
          <TabBody>{_contents}</TabBody>
        </div>
      )
    }

    return false
  }

  render() {
    const { children, className, type, ...others } = this.props
    const divProps = Object.assign({}, others)
    delete divProps.defaultIndex

    const cls = classNames({
        'weui-tab': true
      },
      className
    if (type === 'normal') {
      return (
        <div className={cls} {...divProps}>
          {children}
        </div>
      )
    }

    return this.renderBar(type, children, cls)
  }
}
