import { WeElement, define, h, createRef } from 'omi'
import '../common/index'
import {
  StarFilledIcon,
  ActivityIcon,
  AddAndSubtractIcon,
  AddCircleIcon,
  AddRectangleIcon,
  AddIcon,
  AddressBookIcon,
} from '../../../../../src/icon/index'

import '../../../../../src/space/index'
import * as marked from 'marked'
import '../../../../code-box/index.tsx'
import '../../../../../src/icon/bookmark'

import { tw } from 'omi-twind'
const docsHTML = marked.parse(`

## API
### IconSVG Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
style | Object | - | 样 | N
size | String | undefined | 图标尺寸，支持 'small', 'medium', 'large'，'35px', '3em' 等 | N
onClick | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>点击时触发 | N

`)
interface Props {
  tab: string
}

define(
  'page-icon',
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
      this.tdDocTabs.current.onchange = ({ detail: currentTab }) => {
        this.updateTab(currentTab)
      }
    }

    render() {
      return (
        <>
          <td-doc-tabs ref={this.tdDocTabs} tab={this.props.tab} style="display:block"></td-doc-tabs>
          <div style={this.isShow('demo')} name="DEMO">
            <h3 id="Icon图标">
              Icon图标 <a class="header-anchor" href="#Icon图标"></a>
            </h3>
            <h4 id="按需引入图标">
              按需引入图标 <a class="header-anchor" href="#按需引入图标"></a>
            </h4>
            <code-box
              title="按需引入图标"
              describe={`可以通过
              import { StarFilledIcon} from '../../../../../src/icon/index'或者
            import '../../../../../src/icon/bookmark'
              的方式按需引入图标`}
              code={`
\`\`\`html
import {
    StarFilledIcon,
    ActivityIcon,
    AddAndSubtractIcon,
    AddCircleIcon,
    AddRectangleIcon,
    AddIcon,
    AddressBookIcon,
  } from '../../../../../src/icon/index'
import '../../../../../src/icon/bookmark'
<div>
    <t-space>
        <ActivityIcon />
        <AddAndSubtractIcon />
        <AddCircleIcon />
        <AddRectangleIcon />
        <AddIcon />
        <AddressBookIcon />
        <t-icon-bookmark/>
    </t-space>
</div>
\`\`\`
          `}
            >
              <div slot="demo" class={tw`px-5 py-5`}>
                <t-space>
                  <ActivityIcon />
                  <AddAndSubtractIcon />
                  <AddCircleIcon />
                  <AddRectangleIcon />
                  <AddIcon />
                  <AddressBookIcon />
                  <t-icon-bookmark />
                </t-space>
              </div>
            </code-box>
            <h4 id="样式自定义">
              样式自定义 <a class="header-anchor" href="#样式自定义"></a>
            </h4>
            <code-box
              title="样式自定义"
              describe={`图标尺寸单位支持多种， 'small', 'medium', 'large', '35px', '3em' 等。 图标颜色使用 CSS 控制，如：
              style={{color: "red"}} 或者 style={{fill: "red"}}`}
              code={`
\`\`\`html
import { StarFilledIcon } from '../../../../../src/icon/index'
<div>
    <t-space direction="vertical">
        <h4>Size: small | medium | large | 1.5em | 2em | 40px</h4>
        <t-space align="center">
            <StarFilledIcon size="small"></StarFilledIcon>
            <StarFilledIcon size="medium"></StarFilledIcon>
            <StarFilledIcon size="large"></StarFilledIcon>
            <StarFilledIcon size="1.5em"></StarFilledIcon>
            <StarFilledIcon size="2em"></StarFilledIcon>
            <StarFilledIcon size="40px"></StarFilledIcon>
        </t-space>
        <h4>Color</h4>
        <t-space align="center">
            <StarFilledIcon></StarFilledIcon>
            <StarFilledIcon style={{ color: '#0d5bdb' }}></StarFilledIcon>
            <StarFilledIcon style={{ color: '#d54941' }}></StarFilledIcon>
            <StarFilledIcon style={{ color: '#e47922' }}></StarFilledIcon>
            <StarFilledIcon style={{ color: '#2ba471' }}></StarFilledIcon>
        </t-space>
    </t-space>
</div>
\`\`\`
          `}
            >
              <div slot="demo" class={tw`px-5 py-5`}>
                <t-space direction="vertical">
                  <h4>Size: small | medium | large | 1.5em | 2em | 40px</h4>
                  <t-space align="center">
                    <StarFilledIcon size="small"></StarFilledIcon>
                    <StarFilledIcon size="medium"></StarFilledIcon>
                    <StarFilledIcon size="large"></StarFilledIcon>
                    <StarFilledIcon size="1.5em"></StarFilledIcon>
                    <StarFilledIcon size="2em"></StarFilledIcon>
                    <StarFilledIcon size="40px"></StarFilledIcon>
                  </t-space>
                  <h4>Color</h4>
                  <t-space align="center">
                    <StarFilledIcon></StarFilledIcon>
                    <StarFilledIcon style={{ color: '#0d5bdb' }}></StarFilledIcon>
                    <StarFilledIcon style={{ color: '#d54941' }}></StarFilledIcon>
                    <StarFilledIcon style={{ color: '#e47922' }}></StarFilledIcon>
                    <StarFilledIcon style={{ color: '#2ba471' }}></StarFilledIcon>
                  </t-space>
                </t-space>
              </div>
            </code-box>
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
