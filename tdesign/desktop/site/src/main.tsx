// import tdesign style
import '@common/style/web/docs.less';

// import site webComponents
import 'tdesign-site-components';
import 'tdesign-site-components/lib/styles/style.css';
import 'tdesign-site-components/lib/styles/prism-theme.less';
import 'tdesign-site-components/lib/styles/prism-theme-dark.less';
// import icons webcomponents
import 'tdesign-icons-view';

import 'tdesign-theme-generator';

import { registerLocaleChange } from 'tdesign-site-components';
import packageJson from '@/package.json';

import { WeElement, render, h, tag } from 'omi'
import Store from './store'
console.log(Store)

registerLocaleChange();

import '../../src/button/index.tsx'


@tag('my-app')
export default class extends WeElement {
  // static css = [sheet.target, fadeCSS, css.default ? css.default : css]

  data = {
    tagName: 'admin-main-welcome'
  }

  version = packageJson.version

  store


  render() {
    return (
      <td-doc-layout>
        <td-header slot="header">
          <td-doc-search slot="search"  />
        </td-header>

        <td-doc-aside title="Omi for Web">
          <t-select
            id="historyVersion"
            slot="extra"
            value={this.version.replace(/\./g, '_')}
            popupProps={{ zIndex: 500, attach: this.getAttach }}
            onChange={this.changeVersion}
            options={this.options}
          />
        </td-doc-aside>
        <div>
          <h1>Hello OMI!</h1>
          <t-button>你好，OMI！</t-button>
        </div>
        <td-theme-generator />
      </td-doc-layout>
    )
  }
}

render(
  <my-app></my-app>,
  '#app',
  new Store({})
)