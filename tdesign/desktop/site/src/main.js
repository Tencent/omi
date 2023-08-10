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

registerLocaleChange();

document.body.innerHTML = `
<td-doc-layout>
  <td-header ref="tdHeader" slot="header">
    <td-doc-search slot="search" ref="tdDocSearch" />
  </td-header>

  <td-doc-aside ref="tdDocAside" title="Omi for Web">
    <t-select
      id="historyVersion"
      slot="extra"
      value={this.version.replace(/\./g, '_')}
      popupProps={{ zIndex: 500, attach: this.getAttach }}
      onChange={this.changeVersion}
      options={this.options}
    />
  </td-doc-aside>
  <div>hello omi</div>
  <td-theme-generator />
</td-doc-layout>
`;
