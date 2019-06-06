import { define, WeElement } from 'omi'
import logo from './omi-logo2019.svg'

define('my-head', class extends WeElement {
  static css = require('./_index.css')

  static use = [
    'position'
  ]
  
  toggleMenus = evt => {
    this.store.toogleSidebar()
    evt.stopPropagation()
  }

  hideSidebar = evt => {
    this.store.hideSidebar()
  }

  render() {
    return (
      <div class="head bord-btm" onClick={this.hideSidebar}>
        <div class="m_menu" onClick={this.toggleMenus}>
          <img src={require('./menu.png')} alt="" />
        </div>

        <a href="http://omijs.org">
          <img class="logo" src={logo} />
        </a>
        <ul class="menu">
          <li class="github_li">
            <a href={this.store.data.lan === 'en'?'https://tencent.github.io/omi/packages/omim/docs/build/index.html':'https://tencent.github.io/omi/packages/omim/docs/build/cn.html'}>{this.store.data.lan === 'en'?'Omim Docs':'Omim文档'}</a>
          </li>
          <li style='color:#aaa;'>|</li>
          <li class="github_li">
            <a href="https://github.com/Tencent/omi/" target="_blank">Github</a>
          </li>
          <li style='color:#aaa;'>|</li>
          <li class="github_li m_show">
            {this.store.data.lan === 'en' ? (
              <a href={`cn.html${location.hash}`}>中文</a>
            ) : (
              <a href={`index.html${location.hash}`}>English</a>
            )}
          </li>
        </ul>
      </div>
    )
  }
})
