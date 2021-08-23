import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '@omiu/avatar'
import '@omiu/icon/person'
import '@omiu/badge'

import '../docs/admin-docs'
import './code-demo'
import './code-demo/container'

interface Props { }

const tagName = 'avatar-component'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Props
    }
  }
}

@tag(tagName)
export default class extends WeElement<Props> {
  static css = [sheet.target, 'o-avatar{ margin: 4px } o-badge{ margin: 4px }']


  installed() { }

  render() {
    // const gridItem = tw`px-2 w-full md:w-6/12`
    const gridStyle = { breakInside: 'avoid', padding: '0 0 0 0' }

    return (
      <code-demo-container>
        <code-demo
          title="基础头像"
          describe={'展示不同尺寸的头像'}
          code={`
\`\`\`jsx
<o-avatar src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"></o-avatar>
<o-avatar size={50} src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"></o-avatar>
<o-avatar size={60} src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"></o-avatar>
<o-avatar size={70} src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"></o-avatar>
<o-avatar square size={70} src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"></o-avatar>
\`\`\`
          `}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-avatar src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"></o-avatar>
            <o-avatar size={50} src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"></o-avatar>
            <o-avatar size={60} src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"></o-avatar>
            <o-avatar size={70} src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"></o-avatar>
            <o-avatar square size={70} src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"></o-avatar>
          </div>
        </code-demo>


        <code-demo
          title="ICON 头像"
          describe={'可以直接设置 icon，记得 import omiu 对应的 icon，比如下面 icon="person" 对应 @omiu/icon/person'}
          code={`
\`\`\`jsx
<o-avatar icon="person"></o-avatar>
<o-avatar icon="person" background-color="#87d068"></o-avatar>
<o-avatar icon="person" background-color="#fde3cf" color="#f56a00"></o-avatar>
\`\`\`
          `}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-avatar icon="person"></o-avatar>
            <o-avatar icon="person" background-color="#87d068"></o-avatar>
            <o-avatar icon="person" background-color="#fde3cf" color="#f56a00"></o-avatar>
          </div>
        </code-demo>



        <code-demo
          title="文字头像"
          describe={'可以直接设置文字头像'}
          code={`
\`\`\`jsx
<o-avatar>DNT</o-avatar>
<o-avatar background-color="#87d068">OMI</o-avatar>
<o-avatar background-color="#fde3cf" color="#f56a00">User</o-avatar>
\`\`\`
          `}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-avatar>DNT</o-avatar>
            <o-avatar background-color="#87d068">OMI</o-avatar>
            <o-avatar background-color="#fde3cf" color="#f56a00">User</o-avatar>
          </div>
        </code-demo>




        <code-demo
          title="文字头像"
          describe={'可以直接设置文字头像'}
          code={`
\`\`\`jsx
<o-avatar square>DNT</o-avatar>
<o-avatar square background-color="#87d068">OMI</o-avatar>
<o-avatar square background-color="#fde3cf" color="#f56a00">User</o-avatar>
\`\`\`
          `}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-avatar square>DNT</o-avatar>
            <o-avatar square background-color="#87d068">OMI</o-avatar>
            <o-avatar square background-color="#fde3cf" color="#f56a00">User</o-avatar>

          </div>
        </code-demo>



        <code-demo
          title="带红点的头像"
          describe={'通过 o-badge 包裹实现'}
          code={`
\`\`\`jsx
<o-badge content="99">
  <o-avatar>DNT</o-avatar>
</o-badge>

<o-badge dot>
  <o-avatar background-color="#87d068">OMI</o-avatar>
</o-badge>

<o-badge content="new">
  <o-avatar background-color="#fde3cf" color="#f56a00">U</o-avatar>
</o-badge>
\`\`\`
          `}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-badge content="99">
              <o-avatar>DNT</o-avatar>
            </o-badge>

            <o-badge dot>
              <o-avatar background-color="#87d068">OMI</o-avatar>
            </o-badge>

            <o-badge content="new">
              <o-avatar background-color="#fde3cf" color="#f56a00">U</o-avatar>
            </o-badge>
          </div>
        </code-demo>



      </code-demo-container>
    )
  }
}
