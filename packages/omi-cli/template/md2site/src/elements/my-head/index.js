import { define, WeElement } from 'omi';
import css from './_index.css'


define('my-head', class extends WeElement {

  install() {

    document.body.addEventListener('touchend', () => {
      setTimeout(() => {
        this.removeClass(Omi.get('sidebar').node, 'show');
      }, 300);
    }, false);
  }

  beforeRender() {
    this.data.isEnLan = this.$store.data.lan === 'en';
  }

  toggleMenus(evt) {
    this.toggleClass(Omi.get('sidebar').node, 'show');
    evt.stopPropagation();
  }

  handleTouchEnd(evt) {
    evt.stopPropagation();
  }

  toggleClass(element, className) {
    if (!element || !className) {
      return;
    }

    var classString = element.className, nameIndex = classString.indexOf(className);
    if (nameIndex == -1) {
      classString += ' ' + className;
    }
    else {
      classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length);
    }
    element.className = classString;
  }

  removeClass(element, className) {
    var classString = element.className, nameIndex = classString.indexOf(className);
    if (nameIndex !== -1) {
      classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length);
    }
    element.className = classString;
  }

  css() {
    return css
  }

  render(props, data) {
    return (
      <div class="head bord-btm">
        <div class="m_menu" omi-finger tap="toggleMenus" touchEnd="handleTouchEnd"> <img src="./component/head/menu.png" alt="" />
        </div>
        <div class="logo_box">
          <a href="https://github.com/AlloyTeam/omi">Omi</a>
        </div>

        <ul class="menu">

          <li class="github_li">
            <a href="https://github.com/AlloyTeam/omi">Github</a>
          </li>
          <li>
            <a href="http://alloyteam.github.io/omi/example/playground/">Playground</a>
          </li>
          <li><a href="https://github.com/AlloyTeam/omi/tree/master/docs">[Edit the Docs]</a></li>
          <li class="github_li m_show">{data.isEnLan ? <a href="docs-cn.html">中文</a> : <a href="docs-en.html">English</a>}</li>
        </ul>
      </div>
    )

  }
})
