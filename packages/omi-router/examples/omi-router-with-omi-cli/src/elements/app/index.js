import route from 'omi-router'
import { define, WeElement } from 'omi'
import logo from './logo.png'
import style from './_index.css'
import normalizeStyle from '../../assets/_normalize.css'
import navInfo from './nav'

import '../views/not-found'

define('my-app', class extends WeElement {
  static get data() {
    return { name: '' }
  }

  static observe = true

  data = {
    pageTitle: '',
    pageContainerClass: [],
    routeParams: null,
    navInfo: [],
    showPageLoading: false
  }

  css() {
    return normalizeStyle + style
  }

  initRoute(routeInfo) {
    let routeList = []
    for (let mainNav of navInfo) {
      for (let childNav of mainNav.children) {
        let childRouteList = []
        if (childNav.children && childNav.children.length) {
          for (let pageNav of childNav.children) {
            childRouteList.push({
              title: pageNav.label,
              labelbList: [mainNav.label, childNav.label, pageNav.label],
              path: '/' + [mainNav.code, childNav.code, pageNav.code].join('/'),
              tag: [mainNav.code, childNav.code, pageNav.code].join('-')
            })
          }
        }
        if (childRouteList.length) {
          if (!mainNav.path) {
            mainNav.path = childRouteList[0].path
          }
          if (!childNav.path) {
            childNav.path = childRouteList[0].path
          }
          routeList = routeList.concat(childRouteList)
        } else {
          if (!childNav.path) {
            childNav.path = '/' + mainNav.code + '/' + childNav.code
            routeList.push({
              title: childNav.label,
              labelbList: [mainNav.label, childNav.label],
              path: childNav.path,
              tag: [mainNav.code, childNav.code].join('-')
            })
          }
          if (!mainNav.path) {
            mainNav.path = '/' + mainNav.code + '/' + childNav.code
          }
        }
      }
    }
    route('/', params => {
      route.to(routeList[0].path, params)
    })
    for (let item of routeList) {
      route(item.path, params => {
        window.document.title = item.title
        this.data.tag = item.tag
        this.data.pageContainerClass = []
        this.data.routeParams = params
        this.data.pageTitle = item.labelbList
        this.updateFramework(this.data.navInfo, item.path.slice(1).split('/'))
      })
    }
    route('*', () => {
      window.document.title = '404 NotFound'
      this.data.tag = 'not-found'
      this.data.pageContainerClass = ['no-page-title', 'no-side-nav']
      this.data.routeParams = null
      this.data.pageTitle = ''
      this.updateFramework(this.data.navInfo, [], true)
    })

    route.before = event => {
      if (event.newURL.match('/#/nav1/module2/page1')) {
        this.data.showPageLoading = true
      }
    }
  }

  install() {
    this.data.navInfo = navInfo
    this.initRoute(navInfo)
  }

  onPageLoaded() {
    this.data.showPageLoading = false
  }

  updateFramework(navInfo, navPath, isClear = false) {
    let foundPath = false
    if (!isClear) {
      if (!Array.isArray(navPath) || !navPath.length) {
        return false
      }
    }
    if (!Array.isArray(navInfo) || !navInfo.length) {
      return false
    }
    for (let mainNav of navInfo) {
      if (isClear || mainNav.code !== navPath[0]) {
        mainNav.selected = false
        this.updateFramework(mainNav.children, navPath.slice(1), true)
      } else {
        foundPath = true
        if (
          (!Array.isArray(mainNav.children) || mainNav.children.length) &&
          navPath.length === 1
        ) {
          mainNav.selected = true
        } else {
          mainNav.selected = this.updateFramework(
            mainNav.children,
            navPath.slice(1)
          )
        }
      }
    }
    return foundPath
  }

  getRenderedNav(props, data) {
    let mainNav = []
    let subNav = []
    for (let nav of this.data.navInfo) {
      mainNav.push(
        <li class={nav.selected ? 'selected' : ''}>
          <a href={'#' + nav.path}>{nav.label}</a>
        </li>
      )
      if (nav.selected && nav.children && nav.children.length) {
        for (let childNav of nav.children) {
          subNav.push(
            <li class={childNav.selected ? 'selected' : ''}>
              <a href={'#' + childNav.path}>{childNav.label}</a>
            </li>
          )
        }
        if (subNav.length) {
          subNav = [
            <nav class="sub-nav">
              <ul>{subNav}</ul>
            </nav>
          ]
        }
      }
    }
    return {
      mainNav,
      subNav
    }
  }

  getRenderedPageTitle(props, data) {
    let parentTitle = []
    let currentTitle = ''
    if (Array.isArray(this.data.pageTitle) && this.data.pageTitle.length) {
      parentTitle = this.data.pageTitle.slice(0, -1)
      currentTitle = this.data.pageTitle[this.data.pageTitle.length - 1]
      return (
        <h2 class="page-title">
          {parentTitle.join(' / ')} / <strong>{currentTitle}</strong>
        </h2>
      )
    }
    return ''
  }

  render(props, data) {
    let { mainNav, subNav } = this.getRenderedNav(props, data)
    let pageTitle = this.getRenderedPageTitle(props, data)
    return (
      <div class="app">
        <header class="app-header">
          <h1 class="app-title">
            <a href="#/">
              <img src={logo} class="app-logo" alt="logo" />
              Omi Router Sample
            </a>
          </h1>
          <nav class="main-nav">
            <ul>{mainNav}</ul>
          </nav>
          <div class="user-info">
            <a href="#/not-found">
              <p class="username">
                username
                <img src={logo} class="avatar" />
              </p>
            </a>
          </div>
        </header>
        <div>
          {subNav}
          <div
            class={'page-container ' + this.data.pageContainerClass.join(' ')}
          >
            {pageTitle}
            <div class="page-content">
              <this.data.tag
                params={this.data.params}
                onPageLoaded={e => this.onPageLoaded(e)}
              />
              <div
                class={
                  'page-shade-layer ' +
                  (this.data.showPageLoading ? 'show' : '')
                }
              >
                <p>页面加载中...</p>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <p>Omi router sample with omi-cli</p>
        </footer>
      </div>
    )
  }
})
