import { define, OmiProps, h, render, createRef, WeElement } from 'omi'
import { SizeEnum } from '@src/common'
import './base-checkbox'
import './color-checkbox'
import './variant-checkbox'
import './size-checkbox'
import './shape-checkbox'
import '../common/index'
import '../../../../../src/button'
import '../../../../../src/button/_example/base'
import '../../../../../src/button/_example/block'
import '../../../../../src/button/_example/custom-element'
import '../../../../../src/button/_example/ghost'
import '../../../../../src/button/_example/icon'
import '../../../../../src/button/_example/shape'
import '../../../../../src/button/_example/size'
import '../../../../../src/button/_example/status'
import '../../../../../src/button/_example/theme'
import * as marked from 'marked'

const docsHTML = marked.parse(`
:: BASE_DOC ::

## API
### Link Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
block | boolean | - | 是否让button显示成块状，可以理解成fullwidth就好了 | N
disable | boolean | - | 是否禁用 | N
ghost | Boolean | - | 开启幽灵按钮 | N
loading | Boolean | 是否loading | N
href | String | - | 跳转链接 | N
icon | TElement | - | 前置图标。TS 类型：\`TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
theme | String | default | 组件风格，依次为默认色、品牌色、危险色、警告色、成功色。可选项：default/primary/danger/warning/success | N
size | String | medium | 尺寸。可选项：small/medium/large。TS 类型：\`SizeEnum\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
suffix | TElement | - | 后置图标。TS 类型：\`TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
tag | String | - | 跳转方式，如：当前页面打开、新页面打开等，同 HTML 属性 target 含义相同 'button'|'a'|'div' | N
type | 'submit','reset','button' | 'button' | 在button tag 类型下有效，与html button type 效果一致 | N
onClick | Function |  | TS 类型：\`(e: MouseEvent) => void\`<br/>点击事件，禁用状态不会触发点击事件 | N

`)

interface Props {
  tab: string
}
define(
  'page-button',
  class extends WeElement<Props> {
    block: boolean = false
    loading: boolean = false
    disabled: boolean = false
    ghost: boolean = false
    theme
    variant
    size: SizeEnum
    shape

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

    render(props: {} | OmiProps<{}, any>, store: any) {
      return (
        <>
          <td-doc-tabs ref={this.tdDocTabs} tab={this.props.tab} style="display:block"></td-doc-tabs>
          <div style={this.isShow('demo')} name="DEMO">
            <div style="display:flex;">
              <div style="width:500px;margin:auto;text-align:center;">
                <t-button
                  block={this.block}
                  loading={this.loading}
                  disabled={this.disabled}
                  ghost={this.ghost}
                  theme={this.theme}
                  variant={this.variant}
                  size={this.size}
                  shape={this.shape}
                >
                  Button
                </t-button>
              </div>
              <div>
                <t-button-base rootEl={this}></t-button-base>
                <t-button-color rootEl={this}></t-button-color>
                <t-button-variant rootEl={this}></t-button-variant>
                <t-button-size rootEl={this}></t-button-size>
                <t-button-shape rootEl={this}></t-button-shape>
              </div>
            </div>
            <h3 id="基础按钮">
              基础按钮 <a class="header-anchor" href="#基础按钮"></a>
            </h3>
            <p>基础按钮包括填充按钮、描边按钮、虚框按钮、和文字按钮。</p>
            <h4 id="填充按钮">
              填充按钮 <a class="header-anchor" href="#填充按钮"></a>
            </h4>
            <p>一般用于主按钮，是用户在整个页面需要关注优先级最高的操作，引导用户关注并操作。</p>
            <h4 id="描边按钮">
              描边按钮 <a class="header-anchor" href="#描边按钮"></a>
            </h4>
            <p>描边按钮常见白底加文字的形式，在视觉强调程度上弱于填充按钮，通常与填充按钮搭配成组使用。</p>
            <h4 id="虚框按钮">
              虚框按钮 <a class="header-anchor" href="#虚框按钮"></a>
            </h4>
            <p>按钮边框线为虚线，常用于表单中的添加配置项。</p>
            <h4 id="文字按钮">
              文字按钮 <a class="header-anchor" href="#文字按钮"></a>
            </h4>
            <p>直接使用文字作为按钮。是视觉吸引力最弱的一个按钮，通常出现在表格操作栏、标题和字段旁等。</p>

            <demo-wrapper>
              <button-base></button-base>
            </demo-wrapper>
            <h3 id="图标按钮">
              图标按钮 <a class="header-anchor" href="#图标按钮"></a>
            </h3>
            <p>图标按钮由图标+文字或图标构成。通过图标可增强识别性，以便直观理解。</p>
            <demo-wrapper>
              <button-icon></button-icon>
            </demo-wrapper>
            <h3 id="幽灵按钮">
              幽灵按钮 <a class="header-anchor" href="#幽灵按钮"></a>
            </h3>
            <p>幽灵按钮将按钮的内容反色，背景变为透明，一般是底色透明。常用于有色背景上，例如 banner 图等。</p>
            <demo-wrapper style={{ backgroundColor: '#000' }}>
              <button-ghost></button-ghost>
            </demo-wrapper>
            <h3 id="block-按钮">
              Block 按钮 <a class="header-anchor" href="#block-按钮"></a>
            </h3>
            <p>Block 按钮在宽度上充满其所在的父容器（无 padding 和 margin 值）。该按钮常见于移动端和一些表单场景中。</p>

            <demo-wrapper>
              <button-block></button-block>
            </demo-wrapper>
            <h3 id="不同颜色主题按钮">
              不同颜色主题按钮 <a class="header-anchor" href="#不同颜色主题按钮"></a>
            </h3>
            <p>提供浅灰色、蓝色、红色、黄色和绿色为主题的按钮。</p>
            <demo-wrapper>
              <button-theme></button-theme>
            </demo-wrapper>
            <h3 id="不同状态的按钮">
              不同状态的按钮 <a class="header-anchor" href="#不同状态的按钮"></a>
            </h3>
            <p>提供加载、禁用两种状态。</p>
            <demo-wrapper>
              <button-status></button-status>
            </demo-wrapper>
            <h3 id="不同尺寸的按钮">
              不同尺寸的按钮 <a class="header-anchor" href="#不同尺寸的按钮"></a>
            </h3>
            <p>提供大、中（默认）、小三种尺寸。</p>
            <demo-wrapper>
              <button-size></button-size>
            </demo-wrapper>
            <h3 id="不同形状的按钮">
              不同形状的按钮 <a class="header-anchor" href="#不同形状的按钮"></a>
            </h3>
            <p>提供长方形、正方形、圆角长方形、圆形四种形状。</p>
            <demo-wrapper>
              <button-shape></button-shape>
            </demo-wrapper>
            <h3 id="自定义渲染元素">
              自定义渲染元素 <a class="header-anchor" href="#自定义渲染元素"></a>
            </h3>
            <p>
              支持自定义渲染元素，支持 <td-code text="div/a/button"></td-code>
            </p>
            <demo-wrapper>
              <button-custom-element></button-custom-element>
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
