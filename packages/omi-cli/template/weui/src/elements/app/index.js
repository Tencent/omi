import { define, WeElement } from 'omi'
import style from './_index.css'
import logo from './logo.png'
import iconFooter from './icon_footer.png'
import iconNavForm from './icon_nav_form.png'
import iconNavLayout from './icon_nav_layout.png'
import iconNavFeedback from './icon_nav_feedback.png'
import iconNavNav from './icon_nav_nav.png'
import iconNavSearch from './icon_nav_search.png'
import iconNavZIndex from './icon_nav_z-index.png'
import 'omi-weui/cells'


define('my-app', class extends WeElement {
  static observe = true

  css() {
    return style
  }

  data = {
    visible:{
      form: true,

    }
  }
  clickForm = ()=>{
    this.data.visible.form = !this.data.visible.form
  }

  render(props, data) {
    return (
      <div class="page home">
        <div class="page__hd">
          <h1 class="page__title">
            <img src={logo} alt="WeUI" style="height:21px;" />
          </h1>
          <p class="page__desc">WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。</p>
        </div>
        <div class="page__bd page__bd_spacing">
          <ul>
            <li class={data.visible.form && 'js_show'} onClick={this.clickForm}>
              <div class="weui-flex js_category">
                <p class="weui-flex__item">表单</p>
                <img src={iconNavForm} alt="" />
              </div>
              <div class="page__category js_categoryInner">
                <ow-cells class="page__category-content">
                  <ow-cell>Button</ow-cell>
                  <ow-cell>Input</ow-cell>
                  <ow-cell>List</ow-cell>
                  <ow-cell>Slider</ow-cell>
                  <ow-cell>Uploader</ow-cell>
                </ow-cells>
              </div>
            </li>
            <li>
              <div class="weui-flex js_category">
                <p class="weui-flex__item">基础组件</p>
                <img src={iconNavLayout} alt="" />
              </div>
              <div class="page__category js_categoryInner">
                <ow-cells>
                  <ow-cell>Article</ow-cell>
                  <ow-cell>Badge</ow-cell>
                  <ow-cell>Flex</ow-cell>
                  <ow-cell>Footer</ow-cell>
                  <ow-cell>Gallery</ow-cell>
                  <ow-cell>Grid</ow-cell>
                  <ow-cell>Icons</ow-cell>
                  <ow-cell>Loadmore</ow-cell>
                  <ow-cell>Panel</ow-cell>
                  <ow-cell>Preview</ow-cell>
                  <ow-cell>Progress</ow-cell>
                </ow-cells>
              </div>
            </li>
            <li>
              <div class="weui-flex js_category">
                <p class="weui-flex__item">操作反馈</p>
                <img src={iconNavFeedback} alt="" />
              </div>
              <div class="page__category js_categoryInner">
                <ow-cells>
                  <ow-cell>Actionsheet</ow-cell>
                  <ow-cell>Dialog</ow-cell>
                  <ow-cell>Msg</ow-cell>
                  <ow-cell>Picker</ow-cell>
                  <ow-cell>Toast</ow-cell>
                </ow-cells>
              </div>
            </li>
            <li>
              <div class="weui-flex js_category">
                <p class="weui-flex__item">导航相关</p>
                <img src={iconNavNav} alt="" />
              </div>
              <div class="page__category js_categoryInner">
                <ow-cells>
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
                <ow-cells>
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
          <a href="javascript:home()"><img src={iconFooter} /></a>
        </div>
      </div>
    )
  }
})
