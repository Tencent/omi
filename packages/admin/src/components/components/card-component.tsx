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
import {
  showLoading,
  hideLoading,
} from '@omiu/toast'

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

  pickAction = (evt) => {
    const btn = evt.detail.action
    if (btn.icon === 'add-comment-rounded') {
      showLoading('发送短信息...')
      setTimeout(() => {
        hideLoading()
      }, 1000)
    } else if (btn.icon === 'add-a-photo-rounded') {
      showLoading('正在打开相机...')
      setTimeout(() => {
        hideLoading()
      }, 1000)
    } else if (btn.icon === 'add-ic-call-rounded') {
      showLoading('正在呼叫...')
      setTimeout(() => {
        hideLoading()
      }, 1000)
    }
  }

  mdA = `
  \`\`\`html
  // hoverable?: String,  设置阴影,默认为 'true' 鼠标移过时悬浮,'always'总是显示|'true'鼠标移过时悬浮|'false'从不显示

  // bordered?:  Boolean, 设置边框,默认开启 bordered=true,关闭 bordered=false

  // title?: String,      设置顶部标题,默认为''

  // actions?: any[],     设置底部按钮,例如：actions={ [{ icon: 'add-ic-call-rounded' }] },
  
  // onChange?: (evt: any, index: number) => void    设置回调事件,例如onChange={this.pickAction}触发回调

  //***特别注意：Card组件没有预设宽高，需在外部为容器设置宽高以达到理想效果。

  <!-- slot="cover" 若不填充内容，则header栏不显示。-简单卡片 -->
  <o-card hoverable="always" block="1">
    <div slot="cover">
    </div>
      <p>Simple Card</p>
      <p>Card content</p>
      <p>Card content</p>
  </o-card>
  <o-card title="no border Card" hoverable="true" bordered={false} block="1">
    <div slot="cover"></div>
    <p>Simple Card</p>
    <p>Card content</p>
    <p>Card content</p>
  </o-card>
  \`\`\`
  `
  mdB = `
  \`\`\`html
  <!-- slot="extra" 填充内容，位置在header栏右侧。-slot="extra" 具名插槽 -->
  <o-card title="Default size card" hoverable="always" block="1">
    <o-link
      underline={false}
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
  <o-card title="no border card" hoverable="true" bordered={false} block="1">
    <o-link
      underline={false}
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
  \`\`\`
  `

  mdC = `
  \`\`\`html
  <!-- 通过onChange设置回调事件,例如onChange={this.pickAction}触发回调 -->
  
  JSX:
  // 结合 o-toast 展示
  pickAction = (evt) => {
    const btn = evt.detail.action
    if(btn.icon === 'add-comment-rounded') {
      showLoading('发送短信息...')
      setTimeout(() => {
        hideLoading()
      }, 1000)
    } else if (btn.icon === 'add-a-photo-rounded') {
      showLoading('正在打开相机...')
      setTimeout(() => {
        hideLoading()
      }, 1000)
    } else if (btn.icon === 'add-ic-call-rounded') {
      showLoading('正在呼叫...')
      setTimeout(() => {
        hideLoading()
      }, 1000)
    }
  }

  <o-card
    title="Action card"
    hoverable="always"
    onChange={this.pickAction}
    block="1"
    actions={
      [{icon: 'add-a-photo-rounded'},
      {icon: 'add-ic-call-rounded'},
      {icon: 'add-comment-rounded'}]}>
    <o-link
      underline={false}
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
    onChange={this.pickAction}
    block="1"
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
  <!-- slot="cover" 填充内容，将覆盖header栏。填充<o-image><o-image/>以完成相册卡片效果。  -slot="cover" 具名插槽 -->
  <o-card
    onChange={this.pickAction}
    actions={
      [{icon: 'add-ic-call-rounded'},
      {icon: 'add-comment-rounded'}]}
      hoverable="always"
      block="1">
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

  <o-card hoverable="true" block="1">
    <o-image
      slot="cover"
      src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1199435000/VCG211199435578.jpg/thumb">
    </o-image>
      <p style="font-weight: 500>OMI Card</p>
      <p><o-link
        underline={false}
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
          <div slot="demo" class={tw`flex flex-wrap justify-around px-5 py-5`}>
            <div class={tw`mt-2 mb-10 mx-2 h-36 w-60`}>
              <o-card title="Simple Card" hoverable="always" block="1">
                <div slot="cover"></div>
                <p>Simple Card</p>
                <p>Card content</p>
                <p>Card content</p>
              </o-card>
            </div>
            <div class={tw`mt-2 mb-10 mx-2 h-36 w-60`}>
              <o-card title="Simple Card" hoverable="true" block="1" bordered={false}>
                <div slot="cover"></div>
                <p>no border Card</p>
                <p>Card content</p>
                <p>Card content</p>
              </o-card>
            </div>
          </div>
        </code-demo>

        <code-demo
          title="功能卡片"
          describe="支持底部栏添加触发事件(o-icon)"
          code={this.mdC}
          style={gridStyle}
        >
          <div slot="demo" class={tw`flex flex-wrap justify-around px-5 py-5`}>
            <div class={tw`mt-2 mb-10 mx-5 h-56 w-72`}>
              <o-card
                block="1"
                title="Action card"
                hoverable="always"
                onChange={this.pickAction}
                actions={[
                  { icon: 'add-a-photo-rounded' },
                  { icon: 'add-ic-call-rounded' },
                  { icon: 'add-comment-rounded' }
                ]}
              >
                <o-link
                  underline={false}
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
            <div class={tw`mt-2 mb-10 mx-5 h-56 w-72`}>
              <o-card
                block="1"
                title="DNT's card"
                onChange={this.pickAction}
                actions={[{ icon: 'add-ic-call-rounded' }]}
                hoverable="true"
              >
                <o-avatar slot="extra">DNT</o-avatar>
                <p>Tel:</p>
                <p>Company:</p>
                <p>...</p>
              </o-card>
            </div>
          </div>
        </code-demo>

        <code-demo
          title="典型卡片"
          describe="包含标题、内容、操作区域(extra)"
          code={this.mdB}
          style={gridStyle}
        >
          <div slot="demo" class={tw`flex flex-wrap justify-around px-5 py-5`}>
            <div class={tw`mt-2 mb-10 mx-2 h-36 w-60`}>
              <o-card title="Default size card" hoverable="true" block="1" >
                <o-link
                  underline={false}
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
            <div class={tw`mt-2 mb-10 mx-2 h-36 w-60`}>
              <o-card title="no border card" hoverable="true" bordered={false} block="1">
                <o-link
                  underline={false}
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
          </div>
        </code-demo>

        <code-demo
          title="相册卡片"
          describe="支持封面、头像、标题和描述信息的卡片"
          code={this.mdD}
          style={gridStyle}
        >
          <div slot="demo" class={tw`flex flex-wrap justify-around px-5 py-5`}>
            <div class={tw`mt-2 mb-10 mx-5 h-80 w-72`}>
              <o-card
                block="1"
                onChange={this.pickAction}
                title="Action card"
                actions={[
                  { icon: 'add-ic-call-rounded' },
                  { icon: 'add-comment-rounded' }
                ]}
                hoverable="always"
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
            </div>
            <div class={tw`mt-2 mb-10 mx-5 h-80 w-72`}>
              <o-card block="1" hoverable="true">
                <o-image
                  slot="cover"
                  src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1199435000/VCG211199435578.jpg/thumb"
                ></o-image>
                <p>OMI Card</p>
                <p>
                  <o-link
                    underline={false}
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
          </div>
        </code-demo>


      </code-demo-container>
    )
  }
}
