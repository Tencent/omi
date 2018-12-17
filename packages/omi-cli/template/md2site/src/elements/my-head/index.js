import { define, WeElement } from 'omi'
import css from './_index.css'
import logo from './omi-logo.svg'

define('my-head', class extends WeElement {
  install() {
    document.body.addEventListener(
      'touchend',
      () => {
        setTimeout(() => {
          this.removeClass(Omi.get('sidebar').node, 'show')
        }, 300)
      },
      false
    )
  }

  beforeRender() {
    this.data.isEnLan = this.$store.data.lan === 'en'
  }

  toggleMenus = evt => {
    this.store.toogleSidebar()
  }

  css() {
    return css
  }

  render(props, data) {
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
            <a href="https://github.com/Tencent/omi">Github</a>
          </li>

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
