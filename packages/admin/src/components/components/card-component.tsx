import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '@omiu/card'
import '@omiu/link'
import '@omiu/image'
import '@omiu/tabs'
import '@omiu/icon/add-a-photo-rounded'
import '@omiu/icon/add-comment-rounded'
import '@omiu/icon/add-ic-call-rounded'
import '../docs/admin-docs'
import './code-demo'
import './code-demo/container'

interface Props { }

const tagName = 'card-component'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Props
    }
  }
}

@tag(tagName)
export default class extends WeElement<Props> {
  static css = sheet.target

  mdA = `
  \`\`\`html
  // hoverable设置阴影,always总是显示|true鼠标悬浮时|false从不显示
  <o-card hoverable="always">
    <!-- slot="cover" 若不填充内容，则header栏不显示。-简单卡片 -->
    <div slot="cover">
    </div>
      <p>Simple Card</p>
      <p>Card content</p>
      <p>Card content</p>
  </o-card>
  \`\`\`
  `
  mdB = `
  \`\`\`html
  <o-card title="Default size card" hoverable="always">
    <o-link
      underline='0'
      type="primary"
      target="_blank"
      href="https://tencent.github.io/omi/"
      slot="extra">
        More
    </o-link>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
  </o-card>
  \`\`\`
  `

  mdC = `
  \`\`\`html
  <o-card
    title="Action card"
    size="medium"
    id="myActionA"
    hoverable="always"
    actions={
      [{icon: 'add-a-photo-rounded'},
      {icon: 'add-ic-call-rounded'},
      {icon: 'add-comment-rounded'}]}>
    <o-link
      underline='0'
      type="primary"
      target="_blank"
      href="https://tencent.github.io/omi/"
      slot="extra">
        More
    </o-link>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
  </o-card>

  <o-card
    title="DNT's card"
    id="myActionB"
    actions={[{icon: 'add-ic-call-rounded'}]}
    hoverable="true">
    <o-avatar slot="extra">DNT</o-avatar>
      <p>Tel:</p>
      <p>Company:</p>
      <p>...</p>
  </o-card>
  \`\`\`
  `
  mdD = `
  \`\`\`html
  <o-card
    size="large"
    id="myActionC"
    actions={
      [{icon: 'add-ic-call-rounded'},
      {icon: 'add-comment-rounded'}]}
      hoverable="true">
    <o-image
      slot="cover"
      src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb">
    </o-image>
    <div style="display: flex; justify-content: space-around; margin: 10px 0px">
      <o-avatar style="margin: auto 0px;"
        src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png">
      </o-avatar>
      <div>
        <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
        <p>This is the description</p>
      </div>
    </div>
  </o-card>

  <o-card hoverable="true">
    <o-image
      slot="cover"
      src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1199435000/VCG211199435578.jpg/thumb">
    </o-image>
      <p style="font-weight: 500>OMI Card</p>
      <p><o-link
        underline='0'
        type="primary"
        target="_blank"
        href="https://tencent.github.io/omi/"
        slot="extra">
        Welcome to OMI
      </o-link></p>
  </o-card>
  \`\`\`
  `

  installed() { }

  render() {
    // const gridItem = tw`px-2 w-full md:w-6/12`
    const gridStyle = { breakInside: 'avoid', padding: '0 0 0 0' }

    return (
      <code-demo-container>
        <code-demo
          title="简单卡片"
          describe={'只包含内容区域'}
          code={this.mdA}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-card title="Simple Card" hoverable="always">
              <div slot="cover"></div>
              <p>Simple Card</p>
              <p>Card content</p>
              <p>Card content</p>
            </o-card>
          </div>
        </code-demo>

        <code-demo
          title="典型卡片"
          describe="包含标题、内容、操作区域(extra)"
          code={this.mdB}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-card title="Default size card" hoverable="always">
              <o-link
                underline="0"
                type="primary"
                target="_blank"
                href="https://tencent.github.io/omi/"
                slot="extra"
              >
                More
              </o-link>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </o-card>
          </div>
        </code-demo>

        <code-demo
          title="功能卡片"
          describe="支持底部栏添加触发事件(o-icon)"
          code={this.mdC}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-card
              title="Action card"
              hoverable="always"
              size="medium"
              id="myActionA"
              actions={[
                { icon: 'add-a-photo-rounded' },
                { icon: 'add-ic-call-rounded' },
                { icon: 'add-comment-rounded' }
              ]}
            >
              <o-link
                underline="0"
                type="primary"
                target="_blank"
                href="https://tencent.github.io/omi/"
                slot="extra"
              >
                More
              </o-link>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </o-card>
            <o-card
              title="DNT's card"
              id="myActionB"
              actions={[{ icon: 'add-ic-call-rounded' }]}
              hoverable="true"
            >
              <o-avatar slot="extra">DNT</o-avatar>
              <p>Tel:</p>
              <p>Company:</p>
              <p>...</p>
            </o-card>
          </div>
        </code-demo>

        <code-demo
          title="相册卡片"
          describe="支持封面、头像、标题和描述信息的卡片"
          code={this.mdD}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-card
              title="Action card"
              size="large"
              id="myActionC"
              actions={[
                { icon: 'add-ic-call-rounded' },
                { icon: 'add-comment-rounded' }
              ]}
              hoverable="true"
            >
              <o-image
                slot="cover"
                src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"
              ></o-image>
              <div style="display: flex; justify-content: space-around; margin: 10px 0px">
                <o-avatar
                  style="margin: auto 0px;"
                  src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"
                ></o-avatar>
                <div>
                  <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
                  <p>This is the description</p>
                </div>
              </div>
            </o-card>
            <o-card hoverable="true">
              <o-image
                slot="cover"
                src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1199435000/VCG211199435578.jpg/thumb"
              ></o-image>
              <p>OMI Card</p>
              <p>
                <o-link
                  underline="0"
                  type="primary"
                  target="_blank"
                  href="https://tencent.github.io/omi/"
                  slot="extra"
                >
                  Welcome to OMI
                </o-link>
              </p>
            </o-card>
          </div>
        </code-demo>
      </code-demo-container>
    )
  }
}
