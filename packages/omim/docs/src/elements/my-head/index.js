import { define, WeElement } from 'omi'
import css from './_index.css'
import logo from './omi-logo2019.svg'

define('my-head', class extends WeElement {
  toggleMenus = evt => {
    this.store.toogleSidebar()
  }

  css() {
    return css
  }

  render() {
    return (
      <div class="head bord-btm">
        <div class="m_menu" onClick={this.toggleMenus}>
          <img src={require('./menu.png')} alt="" />
        </div>

        <a href="http://omijs.org">
          <img class="logo" src={logo} />
        </a>
        <ul class="menu">
          <li class="github_li">
            <a href={`https://github.com/Tencent/omi/tree/master/packages/omim/docs/src/docs/${this.store.lan}`}>{this.store.lan === 'en'?'Edit Docs':'编辑文档'}</a>
          </li>
          <li style='color:#aaa;'>|</li>
          <li class="github_li">
            <a href="https://github.com/Tencent/omi/tree/master/packages/omim">{this.store.lan === 'en'?'Github':'源码'}</a>
          </li>
          <li style='color:#aaa;'>|</li>
          <li class="github_li m_show">
            {this.store.lan === 'en' ? (
              <a href="zh-cn.html">中文</a>
            ) : (
              <a href="index.html">English</a>
            )}
          </li>
        </ul>
      </div>
    )
  }
})
