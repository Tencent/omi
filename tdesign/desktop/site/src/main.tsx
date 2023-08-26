// import tdesign style
import '@common/style/web/docs.less'

// import site web components
import 'tdesign-site-components'
import 'tdesign-site-components/lib/styles/style.css'
import 'tdesign-site-components/lib/styles/prism-theme.less'
import 'tdesign-site-components/lib/styles/prism-theme-dark.less'
// import icons web components
import 'tdesign-icons-view'
import { route } from 'omi-router'
import 'tdesign-theme-generator'

import { registerLocaleChange } from 'tdesign-site-components'

import { WeElement, render, h, tag } from 'omi'
import Store from './store'

registerLocaleChange()

import { registerRouting } from './router'
import { watchHtmlMode } from './utils'

import siteConfig from '../site.config.mjs'

const { docs, enDocs } = JSON.parse(JSON.stringify(siteConfig).replace(/component:.+/g, ''))

const docsMap = {
  zh: docs,
  en: enDocs,
}

@tag('my-app')
export default class extends WeElement {
  // static css = [sheet.target, fadeCSS, css.default ? css.default : css]

  data = {
    tagName: 'page-overview',
    pageName: 'overview',
    pageTitle: '组件概览',
    pageDescription: '将根据业务实践持续新增组件类型，敬请留意组件库更新日志。',
  }

  getAttach: any
  changeVersion: any
  options: any
  mdSegment: { componentName: string; spline: string }
  lastUpdated: string
  store: any
  tdHeader: any
  tdDocAside: any
  tdDocSearch: any
  tdDocContent: any
  tdDocHeader: any

  install() {
    this.lang = 'zh'
    this.mdSegment = {
      componentName: '测试',
      spline: 'explain',
    }
    // TODO: 从 git 获取文件最新更新时间
    this.lastUpdated = ''
  }

  installed() {
    // 监听根 html 主题变化更新相关 omi 组件
    const observer = watchHtmlMode((themeMode: any) => {
      this.store.themeMode = themeMode
      this.store.ui.overview.update()
    })

    this.tdHeader.framework = 'omi'
    this.tdDocAside.routerList = docsMap[this.lang]
    this.tdDocAside.onchange = ({ detail }) => {
      route.to(detail)
      console.error(detail)
      // if (this.$route.path === detail) return
      // this.loaded = false
      // this.$router.push(detail)
      window.scrollTo(0, 0)
    }

    this.tdDocSearch.docsearchInfo = { indexName: 'tdesign_doc_omi' }
    // this.initHistoryVersions()
  }

  render() {
    return (
      <td-doc-layout>
        <td-header
          ref={(el: any) => {
            this.tdHeader = el
          }}
          slot="header"
        >
          <td-doc-search
            ref={(el: any) => {
              this.tdDocSearch = el
            }}
            slot="search"
          />
        </td-header>

        <td-doc-aside
          ref={(el: any) => {
            this.tdDocAside = el
          }}
          title="Omi for Web"
        >
          <t-select
            id="historyVersion"
            slot="extra"
            // value={this.version.replace(/\./g, '_')}
            popupProps={{ zIndex: 500, attach: this.getAttach }}
            onChange={this.changeVersion}
            options={this.options}
          />
        </td-doc-aside>

        <td-doc-content
          ref={(el: any) => {
            this.tdDocContent = el
          }}
          page-status="hidden"
        >
          {/* https://github.com/TDesignOteam/tdesign-site/blob/main/components/src/components/td-doc-header/index.js */}
          <td-doc-header
            slot="doc-header"
            docInfo={{
              title: this.data.pageTitle, // 动态
              desc: this.data.pageDescription,
            }}
            ref={(el: any) => {
              this.tdDocHeader = el
            }}
            spline={this.mdSegment.spline}
            component-name={this.data.pageName}
          ></td-doc-header>
          <div>
            <this.data.tagName></this.data.tagName>
          </div>

          <div style="margin-top: 48px">
            <td-doc-history time={this.lastUpdated}></td-doc-history>
          </div>
          <td-doc-footer slot="doc-footer"></td-doc-footer>
        </td-doc-content>

        <td-theme-generator />
      </td-doc-layout>
    )
  }
}

render(
  <my-app id="my-app"></my-app>,
  '#app',
  new Store({
    themeMode: 'light',
  }),
)

const app = document.getElementById('my-app')
registerRouting(app)
