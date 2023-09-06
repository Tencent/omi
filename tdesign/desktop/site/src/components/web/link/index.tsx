import { WeElement, define, h, createRef } from 'omi'
import '../common/index'
import '../../../../../src/link/_example/base'
import '../../../../../src/link/_example/disabled'
import '../../../../../src/link/_example/hover'
import '../../../../../src/link/_example/icon'
import '../../../../../src/link/_example/size'
import '../../../../../src/link/_example/theme'
import '../../../../../src/link/_example/underline'
import '../../../../../src/link/_example/icon'
import * as marked from 'marked'

import '../../../../code-box/index'

import { tw, sheet } from 'omi-twind'

const docsHTML = marked.parse(`

## API
### Link Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
content | TNode | - | 链接内容。TS 类型：\`string \\|  TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
default | TNode | - | 链接内容，同 content。TS 类型：\`string \\|  TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
disabled | Boolean | - | 禁用链接 | N
hover | String | underline | 链接悬浮态样式，有 文本颜色变化、添加下划线等 2 种方法。可选项：color/underline | N
href | String | - | 跳转链接 | N
prefixIcon | TElement | - | 前置图标。TS 类型：\`TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
size | String | medium | 尺寸。可选项：small/medium/large。TS 类型：\`SizeEnum\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
suffixIcon | TElement | - | 后置图标。TS 类型：\`TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
target | String | - | 跳转方式，如：当前页面打开、新页面打开等，同 HTML 属性 target 含义相同 | N
theme | String | default | 组件风格，依次为默认色、品牌色、危险色、警告色、成功色。可选项：default/primary/danger/warning/success | N
underline | Boolean | - | 普通状态是否显示链接下划线 | N
onClick | Function |  | TS 类型：\`(e: MouseEvent) => void\`<br/>点击事件，禁用状态不会触发点击事件 | N

`)
interface Props {
  tab: string
}

define(
  'page-link',
  class extends WeElement<Props> {
    static defaultProps = {
      tab: 'demo',
    }

    static css = `t-link { margin: 5px }`

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
            <code-box
              title="下划线文字链接"
              describe="在文字下加横线，表明此处为链接。"
              code={`
\`\`\`html
<div>
  <t-link theme="default" underline> 跳转链接 </t-link>
  <t-link theme="primary" underline> 跳转链接 </t-link>
  <t-link theme="danger" underline> 跳转链接 </t-link>
  <t-link theme="warning" underline> 跳转链接 </t-link>
  <t-link theme="success" underline> 跳转链接 </t-link>
</div>
\`\`\`
          `}
            >
              <div slot="demo" class={tw`px-5 py-5`}>
                <t-link theme="default" underline>
                  {' '}
                  跳转链接{' '}
                </t-link>
                <t-link theme="primary" underline>
                  {' '}
                  跳转链接{' '}
                </t-link>
                <t-link theme="danger" underline>
                  {' '}
                  跳转链接{' '}
                </t-link>
                <t-link theme="warning" underline>
                  {' '}
                  跳转链接{' '}
                </t-link>
                <t-link theme="success" underline>
                  {' '}
                  跳转链接{' '}
                </t-link>
              </div>
            </code-box>

            <h3 id="文字链接">
              文字链接 <a class="header-anchor" href="#文字链接"></a>
            </h3>
            <h4 id="基础文字链接">
              基础文字链接 <a class="header-anchor" href="#基础文字链接"></a>
            </h4>
            <p>最简单的文字链接形式，点击后直接跳转到对应链接。</p>
            <demo-wrapper>
              <link-base></link-base>
            </demo-wrapper>
            <h4 id="下划线文字链接">
              下划线文字链接 <a class="header-anchor" href="#下划线文字链接"></a>
            </h4>
            <p>在文字下加横线，表明此处为链接。</p>
            <demo-wrapper>
              <link-underline></link-underline>
            </demo-wrapper>
            <h4 id="带图标的文字链接">
              带图标的文字链接 <a class="header-anchor" href="#带图标的文字链接"></a>
            </h4>
            <p>文字链接与图标搭配使用，通过图标快速了解链接所代表的含义。</p>
            <demo-wrapper>
              <link-icon />
            </demo-wrapper>
            <h3 id="链接悬浮态样式的链接">
              链接悬浮态样式的链接 <a class="header-anchor" href="#链接悬浮态样式的链接"></a>
            </h3>
            <p>
              悬浮状态包含 2 种状态：文本颜色变化 和 添加下划线。由 <td-code text="hover"></td-code> 控制，可选值：
              <td-code text="color | underline"></td-code>
            </p>
            <demo-wrapper>
              <link-hover></link-hover>
            </demo-wrapper>

            <h3 id="提示不同状态的链接">
              提示不同状态的链接 <a class="header-anchor" href="#提示不同状态的链接"></a>
            </h3>
            <p>
              在<td-code text="default、primary、success、warning、danger"></td-code>
              不同状态下，可提供对应的链接主题色。
            </p>
            <demo-wrapper>
              <link-theme></link-theme>
            </demo-wrapper>

            <h3 id="禁用的链接">
              禁用的链接 <a class="header-anchor" href="#禁用的链接"></a>
            </h3>
            <p>当链接不可用时，显示禁用状态。</p>
            <demo-wrapper>
              <link-disabled></link-disabled>
            </demo-wrapper>
            <h3 id="不同尺寸的链接">
              不同尺寸的链接 <a class="header-anchor" href="#不同尺寸的链接"></a>
            </h3>
            <p>提供大、中（默认）、小三种尺寸。</p>
            <demo-wrapper>
              <link-size></link-size>
            </demo-wrapper>
          </div>
          <div style={this.isShow('api')} name="API">
            <div
              style="margin-bottom:76px"
              unsafeHTML={{
                html: docsHTML,
              }}
            ></div>
          </div>
          <div style={this.isShow('design')} name="DESIGN"></div>
        </>
      )
    }
  },
)
