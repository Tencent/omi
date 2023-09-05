import { WeElement, define, h, createRef } from 'omi'
import '../common/index'
import '../../../../../src/dropdown/_example/base'
import '../../../../../src/dropdown/_example/button'
import '../../../../../src/dropdown/_example/child'
import '../../../../../src/dropdown/_example/click'
import '../../../../../src/dropdown/_example/custom'
import '../../../../../src/dropdown/_example/disable'
import '../../../../../src/dropdown/_example/left'
import '../../../../../src/dropdown/_example/icon'
import '../../../../../src/dropdown/_example/long'
import '../../../../../src/dropdown/_example/multiple'
import '../../../../../src/dropdown/_example/split'
import '../../../../../src/dropdown/_example/theme'
import * as marked from 'marked'

const docsHTML = marked.parse(`
## API
### Dropdown Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：\`React.CSSProperties\` | N
direction | String | right | 多层级操作时，子层级展开方向。可选项：left/right | N
disabled | Boolean | false | 是否禁用组件 | N
hideAfterItemClick | Boolean | true | 点击选项后是否自动隐藏弹窗 | N
maxColumnWidth | String / Number | 100 | 选项最大宽度，内容超出时，显示为省略号。值为字符串时，值就是最大宽度；值为数字时，单位：px | N
maxHeight | Number | 300 | 弹窗最大高度，单位：px 。统一控制每一列的高度 | N
minColumnWidth | String / Number | 10 | 选项最小宽度。值为字符串时，值就是最小宽度；值为数字时，单位：px | N
options | Array | [] | 下拉操作项。TS 类型：\`Array<DropdownOption>\` \`type DropdownOption = { children?: Array<TdDropdownItemProps> } & TdDropdownItemProps & Record<string, any>\`。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/dropdown/type.ts) | N
placement | String | bottom-left | 弹窗定位方式，可选值同 Popup 组件。可选项：top/left/right/bottom/top-left/top-right/bottom-left/bottom-right/left-top/left-bottom/right-top/right-bottom | N
popupProps | Object | - | 透传  Popup 组件属性，方便更加自由地控制。比如使用 popupProps.overlayStyle 设置浮层样式。TS 类型：\`PopupProps\`，[Popup API Documents](./popup?tab=api)。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/dropdown/type.ts) | N
trigger | String | hover | 触发下拉显示的方式。可选项：hover/click/focus/context-menu | N
onClick | Function |  | TS 类型：\`(dropdownItem: DropdownOption, context: { e: MouseEvent }) => void\`<br/>下拉操作项点击时触发 | N

### DropdownItem Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：\`React.CSSProperties\` | N
active | Boolean | false | 是否高亮当前操作项 | N
content | TNode | '' | 下拉操作项内容。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
disabled | Boolean | false | 是否禁用操作项 | N
divider | Boolean | false | 是否显示操作项之间的分隔线（分隔线默认在下方） | N
prefixIcon | TElement | - | 组件前置图标。TS 类型：\`TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
theme | String | default | 下拉菜单选项主题。可选项：default/success/warning/error。TS 类型：\`DropdownItemTheme\` \`type DropdownItemTheme = 'default' \| 'success' \| 'warning' \| 'error'\`。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/dropdown/type.ts) | N
value | String / Number / Object | - | 下拉操作项唯一标识。TS 类型：\`string \| number \| { [key: string]: any }\` | N
onClick | Function |  | TS 类型：\`(dropdownItem: DropdownOption, context: { e: MouseEvent }) => void\`<br/>点击时触发 | N
`)
interface Props {
  tab: string
}

define(
  'page-dropdown',
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
            <h3 id="文字下拉菜单">
              文字下拉菜单 <a class="header-anchor" href="#文字下拉菜单"></a>
            </h3>
            <p>文字按钮触发下拉菜单。常用于空间极度受限的收纳操作场景，一般用于表格内详情操作的收纳。</p>
            <demo-wrapper>
              <dropdown-base></dropdown-base>
            </demo-wrapper>
            <h3 id="按钮下拉菜单">
              按钮下拉菜单 <a class="header-anchor" href="#按钮下拉菜单"></a>
            </h3>
            <p>普通按钮触发下拉菜单。常用于操作收纳场景。</p>
            <demo-wrapper>
              <dropdown-button></dropdown-button>
            </demo-wrapper>
            <h3 id="带分割线下拉菜单">
              带分割线下拉菜单 <a class="header-anchor" href="#带分割线下拉菜单"></a>
            </h3>
            <p>通过分割线区分不同的下拉菜单操作。常用于需要区分不同操作结果的场景。</p>
            <demo-wrapper>
              <dropdown-split></dropdown-split>
            </demo-wrapper>
            <h3 id="多层下拉菜单">
              多层下拉菜单 <a class="header-anchor" href="#多层下拉菜单"></a>
            </h3>
            <p>带逻辑层级关系的操作下拉菜单。常用于需要收纳多层逻辑的操作场景。</p>
            <demo-wrapper>
              <dropdown-multiple></dropdown-multiple>
            </demo-wrapper>
            <h3 id="带禁用操作项的下拉菜单">
              带禁用操作项的下拉菜单 <a class="header-anchor" href="#带禁用操作项的下拉菜单"></a>
            </h3>
            <p>下拉菜单的操作项可以设置禁用。常用于禁用部分操作项的场景。</p>
            <demo-wrapper>
              <dropdown-disable></dropdown-disable>
            </demo-wrapper>
            <h3 id="自定义其他属性的下拉菜单">
              自定义其他属性的下拉菜单 <a class="header-anchor" href="#自定义其他属性的下拉菜单"></a>
            </h3>
            <p>
              下拉菜单依赖 <td-code text="Popup"></td-code> 组件，可以透传自定义 <td-code text="Popup"></td-code>{' '}
              组件的属性。
            </p>
            <demo-wrapper>
              <dropdown-custom></dropdown-custom>
            </demo-wrapper>
            <h3 id="定义最大高度的下拉菜单">
              定义最大高度的下拉菜单 <a class="header-anchor" href="#定义最大高度的下拉菜单"></a>
            </h3>
            <p>下拉菜单支持定义最大高度。</p>
            <demo-wrapper>
              <dropdown-long></dropdown-long>
            </demo-wrapper>
            <h3 id="自定义主题的下拉菜单">
              自定义主题的下拉菜单 <a class="header-anchor" href="#自定义主题的下拉菜单"></a>
            </h3>
            <p>下拉菜单的菜单项都支持自定义主题，根据具体场景使用。</p>
            <demo-wrapper>
              <dropdown-theme></dropdown-theme>
            </demo-wrapper>
            <h3 id="向左展开的下拉菜单">
              向左展开的下拉菜单 <a class="header-anchor" href="#向左展开的下拉菜单"></a>
            </h3>
            <p>下拉菜单支持向左侧展开。</p>
            <demo-wrapper>
              <dropdown-left></dropdown-left>
            </demo-wrapper>
            <h3 id="带图标的下拉菜单">
              带图标的下拉菜单 <a class="header-anchor" href="#带图标的下拉菜单"></a>
            </h3>
            <p>下拉菜单支持配置菜单项的前置图标。</p>

            <demo-wrapper>
              <dropdown-icon></dropdown-icon>
            </demo-wrapper>
            <h3 id="通过传入children方式使用下拉菜单">
              通过传入Children方式使用下拉菜单 <a class="header-anchor" href="#通过传入children方式使用下拉菜单"></a>
            </h3>
            <p>下拉菜单操作项支持通过传入Children的方式传递操作项。</p>
            <demo-wrapper>
              <dropdown-child></dropdown-child>
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
