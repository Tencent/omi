import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from '../../utils/classnames'
import PullToRefresh from '../ptr/index'
import InfiniteLoader from '../infiniteloader/index'
import './page.less'
/**
 * A Component for a standard page
 *
 */
class Page extends Component {
  static propTypes = {
      /**
     * indicate to use ptr
     *
     */
    ptr: PropTypes.bool,
      /**
     * function to call when ptr refresh, pass function resolve to finish loading
     *
     */
    ptrOnRefresh: PropTypes.func,
      /**
     * indicate to use infiniteloader
     *
     */
      infiniteLoader: PropTypes.bool,
      /**
     * callback when it's requesting for more content, pass resolve function and finish function
     *
     */
      onLoadMore: PropTypes.func,
      /**
     * enable page transition
     *
     */
      transition: PropTypes.bool
  }

  static defaultProps = {
    ptr: true,
    ptrOnRefresh: resolve => {
        setTimeout(()=>{
          resolve()
            }, 1000)
        },
    infiniteLoader: true,
      onLoadMore: (resolve, finish) => {
        //mock request
        setTimeout( ()=> {
          finish()
            }, 1000)
        },
    transition: true
  }

  constructor(props) {
      super(props)

        this.state = {
      ptrRefreshing: false,
        contentScrollOnTop: true
      };

      this.handleRefresh = this.handleRefresh.bind(this)
    }

  componentWillReceiveProps(newProps) {
      if (newProps.infiniteLoader){
        this.setState({ contentScrollOnTop: true})
        } else {
        this.setState({ contentScrollOnTop: false})
        }
  }

  componentWillUnmount() {
    //console.log('unmounting page');
  }

  handleRefresh(resolve) {
      this.setState({
        ptrRefreshing: true
      }, ()=>{
        this.props.ptrOnRefresh(()=>{
          this.setState({
            ptrRefreshing: false
          })
                resolve()
            });
      })
    }

  }

  handleContentScroll(e) {
      if (e.target.scrollTop <= 0){
        this.setState({ contentScrollOnTop: true})
        } else {
        this.setState({ contentScrollOnTop: false})
        }
  }

  renderContent(children, ptr, infiniteLoader) {
      if (!infiniteLoader && !ptr) return children

        const ContentWithInfiniteLoader = <InfiniteLoader
        height="100%"
        disable={this.state.ptrRefreshing}
        onScroll={ e=> this.handleContentScroll(e) }
        onLoadMore={ this.props.onLoadMore }
      >
        { children }
      </InfiniteLoader>
        if (!ptr && infiniteLoader ) return ContentWithInfiniteLoader
        if ( ptr && !infiniteLoader) return (
        <PullToRefresh
          onRefresh={this.handleRefresh}
          disable={!this.state.contentScrollOnTop}
        >
          {children}
        </PullToRefresh>
      );

      return (
        <PullToRefresh
        onRefresh={this.handleRefresh}
        disable={!this.state.contentScrollOnTop}
      >
        {ContentWithInfiniteLoader}
        </PullToRefresh>
      );

  }

  render() {
      const { children, style, className, infiniteLoader, transition, ptr } = this.props
        const cls = classNames('weui-page', className)

        return (
        <div
          className={cls}
          style={Object.assign({}, {animationName: transition ? 'pageInRight' : ''}, style)}>
          { this.renderContent(children, ptr, infiniteLoader) }
        </div>
      );
  }
}

export default Page
