import { define, WeElement } from 'omi'
import style from './_index.css'
import iconFooter from './icon_footer.png'
import iconNavForm from './icon_nav_form.png'
import iconNavLayout from './icon_nav_layout.png'
import iconNavFeedback from './icon_nav_feedback.png'
import iconNavNav from './icon_nav_nav.png'
import iconNavSearch from './icon_nav_search.png'
import iconNavZIndex from './icon_nav_z-index.png'
import 'omi-weui/cells'
import 'omi-router'
import '../button-panel'
import '../list-panel'
import '../article-panel'
import '../dialog-panel'
import '../icon-panel'
import '../loading-panel'
import '../msg-panel'
import '../toptip-panel'
import '../selection-panel'
import '../switch-panel'
import '../slider-panel'
import route from 'omi-router'

define('my-app', class extends WeElement {
  static observe = true

  css() {
    return style
  }

  data = {
    visible: {
      form: false,
      layout: false,
      feedback: false
    },
    tag: null,
    atHome: true
  }

  install() {
    route('/button', () => {
      this.data.tag = 'button-panel'
      this.data.atHome = false
    })

    route('/list', () => {
      this.data.tag = 'list-panel'
      this.data.atHome = false
    })

    route('/msg', () => {
      this.data.tag = 'msg-panel'
      this.data.atHome = false
    })

    route('/selection', () => {
      this.data.tag = 'selection-panel'
      this.data.atHome = false
    })

    route('/toptip', () => {
      this.data.tag = 'toptip-panel'
      this.data.atHome = false
    })

    route('/switch', () => {
      this.data.tag = 'switch-panel'
      this.data.atHome = false
    })


    route('/icon', () => {
      this.data.tag = 'icon-panel'
      this.data.atHome = false
    })

    route('/loading', () => {
      this.data.tag = 'loading-panel'
      this.data.atHome = false
    })

    

    route('/article', () => {
      this.data.tag = 'article-panel'
      this.data.atHome = false
    })

    route('/dialog', () => {
      this.data.tag = 'dialog-panel'
      this.data.atHome = false
    })

    route('/slider', () => {
      this.data.tag = 'slider-panel'
      this.data.atHome = false
    })


    route('*', () => {
      this.data.atHome = true
    })
  }

  clickForm = () => {
    this.data.visible.form = !this.data.visible.form
  }

  clickLayout = () => {
    this.data.visible.layout = !this.data.visible.layout
  }

  clickFeedback = () => {
    this.data.visible.feedback = !this.data.visible.feedback
  }
  
  render(props, data) {
    return (
      <div>
        <div class="page home">
          <div class="page__hd">
            <h1 class="page__title">
              Omi-WeUI
            </h1>
            <p class="page__desc">
              WeUI
              是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。
            </p>
          </div>
          <div class="page__bd page__bd_spacing">
            <ul>
              <li class={data.visible.form && 'js_show'}>
                <div class="weui-flex js_category" onClick={this.clickForm}>
                  <p class="weui-flex__item">表单</p>
                  <img src={iconNavForm} alt="" />
                </div>
                <div class="page__category js_categoryInner">
                  <ow-cells class="page__category-content">
                    <ow-cell href="#/button">Button</ow-cell>
                    <ow-cell href="#/selection">Selection</ow-cell>
                    <ow-cell href="#/list">List</ow-cell>
                    <ow-cell href="#/slider">Slider</ow-cell>
                    <ow-cell href="#/switch">Switch</ow-cell>
                  </ow-cells>
                </div>
              </li>
              <li class={data.visible.layout && 'js_show'}>
                <div class="weui-flex js_category"  onClick={this.clickLayout}>
                  <p class="weui-flex__item">基础组件</p>
                  <img src={iconNavLayout} alt="" />
                </div>
                <div class="page__category js_categoryInner">
                  <ow-cells class="page__category-content">
                    <ow-cell href="#/article">Article</ow-cell>
                    <ow-cell>Badge</ow-cell>
                    <ow-cell>Flex</ow-cell>
                    <ow-cell>Footer</ow-cell>
                    <ow-cell>Gallery</ow-cell>
                    <ow-cell>Grid</ow-cell>
                    <ow-cell href="#/icon">Icons</ow-cell>
                    <ow-cell>Loadmore</ow-cell>
                    <ow-cell>Panel</ow-cell>
                    <ow-cell>Preview</ow-cell>
                    <ow-cell>Progress</ow-cell>
                  </ow-cells>
                </div>
              </li>
              <li class={data.visible.feedback && 'js_show'}>
                <div class="weui-flex js_category" onClick={this.clickFeedback}>
                  <p class="weui-flex__item">操作反馈</p>
                  <img src={iconNavFeedback} alt="" />
                </div>
                <div class="page__category js_categoryInner">
                  <ow-cells class="page__category-content">
                    <ow-cell>Actionsheet</ow-cell>
                    <ow-cell href="#/dialog">Dialog</ow-cell>
                    <ow-cell href="#/msg">Msg</ow-cell>
                    <ow-cell href="#/toptip">Toptip</ow-cell>
                    <ow-cell>Picker</ow-cell>
                    <ow-cell>Toast</ow-cell>
                    <ow-cell href="#/loading">Loading</ow-cell>
                  </ow-cells>
                </div>
              </li>
              <li>
                <div class="weui-flex js_category">
                  <p class="weui-flex__item">导航相关</p>
                  <img src={iconNavNav} alt="" />
                </div>
                <div class="page__category js_categoryInner">
                  <ow-cells class="page__category-content">
                    <ow-cell>Navbar</ow-cell>
                    <ow-cell>Tabbar</ow-cell>
                  </ow-cells>
                </div>
              </li>
              <li>
                <div class="weui-flex js_category">
                  <p class="weui-flex__item">搜索相关</p>
                  <img src={iconNavSearch} alt="" />
                </div>
                <div class="page__category js_categoryInner">
                  <ow-cells class="page__category-content">
                    <ow-cell>Search Bar</ow-cell>
                  </ow-cells>
                </div>
              </li>
              <li>
                <div class="weui-flex js_item" data-id="layers">
                  <p class="weui-flex__item">层级规范</p>
                  <img src={iconNavZIndex} alt="" />
                </div>
              </li>
            </ul>
          </div>
          <div class="page__ft">
            <a href="javascript:home()">
              <img src={iconFooter} />
            </a>
          </div>
        </div>
        <div
          class={data.atHome ? 'page detail slideOut' : 'page detail slideIn'}
        >
          <data.tag />
        </div>
      </div>
    )
  }
})
