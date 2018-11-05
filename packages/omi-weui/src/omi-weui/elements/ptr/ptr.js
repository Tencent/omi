import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import classNames from '../../utils/classnames'
import Icon from '../icon/'
import LoadMore from '../loadmore'

import './ptr.less'
/**
 *  A Pull to refresh container enable user to pull the container and refresh it's content
 *
 */
class PullToRefresh extends Component {
  static propTypes = {
      /**
     * height for the container, use string like '10px', default for '100%'
     *
     */
    height: PropTypes.string,
      /**
     * height for the loader
     *
     */
    loaderHeight: PropTypes.number,
      /**
     * element(icon) for default loader, function require, pass in pulldown progress
     *
     */
    loaderDefaultIcon: PropTypes.func,
      /**
     * element(icon) for loading loader
     *
     */
    loaderLoadingIcon: PropTypes.any,
      /**
     * callback when refresh is request, pass resolve function
     *
     */
    onRefresh: PropTypes.func,
      /**
     * disable the loader
     *
     */
    disable: PropTypes.bool
  }

  static defaultProps = {
      height: '100%',
      loaderHeight: 100,
      loaderDefaultIcon: (progress) => {
        let style = {
        transform: `rotate(-${progress !== 100 ? progress * 1.8 : 0}deg)`,
        color: progress !== 100 ? '#5f5f5f' : '#1AAD19'
        };
      return (
        <div style={{ flex: 1, padding: '5px' }}>
            <Icon value={ progress !== 100 ? 'download' : 'success' } style={style}/>
          </div>
        );
    },
      loaderLoadingIcon: <LoadMore loading></LoadMore>,
      onRefresh: (resolve, reject) => setTimeout( ()=> resolve(), 1000),
      disable: false
  }

  constructor(props) {
      super(props)

        this.state = {
        pullPercent: 0,
      touching: false,
        ogY: 0,
        touchId: undefined,
        animating: false,
        loading: false,
      initScrollTop: 0
      };

      this.handleTouchStart = this.handleTouchStart.bind(this)
        this.handleTouchMove = this.handleTouchMove.bind(this)
        this.handleTouchEnd = this.handleTouchEnd.bind(this)
        this.resolveRefresh = this.resolveRefresh.bind(this)
    }

  resolveRefresh() {
      this.setState({
        loading: false,
        animating: true,
        pullPercent: 0
      }, ()=>{
        setTimeout(()=>this.setState({ animating: false}), 500)
        });
    )
  }

  handleTouchStart(e) {
      if (this.state.touching || this.state.loading || this.props.disable) return

        let $content = ReactDOM.findDOMNode(this.refs.content)

        this.setState({
      touching: true,
        touchId: e.targetTouches[0].identifier,
      ogY:
        this.state.pullPercent === 0
          ? e.targetTouches[0].pageY
          : e.targetTouches[0].pageY - this.state.pullPercent,
      animating: false,
      initScrollTop: $content.scrollTop
      })
    }

  handleTouchMove(e) {
      if (!this.state.touching || this.state.loading || this.props.disable) return
        if (e.targetTouches[0].identifier !== this.state.touchId) return


        const pageY = e.targetTouches[0].pageY
        let diffY = pageY - this.state.ogY

        //if it's scroll
        if (diffY < 0) return

        //if it's not at top
        let $content = ReactDOM.findDOMNode(this.refs.content)
        if ($content.scrollTop > 0) return

        //prevent move background
        e.preventDefault()

        diffY = ( diffY - this.state.initScrollTop ) > 100 ? 100 : ( diffY - this.state.initScrollTop )

        this.setState({
      pullPercent: diffY
      })
    }

  handleTouchEnd(e) {
      if (!this.state.touching || this.state.loading || this.props.disable) return

        let pullPercent = this.state.pullPercent
        let loading = false

        if (pullPercent === 100) {
        loading = true
        }
      else {
        pullPercent = 0
        }

      this.setState({
        touching: false,
        ogY: 0,
        touchId: undefined,
        initScrollTop: 0,
        animating: loading,
        pullPercent,
        loading
      }, ()=>{
        //triger after ui change
        if (loading) this.props.onRefresh(this.resolveRefresh)
        });
  }

  render() {
      const { className, children, height, loaderHeight, loaderDefaultIcon, loaderLoadingIcon, onRefresh, disable, ...domProps } = this.props
        let cls = classNames('react-weui-ptr', className)

        let containerStyle = {
        height
      };

      let loaderStyle = {
      //transform: `translate(0, ${this.state.pullPercent / 2}px)`,
        height: loaderHeight,
        marginTop: `${ -loaderHeight + (this.state.pullPercent / (100 / loaderHeight))}px`,
        transition: this.state.animating ? 'all .5s' : 'none'
      };

    return (
        <div className={cls} style={ containerStyle } {...domProps}>
          <div
            className="react-weui-ptr__loader"
            style={loaderStyle}
          >
            {
              this.state.loading ?
                loaderLoadingIcon :
                loaderDefaultIcon(this.state.pullPercent)
            }
        </div>
          <div
          className="react-weui-ptr__content"
            ref="content"
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
            onTouchEnd={this.handleTouchEnd}
          >
            { children }
          </div>
      </div>
      );
  }
}

export default PullToRefresh
