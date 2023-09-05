import { WeElement, define, h, createRef } from 'omi'
import '../common/index'
import '../../../../../src/back-top/_example/back-top-base'
import '../../../../../src/back-top/_example/back-top-duration'
import '../../../../../src/back-top/_example/back-top-size'
import '../../../../../src/back-top/_example/back-top-shape'
import '../../../../../src/back-top/_example/back-top-theme'
import '../../../../../src/back-top/_example/back-top-custom'

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
  'page-back-top',
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
          <td-doc-tabs ref={this.tdDocTabs} tab={this.props.tab} style="display:block"></td-doc-tabs>
          <div style={this.isShow('demo')} name="DEMO">
            <h3 id="基础的回到顶部">
              基础的回到顶部 <a class="header-anchor" href="#基础的回到顶部"></a>
            </h3>
            <p>默认距离页面右侧24px，距离页面底部80px，滚动动画时长200ms</p>
            <demo-wrapper>
              <back-top-base></back-top-base>
            </demo-wrapper>

            <h3 id="可设置不同耗时的回到顶部">
              可设置不同耗时的回到顶部 <a class="header-anchor" href="#可设置不同耗时的回到顶部"></a>
            </h3>
            <demo-wrapper>
              <back-top-duration></back-top-duration>
            </demo-wrapper>

            <h3 id="不同组件尺寸的回到顶部">
              不同组件尺寸的回到顶部 <a class="header-anchor" href="#不同组件尺寸的回到顶部"></a>
            </h3>
            <demo-wrapper>
              <back-top-size></back-top-size>
            </demo-wrapper>

            <h3 id="不同组件主题的回到顶部">
              不同组件形状的回到顶部 <a class="header-anchor" href="#不同组件形状的回到顶部"></a>
            </h3>
            <p>不同组件形状的回到顶部</p>
            <demo-wrapper>
              <back-top-shape></back-top-shape>
            </demo-wrapper>

            <h3 id="不同组件主题的回到顶部">
              不同组件主题的回到顶部 <a class="header-anchor" href="#不同组件主题的回到顶部"></a>
            </h3>
            <demo-wrapper>
              <back-top-theme></back-top-theme>
            </demo-wrapper>

            <h3 id="可自定义内容的回到顶部">
              可自定义内容的回到顶部 <a class="header-anchor" href="#可自定义内容的回到顶部"></a>
            </h3>
            <demo-wrapper>
              <back-top-custom></back-top-custom>
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
