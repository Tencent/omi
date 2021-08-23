import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '@omiu/tag'
import '../docs/admin-docs'
import './code-demo'
import './code-demo/container'

interface Props {}

const tagName = 'tag-component'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Props
    }
  }
}

@tag(tagName)
export default class extends WeElement<Props> {
  static css = [sheet.target, 'o-tag{ margin: 4px }']

  installed() {}

  render() {
    // const gridItem = tw`px-2 w-full md:w-6/12`
    const gridStyle = { breakInside: 'avoid', padding: '0 0 0 0' }

    return (
      <code-demo-container>
        <code-demo
          title="标签"
          describe={'不同类型的标签'}
          code={`
\`\`\`html
<o-tag>默认</o-tag>
<o-tag type="success">成功</o-tag>
<o-tag type="info">信息</o-tag>
<o-tag type="warning">警告</o-tag>
<o-tag type="danger">危险</o-tag>
\`\`\`
          `}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-tag>默认</o-tag>
            <o-tag type="success">成功</o-tag>
            <o-tag type="info">信息</o-tag>
            <o-tag type="warning">警告</o-tag>
            <o-tag type="danger">危险</o-tag>
          </div>
        </code-demo>

        <code-demo
          title="禁用"
          describe="禁用状态下的呈现"
          code={`
\`\`\`html
<o-tag disabled>禁用</o-tag>
<o-tag disabled type="success">成功</o-tag>
<o-tag disabled type="info">信息</o-tag>
<o-tag disabled type="warning">警告</o-tag>
<o-tag disabled type="danger">危险</o-tag>
\`\`\`
                    `}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-tag disabled>禁用</o-tag>
            <o-tag disabled type="success">
              成功
            </o-tag>
            <o-tag disabled type="info">
              信息
            </o-tag>
            <o-tag disabled type="warning">
              警告
            </o-tag>
            <o-tag disabled type="danger">
              危险
            </o-tag>
          </div>
        </code-demo>

        <code-demo
          title="尺寸"
          describe={'支持 4 种尺寸大小'}
          code={`
\`\`\`html
<o-tag>默认标签</o-tag>
<o-tag size="medium">中等标签</o-tag>
<o-tag size="small">小型标签</o-tag>
<o-tag size="mini">超小标签</o-tag>
\`\`\`
             `}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-tag>默认标签</o-tag>
            <o-tag size="medium">中等标签</o-tag>
            <o-tag size="small">小型标签</o-tag>
            <o-tag size="mini">超小标签</o-tag>
          </div>
        </code-demo>

        <code-demo
          title="关闭"
          describe={'关闭标签'}
          code={`
\`\`\`html
<o-tag closable>关闭标签</o-tag>
<o-tag size="medium" closable>中等标签</o-tag>
<o-tag size="small" closable>小型标签</o-tag>
<o-tag size="mini" closable>超小标签</o-tag>
\`\`\`
             `}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-tag closable>关闭标签</o-tag>
            <o-tag size="medium" closable>
              中等标签
            </o-tag>
            <o-tag size="small" closable>
              小型标签
            </o-tag>
            <o-tag size="mini" closable>
              超小标签
            </o-tag>
          </div>
        </code-demo>
      </code-demo-container>
    )
  }
}
