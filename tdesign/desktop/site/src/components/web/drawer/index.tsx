import { WeElement, define, h, createRef } from 'omi'
import '../common/index'
import '../../../../../src/drawer/_example/base'
import '../../../../../src/drawer/_example/custom'
import '../../../../../src/drawer/_example/destroy'
import '../../../../../src/drawer/_example/no-mask'
import '../../../../../src/drawer/_example/operation'
import '../../../../../src/drawer/_example/placement'
import '../../../../../src/drawer/_example/popup'
import '../../../../../src/drawer/_example/size-draggable'
import '../../../../../src/drawer/_example/size'
import * as marked from 'marked'

const docsHTML = marked.parse(`

## API
### Drawer Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：\`React.CSSProperties\` | N
attach | String / Function | - | 抽屉挂载的节点，默认挂在组件本身的位置。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body。TS 类型：\`AttachNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
body | TNode | - | 抽屉内容。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
cancelBtn | TNode | - | 取消按钮，可自定义。值为 null 则不显示取消按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 TNode 自定义按钮时，需自行控制取消事件。TS 类型：\`FooterButton\` | N
children | TNode | - | 抽屉内容，同 body。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
closeBtn | TNode | - | 关闭按钮，可以自定义。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string 则直接显示值，如：“关闭”。值类型为 TNode，则表示呈现自定义按钮示例。TS 类型：\`string \| boolean \| TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
closeOnEscKeydown | Boolean | true | 按下 ESC 时是否触发抽屉关闭事件 | N
closeOnOverlayClick | Boolean | true | 点击蒙层时是否触发抽屉关闭事件 | N
confirmBtn | TNode | - | 确认按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 TNode 自定义按钮时，需自行控制确认事件。TS 类型：\`FooterButton\` \`type FooterButton = string \| ButtonProps \| TNode\`，[Button API Documents](./button?tab=api)。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts)。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/drawer/type.ts) | N
destroyOnClose | Boolean | false | 抽屉关闭时是否销毁节点 | N
footer | TNode | true | 底部操作栏，默认会有“确认”和“取消”两个按钮。值为 true 显示默认操作按钮，值为 false 或 null 不显示任何内容，值类型为 TNode 表示自定义底部内容。TS 类型：\`boolean \| TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
header | TNode | true | 头部内容。值为 true 显示空白头部，值为 false 不显示头部，值类型为 string 则直接显示值，值类型为 TNode 表示自定义头部内容。TS 类型：\`string \| boolean \| TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
mode | String | overlay | 展开方式，有两种：直接展示在内容上方 和 推开内容区域。可选项：overlay/push | N
placement | String | right | 抽屉方向。可选项：left/right/top/bottom | N
preventScrollThrough | Boolean | true | 防止滚动穿透 | N
showInAttachedElement | Boolean | false | 仅在挂载元素中显示抽屉，默认在浏览器可视区域显示。父元素需要有定位属性，如：position: relative | N
showOverlay | Boolean | true | 是否显示遮罩层 | N
size | String | 'small' | 尺寸，支持 'small', 'medium', 'large'，'35px', '30%',  '3em' 等。纵向抽屉调整的是抽屉宽度，横向抽屉调整的是抽屉高度 | N
sizeDraggable | Boolean | false | 抽屉大小可拖拽调整，横向抽屉调整宽度，纵向抽屉调整高度 | N
visible | Boolean | false | 组件是否可见 | N
zIndex | Number | - | 抽屉层级，样式默认为 1500 | N
onCancel | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>如果“取消”按钮存在，点击“取消”按钮时触发，同时触发关闭事件 | N
onClose | Function |  | TS 类型：\`(context: DrawerCloseContext) => void\`<br/>关闭事件，取消按钮点击时、关闭按钮点击时、ESC 按下时、点击蒙层时均会触发。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/drawer/type.ts)。<br/>\`type DrawerEventSource = 'esc' \| 'close-btn' \| 'cancel' \| 'overlay'\`<br/><br/>\`interface DrawerCloseContext { trigger: DrawerEventSource; e: MouseEvent \| KeyboardEvent }\`<br/> | N
onCloseBtnClick | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>如果关闭按钮存在，点击关闭按钮时触发该事件，同时触发关闭事件 | N
onConfirm | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>如果“确认”按钮存在，则点击“确认”按钮时触发 | N
onEscKeydown | Function |  | TS 类型：\`(context: { e: KeyboardEvent }) => void\`<br/>按下 ESC 键时触发 | N
onOverlayClick | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>如果蒙层存在，点击蒙层时触发 | N

### DrawerOptions

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
attach | String / Function | 'body' | 抽屉挂载的节点。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body。TS 类型：\`AttachNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
className | String | - | 抽屉类名，示例：'t-class-drawer-first t-class-drawer-second' | N
style | Object | - | 弹框 style 属性，输入 [CSSStyleDeclaration.cssText](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/cssText)。TS 类型：\`Styles\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
\`Omit<DrawerProps, 'attach'>\` | \- | - | 继承 \`Omit<DrawerProps, 'attach'>\` 中的全部 API | N

### DrawerInstance

名称 | 参数 | 返回值 | 描述
-- | -- | -- | --
destroy | \- | \- | 销毁抽屉
hide | \- | \- | 隐藏抽屉
show | \- | \- | 显示抽屉
update | \`(props: DrawerOptions)\` | \- | 更新抽屉内容

### drawer 或 DrawerPlugin

参数名称 | 参数类型 | 参数默认值 | 参数说明
-- | -- | -- | --
options | \- | - | TS 类型：\`DrawerOptions\`

`)
interface Props {
  tab: string
}

define(
  'page-drawer',
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
            <h3 id="可查看的抽屉">
              可查看的抽屉 <a class="header-anchor" href="#可查看的抽屉"></a>
            </h3>
            <p>承载展示性的信息内容。当页面空间有限时，可用抽屉增大页面扩展性。</p>
            <demo-wrapper>
              <drawer-base></drawer-base>
            </demo-wrapper>
            <h3 id="可操作的抽屉">
              可操作的抽屉 <a class="header-anchor" href="#可操作的抽屉"></a>
            </h3>
            <p>操作类抽屉在抽屉中承载需要编辑或操作的表单，可在用户需要操作时使用。</p>
            <demo-wrapper>
              <drawer-operation></drawer-operation>
            </demo-wrapper>
            <h3 id="不显示蒙层的抽屉">
              不显示蒙层的抽屉 <a class="header-anchor" href="#不显示蒙层的抽屉"></a>
            </h3>
            <p>
              通过设置<td-code text="showOverlay"></td-code>，可以控制是否显示抽屉的蒙层。
            </p>
            <demo-wrapper>
              <drawer-no-mask></drawer-no-mask>
            </demo-wrapper>
            <h3 id="不同位置的抽屉">
              不同位置的抽屉 <a class="header-anchor" href="#不同位置的抽屉"></a>
            </h3>
            <p>
              通过<td-code text="placement"></td-code>，可以让抽屉在不同的位置展示。
            </p>
            <demo-wrapper>
              <drawer-placement></drawer-placement>
            </demo-wrapper>
            <h3 id="不同尺寸的抽屉">
              不同尺寸的抽屉 <a class="header-anchor" href="#不同尺寸的抽屉"></a>
            </h3>
            <p>
              通过 <td-code text="size"></td-code> 属性控制抽屉展示宽度。
            </p>
            <demo-wrapper>
              <drawer-size></drawer-size>
            </demo-wrapper>
            <h3 id="自定义头部和底部的抽屉">
              自定义头部和底部的抽屉 <a class="header-anchor" href="#自定义头部和底部的抽屉"></a>
            </h3>
            <p>
              通过<td-code text="header"></td-code>和<td-code text="footer"></td-code> 可以调整抽屉的头部和底部内容。
            </p>
            <demo-wrapper>
              <drawer-custom></drawer-custom>
            </demo-wrapper>

            <h3 id="弹出模式抽屉">
              弹出模式抽屉 <a class="header-anchor" href="#弹出模式抽屉"></a>
            </h3>
            <p>
              支持覆盖及推开内容区域的方式展示抽屉， 整个页面的 <td-code text="push"></td-code> 模式需设置{' '}
              <td-code text="attach"></td-code> 为 body。（抽屉组件默认挂载到元素本身所在的位置）。
            </p>
            <demo-wrapper>
              <drawer-popup></drawer-popup>
            </demo-wrapper>

            <h3 id="渲染和呈现在当前父元素的抽屉">
              渲染和呈现在当前父元素的抽屉 <a class="header-anchor" href="#渲染和呈现在当前父元素的抽屉"></a>
            </h3>
            <p>
              通过 <td-code text="showInAttachedElement"></td-code>{' '}
              属性指定抽屉出现的父容器元素，父元素需要有定位属性，如：position: relative。
            </p>
            <demo-wrapper>待完善</demo-wrapper>
            <h3 id="关闭时销毁抽屉">
              关闭时销毁抽屉 <a class="header-anchor" href="#关闭时销毁抽屉"></a>
            </h3>
            <p>
              通过<td-code text="destroyOnClose"></td-code>，可以在关闭抽屉时将抽屉从页面节点上销毁。
            </p>
            <demo-wrapper>
              <drawer-destroy></drawer-destroy>
            </demo-wrapper>
            <h3 id="可拖拽的抽屉">
              可拖拽的抽屉 <a class="header-anchor" href="#可拖拽的抽屉"></a>
            </h3>
            <p>
              通过<td-code text="sizeDraggable"></td-code>，可以拖拽抽屉的边缘自由改变抽屉的大小。
            </p>
            <demo-wrapper>
              <drawer-size-draggable></drawer-size-draggable>
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
