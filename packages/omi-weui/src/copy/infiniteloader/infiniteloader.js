import {define,WeElement} from 'omi'
import classNames from '../../utils/classnames'
import LoadMore from '../loadmore'

import './infiniteloader.less'

define('infinite-loader',class extends WeElement {

  static defaultProps = {
    height: '100vh',
    triggerPercent: 75,
    loaderLoadingIcon: <LoadMore loading> Loading... </LoadMore>,
    loaderDefaultIcon: <LoadMore showLine> No Data</LoadMore>,
    disable: false
  }

  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      finish: false,
      scrollTimer: null
    }

    this.scrollHandle = this.scrollHandle.bind(this)
    this.resolveLoading = this.resolveLoading.bind(this)
    this.finish = this.finish.bind(this)
  }

  finish() {
    this.setState({
      loading: false,
      finish: true
    })
  }

  resolveLoading() {
    this.setState({
      loading: false,
      finish: false
    })
  }

  scrollHandle(e) {
    if (this.props.onScroll) this.props.onScroll(e)
    if (
      this.state.loading ||
      this.state.finish ||
      this.props.disable ||
      e.target.scrollTop === 0
    )
      return

    clearTimeout(this.state.scrollTimer)
    this.setState({
      scrollTimer: setTimeout(() => {
        if (this.props.onScrollEnd) this.props.onScrollEnd()
      }, 150)
    })

    let target = e.target
    let scrollPercent = Math.floor(
      ((target.scrollTop + target.clientHeight) / target.scrollHeight) * 100
    )

    if (scrollPercent > this.props.triggerPercent) {
      this.setState({
        loading: true
      })

      this.props.onLoadMore(this.resolveLoading, this.finish)
    }
  }

  render() {
    const {
      children,
      className,
      height,
      triggerPercent,
      disable,
      loaderLoadingIcon,
      loaderDefaultIcon,
      onScrollEnd,
      onScroll,
      onLoadMore,
      ...domProps
    } = this.props
    const clx = classNames('react-weui-infiniteloader', className)

    let containerStyle = {
      height
    }

    let contentStyle = {
      overflow: disable ? 'hidden' : 'scroll'
    }

    let loaderStyle = {
      display: this.state.loading || this.state.finish ? 'block' : 'none'
    }

    return (
      <div
        className={clx}
        style={containerStyle}
        onScroll={this.scrollHandle}
        {...domProps}
      >
        <div
          className="react-weui-infiniteloader__content"
          style={contentStyle}
          ref="container"
        >
          {children}
          <div style={loaderStyle}>
            {this.state.finish
              ? loaderDefaultIcon
              : this.state.loading
                ? loaderLoadingIcon
                : false}
          </div>
        </div>
      </div>
    )
  }
})

/**
 *  A Container trigger loading once it reach certain scrolltop
 *
 */

