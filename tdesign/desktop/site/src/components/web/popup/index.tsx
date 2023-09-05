import { WeElement, define, h, createRef } from 'omi'
import '../common/index'
import '../../../../../src/popup/_example/base'
import '../../../../../src/popup/_example/style'
import '../../../../../src/popup/_example/visible'
import '../../../../../src/popup/_example/dynamic'
import '../../../../../src/popup/_example/placement'
import '../../../../../src/popup/_example/trigger'
import '../../../../../src/popup/_example/destroy'
import '../../../../../src/popup/_example/trigger-element'

import * as marked from 'marked'

const docsHTML = marked.parse(`

## API
### Popup Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
attach | String / Function | 'body' | 制定挂载节点。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body。TS 类型：\`AttachNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
children | TNode | - | 触发元素，同 triggerElement。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
content | TNode | - | 浮层里面的内容。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
delay | Number / Array | - | 延时显示或隐藏浮层，[延迟显示的时间，延迟隐藏的时间]，单位：毫秒。如果只有一个时间，则表示显示和隐藏的延迟时间相同。示例 \`'300'\` 或者 \`[200, 200]\`。默认为：[250, 150]。TS 类型：\`number \| Array<number>\` | N
destroyOnClose | Boolean | false | 是否在关闭浮层时销毁浮层 | N
disabled | Boolean | - | 是否禁用组件 | N
hideEmptyPopup | Boolean | false | 浮层是否隐藏空内容，默认不隐藏 | N
overlayClassName | String / Object / Array | - | 浮层类名，示例：'name1 name2 name3' 或 \`['name1', 'name2']\` 或 \`[{ 'name1': true }]\`。TS 类型：\`ClassName\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
overlayInnerClassName | String / Object / Array | - | 浮层内容部分类名，示例：'name1 name2 name3' 或 \`['name1', 'name2']\` 或 \`[{ 'name1': true }]\`。TS 类型：\`ClassName\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
overlayInnerStyle | Boolean / Object / Function | - | 浮层内容部分样式，第一个参数 \`triggerElement\` 表示触发元素 DOM 节点，第二个参数 \`popupElement\` 表示浮层元素 DOM 节点。TS 类型：\`Styles \| ((triggerElement: HTMLElement, popupElement: HTMLElement) => Styles)\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
overlayStyle | Boolean / Object / Function | - | 浮层样式，第一个参数 \`triggerElement\` 表示触发元素 DOM 节点，第二个参数 \`popupElement\` 表示浮层元素 DOM 节点。TS 类型：\`Styles \| ((triggerElement: HTMLElement, popupElement: HTMLElement) => Styles)\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
placement | String | top | 浮层出现位置。TS 类型：\`PopupPlacement\` \`type PopupPlacement = 'top'\|'left'\|'right'\|'bottom'\|'top-left'\|'top-right'\|'bottom-left'\|'bottom-right'\|'left-top'\|'left-bottom'\|'right-top'\|'right-bottom'\`。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/popup/type.ts) | N
popperOptions | Object | - | popper 初始化配置，详情参考 https://popper.js.org/docs/ | N
showArrow | Boolean | false | 是否显示浮层箭头 | N
trigger | String | hover | 触发浮层出现的方式。可选项：hover/click/focus/mousedown/context-menu | N
triggerElement | TNode | - | 触发元素。值类型为字符串表示元素选择器。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
visible | Boolean | - | 是否显示浮层。TS 类型：\`boolean\` | N
defaultVisible | Boolean | - | 是否显示浮层。非受控属性。TS 类型：\`boolean\` | N
zIndex | Number | - | 组件层级，Web 侧样式默认为 5500，移动端和小程序样式默认为 1500 | N
onScroll | Function |  | TS 类型：\`(context: { e: WheelEvent }) => void\`<br/>下拉选项滚动事件 | N
onScrollToBottom | Function |  | TS 类型：\`(context: { e: WheelEvent }) => void\`<br/>下拉滚动触底事件，常用于滚动到底执行具体业务逻辑 | N
onVisibleChange | Function |  | TS 类型：\`(visible: boolean, context: PopupVisibleChangeContext) => void\`<br/>当浮层隐藏或显示时触发，\`trigger=document\` 表示点击非浮层元素触发；\`trigger=context-menu\` 表示右击触发。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/popup/type.ts)。<br/>\`interface PopupVisibleChangeContext { e?: PopupTriggerEvent; trigger?: PopupTriggerSource }\`<br/><br/>\`type PopupTriggerEvent = MouseEvent \| FocusEvent \| KeyboardEvent\`<br/><br/>\`type PopupTriggerSource = 'document' \| 'trigger-element-click' \| 'trigger-element-hover' \| 'trigger-element-blur' \| 'trigger-element-focus' \| 'trigger-element-mousedown' \| 'context-menu' \| 'keydown-esc'\`<br/> | N
`)
interface Props {
  tab: string
}

define(
  'page-popup',
  class extends WeElement<Props> {
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
            <h3 id="基础弹出层">
              基础弹出层 <a class="header-anchor" href="#基础弹出层"></a>
            </h3>
            <p>
              由是让浮层内容和触发元素组成，两者均可自定义。使用 <td-code text="content"></td-code> 自定义浮层内容。
            </p>
            <demo-wrapper>
              <popup-base></popup-base>
            </demo-wrapper>
            <h3 id="触发元素">
              触发元素 <a class="header-anchor" href="#触发元素"></a>
            </h3>
            <p>
              可以使用 <td-code text="triggerElement"></td-code> 自定义触发元素。
              <h3 id="触发元素">
                触发元素 <a class="header-anchor" href="#触发元素"></a>
              </h3>
            </p>
            <demo-wrapper>
              <popup-trigger-element></popup-trigger-element>
            </demo-wrapper>
            <h3 id="不同触发方式的弹出层">
              不同触发方式的弹出层 <a class="header-anchor" href="#不同触发方式的弹出层"></a>
            </h3>
            <p>提供悬浮时触发（默认）、点击时触发、获取焦点时触发、右击时触发等方式。</p>
            <demo-wrapper>
              <popup-trigger></popup-trigger>
            </demo-wrapper>
            <h3 id="位置方向">
              位置方向 <a class="header-anchor" href="#位置方向"></a>
            </h3>
            <p>
              使用 <td-code text="placement"></td-code> 控制浮层方向，如果需要浮层箭头，设置{' '}
              <td-code text="showArrow=true"></td-code> 即可。
            </p>
            <demo-wrapper>
              <popup-placement></popup-placement>
            </demo-wrapper>
            <h3 id="浮层样式">
              浮层样式 <a class="header-anchor" href="#浮层样式"></a>
            </h3>
            <p>浮层样式可以使用 overlayClassName、 overlayStyle、 overlayInnerStyle 控制。</p>
            <ul>
              <li>
                <td-code text="overlayClassName"></td-code> 用于定义浮层样式类名。
              </li>
              <li>
                <td-code text="overlayStyle"></td-code>{' '}
                用于定义浮层样式，比如浮层宽度。浮层宽度默认根据内容宽度呈现，可自由设置宽度和最大宽度。
              </li>
              <li>
                <td-code text="overlayInnerStyle"></td-code>{' '}
                用于定义浮层内容部分样式，比如内容最大高度以及是否出滚动条。值为类型为函数时，可以实现浮层内容宽度和触发元素同宽。
              </li>
            </ul>
            <demo-wrapper>
              <popup-style></popup-style>
            </demo-wrapper>
            <h3 id="可控制显示的弹出层">
              可控制显示的弹出层 <a class="header-anchor" href="#可控制显示的弹出层"></a>
            </h3>
            <p>
              可以通过 <td-code text="visible"></td-code> 自由控制弹出层的显示或隐藏。
            </p>
            <demo-wrapper>
              <popup-visible></popup-visible>
            </demo-wrapper>
            <h3 id="挂载父节点">
              挂载父节点 <a class="header-anchor" href="#挂载父节点"></a>
            </h3>
            <p>
              浮层默认父节点是 <td-code text="body"></td-code>，可通过 <td-code text="attach"></td-code>{' '}
              自由调整挂载的父节点元素。
            </p>
            <demo-wrapper>待完善</demo-wrapper>
            <h3 id="可隐藏时销毁的弹出层">
              可隐藏时销毁的弹出层 <a class="header-anchor" href="#可隐藏时销毁的弹出层"></a>
            </h3>
            <td-code text="destroyOnClose"></td-code> 用于控制浮层隐藏时是否销毁浮层内容。
            <demo-wrapper>
              <popup-destroy></popup-destroy>
            </demo-wrapper>
            <h3 id="禁用状态的弹出层">
              禁用状态的弹出层 <a class="header-anchor" href="#禁用状态的弹出层"></a>
            </h3>
            <p>组件禁用后，不再显示弹出层。</p>
            <demo-wrapper>
              <popup-disable></popup-disable>
            </demo-wrapper>
            <h3 id="动态自适应">
              动态自适应 <a class="header-anchor" href="#动态自适应"></a>
            </h3>
            <p>当trigger或popup显示内容动态变化时，自适应调整位置</p>
            <demo-wrapper>
              <popup-dynamic></popup-dynamic>
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
