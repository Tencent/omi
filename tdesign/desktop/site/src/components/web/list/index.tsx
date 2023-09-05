import { WeElement, define, h, createRef } from 'omi'
import '../common/index'
import '../../../../../src/list/_example/base-text'
import '../../../../../src/list/_example/multiple-text'
import '../../../../../src/list/_example/base-image-text'
import '../../../../../src/list/_example/list-with-action'
import '../../../../../src/list/_example/list-size'
import '../../../../../src/list/_example/list-zebra'
import '../../../../../src/list/_example/list-async-loading'
import '../../../../../src/list/_example/list-header-footer'
import '../../../../../src/list/_example/list-scroll'

import '../../../../../src/list/style/index'

import * as marked from 'marked'

const docsHTML = marked.parse(`

## API
### Rate Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
allowInputOverMax | Boolean | false | 超出maxlength或maxcharacter之后是否还允许输入 | N
autofocus | Boolean | false | 自动聚焦，拉起键盘 | N
autosize | Boolean / Object | false | 高度自动撑开。 autosize = true 表示组件高度自动撑开，同时，依旧允许手动拖高度。如果设置了 autosize.maxRows 或者 autosize.minRows 则不允许手动调整高度。TS 类型： \`boolean / { minRows?: number; maxRows?: number }\` | N
disabled | Boolean | false | 	是否禁用文本框 | N
label | String / Slot / Function | - | 左侧文本。TS 类型：\`string / TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
maxcharacter | Number | - | 用户最多可以输入的字符个数，一个中文汉字表示两个字符长度 | N
maxlength | Number | - | 用户最多可以输入的字符个数 | N
name | String | - | 	名称，HTML 元素原生属性 | N
placeholder | String | undefined | 占位符 | N
readonly | Boolean | false | 只读状态 | N
status | String | - | 文本框状态。可选项：default/success/warning/error | N
tips | String / Slot / Function | - | 输入框下方提示文本，会根据不同的 status 呈现不同的样式。TS 类型：\`string / TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
value | String / Number	 | - | 文本框值。TS 类型：\`TextareaValue type TextareaValue = string\`。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/textarea/type.ts) | N
defaultValue | String / Number | - | 文本框值。非受控属性。TS 类型：\`TextareaValue type TextareaValue = string\`。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/textarea/type.ts) | N
onBlur | Function | - | 	TS 类型：\`(value: TextareaValue, context: { e: FocusEvent }) => void\` <br/>失去焦点时触发 | N
onChange | Function | - | TS 类型：\`(value: TextareaValue, context?: { e?: InputEvent }) => void\` <br/>输入内容变化时触发 | N
onFocus | Function | - | TS 类型：\`TS 类型：(value: TextareaValue, context : { e: FocusEvent }) => void\` <br/>获得焦点时触发 | N
onKeydown | Function | - | TS 类型：\`(value: TextareaValue, context: { e: KeyboardEvent }) => void\` <br/>键盘按下时触发 | N
onKeypress | Function | - | TS 类型：\`(value: TextareaValue, context: { e: KeyboardEvent }) => void\` <br/>按下字符键时触发（keydown -> keypress -> keyup） | N
onKeyup | Function | - | TS 类型：\`(value: TextareaValue, context: { e: KeyboardEvent }) => void\` <br/>释放键盘时触发 | N

`)

interface Props {
  tab: string
}

define(
  'page-list',
  class extends WeElement<Props> {
    static defaultProps = {
      tab: 'demo',
    }

    static css = `code {
      margin: 0 2px;
      color: var(--error-8);
      background: var(--error-1);
      border-radius: 3px;
      padding: 2px 6px;
      font-size: 12px;
      word-break: break-word;
    }`

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
          <div style={this.isShow('demo')} name="DEMO">
            <h3 id="基础文字列表">
              基础文字列表 <a class="header-anchor" href="#基础文字列表"></a>
            </h3>
            <p>仅包含简单文字的列表。对较简单的信息进行陈列时使用。</p>
            <demo-wrapper>
              <list-base-text></list-base-text>
            </demo-wrapper>

            <h3 id="多行文字列表">
              多行文字列表 <a class="header-anchor" href="#多行文字列表"></a>
            </h3>
            <p>仅包含主要文字及描述性文字的列表。对较复杂的，包含多个字段或内容的信息进行展示时使用。</p>
            <demo-wrapper>
              <list-multiple-text></list-multiple-text>
            </demo-wrapper>

            <h3 id="基础图文列表">
              基础图文列表 <a class="header-anchor" href="#基础图文列表"></a>
            </h3>
            <p>包含简单图文的列表。需使用图片和文字结合展示信息。</p>
            <demo-wrapper>
              <list-base-image-text></list-base-image-text>
            </demo-wrapper>

            <h3 id="带操作列表">
              带操作列表 <a class="header-anchor" href="#带操作列表"></a>
            </h3>
            <p>包含操作的列表。需要对所在列进行操作时使用。</p>
            <demo-wrapper>
              <list-with-action></list-with-action>
            </demo-wrapper>

            <h3 id="不同尺寸的列表">
              不同尺寸的列表 <a class="header-anchor" href="#不同尺寸的列表"></a>
            </h3>
            <p>提供大、中（默认）、小三种尺寸。</p>
            <demo-wrapper>
              <list-size></list-size>
            </demo-wrapper>

            <h3 id="斑马纹区分列表">
              斑马纹区分列表 <a class="header-anchor" href="#斑马纹区分列表"></a>
            </h3>
            <demo-wrapper>
              <list-zebra></list-zebra>
            </demo-wrapper>

            <h3 id="异步加载的列表">
              异步加载的列表 <a class="header-anchor" href="#异步加载的列表"></a>
            </h3>
            <demo-wrapper>
              <list-async-loading></list-async-loading>
            </demo-wrapper>

            <h3 id="带头部及尾部的列表">
              带头部及尾部的列表 <a class="header-anchor" href="#带头部及尾部的列表"></a>
            </h3>
            <demo-wrapper>
              <list-header-footer></list-header-footer>
            </demo-wrapper>

            <h3 id="带滚动事件的列表">
              带滚动事件的列表 <a class="header-anchor" href="#带滚动事件的列表"></a>
            </h3>
            <demo-wrapper>
              <list-scroll></list-scroll>
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
