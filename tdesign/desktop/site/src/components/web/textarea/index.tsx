import { WeElement, define, h, createRef } from 'omi'
import '../common/index'
import '../../../../../src/textarea/_example/base'
import '../../../../../src/textarea/_example/limit'
import '../../../../../src/textarea/_example/event'
import '../../../../../src/textarea/_example/status'

import '../../../../../src/textarea/style/index'

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
  'page-textarea',
  class extends WeElement<Props> {
    static defaultProps = {
      tab: 'demo',
    }

    static css = `
    code {
      margin: 0 2px;
      color: var(--error-8);
      background: var(--error-1);
      border-radius: 3px;
      padding: 2px 6px;
      font-size: 12px;
      word-break: break-word;
    }
    
    .tdesign-demo-item__body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-wrap: wrap;
      min-height: 204px;
      padding: 40px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      overflow: auto;
    }
    `

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
            <td-doc-usage
              language="markup"
              panel="textarea"
              code='<t-textarea
  allowInputOverMax={false}
  autofocus={false}
  autosize={false}
  placeholder="请输入内容"
  readonly={false}
/>'
            >
              <div slot="textarea" style="width: 100%; display: flex; align-items: center; justify-content: center;">
                <t-textarea placeholder="请输入内容" style="width: 100%;"></t-textarea>
              </div>
            </td-doc-usage>

            <h3 id="基本多行文本框">
              基本多行文本框 <a class="header-anchor" href="#基本多行文本框"></a>
            </h3>
            <p>用于多行文本的输入。</p>
            <td-doc-demo
              code='import { OmiProps, WeElement, h, tag, render } from "omi"
import "../index"

@tag("textarea-base")
export default class TextareaBase extends WeElement{
  render(){
    return <h.f>
      <t-textarea placeholder="请输入描述文案"></t-textarea>
      <t-textarea placeholder="请输入文案，高度可自适应；autosize=true" autosize={true}></t-textarea>
      <t-textarea placeholder="请输入文案，高度可自适应，最小3行，最大5行；autosize={minRows: 3, maxRows: 5}" autosize={{minRows: 3, maxRows: 5}}></t-textarea>
    </h.f>
  }
}'
              language="jsx"
              mode="auto"
            >
              <div class="tdesign-demo-item__body">
                <div style="width: 100%;">
                  <textarea-base></textarea-base>
                </div>
              </div>
            </td-doc-demo>

            <h3 id="限制最大字符数">
              限制最大字符数 <a class="header-anchor" href="#限制最大字符数"></a>
            </h3>
            <p>用于多行文本的输入。</p>
            <td-doc-demo
              code='import { OmiProps, WeElement, h, tag, render } from "omi"

import "../index"
import "../../space/index"

@tag("textarea-limit")
export default class TextareaLimit extends WeElement{

  render(){
    return <h.f>
      <t-space direction="vertical" style={{ width: 100% }}>
        <t-textarea placeholder="请输入描述文案，文本长度最多20，maxlength=20" maxlength="20"></t-textarea>
        <t-textarea placeholder="请输入描述文案，最多20字符（一个汉字占两个字符长度），maxcharacter=20" maxcharacter="20"></t-textarea>
      </t-space>
    </h.f>
    
  }
}'
              language="jsx"
              mode="auto"
            >
              <div class="tdesign-demo-item__body">
                <div style="width: 100%;">
                  <textarea-limit></textarea-limit>
                </div>
              </div>
            </td-doc-demo>

            <h3 id="绑定 DOM 事件">
              绑定 DOM 事件 <a class="header-anchor" href="#绑定 DOM 事件"></a>
            </h3>
            <p>
              可绑定 <code>onKeypress</code> <code>onKeydown</code> <code>onKeyup</code> <code>onFocus</code>{' '}
              <code>onBlur</code> 等 DOM 原生事件。
            </p>

            <td-doc-demo
              code='import { OmiProps, WeElement, h, tag, render} from "omi"
import "../index"

@tag("textarea-event")
export default class TextareaEvent extends WeElement {

  evtDetail: number
  value :string
  
  onBlur = (evt : Event) =>{
    console.log("onBlur", evt.detail.value, evt.detail.event)
  }

  onFocus = (evt : Event) =>{
    console.log("onFocus", evt.detail.value, evt.detail.event)
  }

  onKeyup = (evt : Event) =>{
    console.log("onKeyup", evt.detail.value, evt.detail.event)
  }

  onKeypress = (evt : Event) =>{
    console.log("onKeypress", evt.detail.value, evt.detail.event)
  }

  onKeydown = (evt : Event) =>{
    console.log("onKeydown", evt.detail.value, evt.detail.event)
  }

  render() {
    return (
      <h.f>
        <t-textarea
          placeholder="请输入"
          // value={this.value}
          onMyBlur={this.onBlur}
          onMyFocus={this.onFocus}
          onMyKeypress={this.onKeypress}
          onMyKeydown={this.onKeydown}
          onMyKeyup={this.onKeyup}
        ></t-textarea>
      </h.f>
    )
  }
}'
              language="jsx"
              mode="auto"
            >
              <div class="tdesign-demo-item__body">
                <div style="width: 100%;">
                  <textarea-event></textarea-event>
                </div>
              </div>
            </td-doc-demo>

            <h3 id="不同状态的多行文本框">
              不同状态的多行文本框 <a class="header-anchor" href="#不同状态的多行文本框"></a>
            </h3>
            <p>支持只读、禁用状态。</p>

            <td-doc-demo
              code='import { OmiProps, WeElement, h, tag, render } from "omi"

import "../index"
import "../../space/index"

@tag("textarea-status")
export default class TextareaStatus extends WeElement{

  render(){
    return <h.f>
      <t-space direction="vertical" style={{ width: "100%" }}>
        <t-textarea placeholder="禁用状态" disabled="true"></t-textarea>
        <t-textarea placeholder="只读状态" readonly="true"></t-textarea>
        <t-textarea placeholder="普通状态" readonly="true" tips="这是普通文本提示"></t-textarea>
        <t-textarea placeholder="成功状态" tips="校验通过文本提示" status="success"></t-textarea>
        <t-textarea placeholder="警告状态" tips="校验不通过文本提示" status="warning"></t-textarea>
        <t-textarea placeholder="错误状态" tips="校验存在严重问题文本提示" status="error"></t-textarea>
        </t-space>
    </h.f>
  }
}'
              language="jsx"
              mode="auto"
            >
              <div class="tdesign-demo-item__body">
                <div style="width: 100%;">
                  <textarea-status></textarea-status>
                </div>
              </div>
            </td-doc-demo>
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
