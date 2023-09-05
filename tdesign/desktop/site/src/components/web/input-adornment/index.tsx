import { WeElement, define, h, createRef } from 'omi'
import '../common/index'
import '../../../../../src/input-adornment/_example/text'
import '../../../../../src/input-adornment/_example/select'

import * as marked from 'marked'

const docsHTML = marked.parse(`

## API
### InputAdornment Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式| N
append | TNode | - | 后缀装饰。TS 类型：\`string \\| TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
prepend | TNode | - | 前缀装饰。TS 类型：\`string \\| TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
`)

interface Props {
  tab: string
}

define(
  'page-input-adornment',
  class extends WeElement<Props> {
    static css = ``
    static defaultProps = {
      tab: 'demo',
    }

    tab = ['demo', 'api', 'design']
    tdDocHeader = createRef()
    tdDocTabs = createRef()

    static propTypes = {
      tab: String,
    }

    updateTab = (t: string) => {
      this.updateProps({
        tab: t,
      })
    }

    isShow(tabStr: string) {
      return this.props.tab === tabStr ? { display: 'block' } : { display: 'none' }
    }

    installed() {
      const tdDocTabsEl = this.tdDocTabs.current as HTMLElement
      tdDocTabsEl.onchange = ({ detail: currentTab }: CustomEvent) => {
        this.updateTab(currentTab)
      }
    }

    render() {
      return (
        <>
          <td-doc-tabs ref={this.tdDocTabs} tab={this.props.tab} style="display:block"></td-doc-tabs>
          <div style={this.isShow('demo')} name="DEMO">
            <h3 id="文本装饰">
              文本装饰<a class="header-anchor" href="#文本装饰"></a>
            </h3>
            <p>在输入框前后加入一些特定的纯展示标签，通常在需要提高辨识效率时使用。</p>
            <demo-wrapper>
              <input-adornment-text></input-adornment-text>
            </demo-wrapper>
            <h4 id="下拉列表装饰">
              下拉列表装饰 <a class="header-anchor" href="#下拉列表装饰"></a>
            </h4>
            <p>装饰内容可以是下拉菜单</p>
            <demo-wrapper>
              <p>下拉列表选择select待完善</p>
            </demo-wrapper>
          </div>
          <div style={this.isShow('api')} name="API">
            <div
              style="margin-bottom:76px"
              dangerouslySetInnerHTML={{
                __html: docsHTML,
              }}
            ></div>
          </div>
          <div style={this.isShow('design')} name="DESIGN"></div>
        </>
      )
    }
  },
)
