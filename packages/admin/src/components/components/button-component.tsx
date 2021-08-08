import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '@omiu/button'
import '@omiu/icon/ac-unit-outlined'
import '@omiu/icon/accessible-rounded'
import '@omiu/icon/add-ic-call-rounded'
import '../docs/admin-docs'
import './code-demo'
import './code-demo/container'

interface Props { }

const tagName = 'button-component'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Props
    }
  }
}

@tag(tagName)
export default class extends WeElement<Props> {
  static css = [sheet.target, 'o-button{ margin: 4px }']


  installed() { }

  render() {
    // const gridItem = tw`px-2 w-full md:w-6/12`
    const gridStyle = { breakInside: 'avoid', padding: '0 0 0 0' }

    return (
      <code-demo-container>
        <code-demo
          title="按钮"
          describe={'不同类型的按钮'}
          code={`
\`\`\`html
<o-button text="Default"></o-button>
<o-button type="primary">Primary</o-button>
<o-button type="warning">Warning</o-button>
<o-button type="danger">Danger</o-button>
<o-button type="info">Info</o-button>
<o-button type="primary">
  <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined> Icon
</o-button>
<o-button type="danger"
>Icon <o-icon-accessible-rounded></o-icon-accessible-rounded>
</o-button>
\`\`\`
          `}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-button text="Default"></o-button>
            <o-button type="primary">Primary</o-button>
            <o-button type="warning">Warning</o-button>
            <o-button type="danger">Danger</o-button>
            <o-button type="info">Info</o-button>

            <o-button type="primary">
              <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined> Icon
            </o-button>
            <o-button type="danger"
            >Icon <o-icon-accessible-rounded></o-icon-accessible-rounded>
            </o-button>
          </div>
        </code-demo>

        <code-demo
          title="禁用"
          describe="禁用状态下的呈现"
          code={`
\`\`\`html
<o-button disabled>Default</o-button>
<o-button disabled type="primary">Primary</o-button>
<o-button disabled type="warning">Warning</o-button>
<o-button disabled type="danger">Danger</o-button>
<o-button disabled type="info">Info</o-button>
<o-button disabled type="primary">
  <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined> Icon
</o-button>
<o-button disabled type="danger"
>Icon <o-icon-accessible-rounded></o-icon-accessible-rounded>
</o-button>
\`\`\`
                    `}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-button disabled>Default</o-button>
            <o-button disabled type="primary">Primary</o-button>
            <o-button disabled type="warning">Warning</o-button>
            <o-button disabled type="danger">Danger</o-button>
            <o-button disabled type="info">Info</o-button>

            <o-button disabled type="primary">
              <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined> Icon
            </o-button>
            <o-button disabled type="danger"
            >Icon <o-icon-accessible-rounded></o-icon-accessible-rounded>
            </o-button>
          </div>
        </code-demo>

        <code-demo
          title="朴素按钮"
          describe="朴素状态下的按钮，颜色不突出"
          code={`
\`\`\`html
<o-button plain>Plain</o-button>
<o-button plain type="primary">Primary</o-button>
<o-button plain type="warning">Warning</o-button>
<o-button plain type="danger">Danger</o-button>
<o-button plain type="info">Info</o-button>
<o-button plain type="primary">
  <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined> Icon
</o-button>
<o-button plain type="danger"
>Icon <o-icon-accessible-rounded></o-icon-accessible-rounded>
</o-button>

<o-button plain type="primary">
  <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
</o-button>
<o-button plain type="danger">
  <o-icon-accessible-rounded></o-icon-accessible-rounded>
</o-button>
\`\`\`
                              `}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-button plain>Plain</o-button>
            <o-button plain type="primary">Primary</o-button>
            <o-button plain type="warning">Warning</o-button>
            <o-button plain type="danger">Danger</o-button>
            <o-button plain type="info">Info</o-button>

            <o-button plain type="primary">
              <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined> Icon
            </o-button>
            <o-button plain type="danger"
            >Icon <o-icon-accessible-rounded></o-icon-accessible-rounded>
            </o-button>

            <o-button plain type="primary">
              <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
            </o-button>
            <o-button plain type="danger">
              <o-icon-accessible-rounded></o-icon-accessible-rounded>
            </o-button>
          </div>
        </code-demo>

        <code-demo
          title="Loading 按钮"
          describe="点击请求远程的服务经常用到它"
          code={`
\`\`\`html
<o-button plain loading>Plain</o-button>
<o-button plain loading type="primary">Primary</o-button>
<o-button plain loading type="warning">Warning</o-button>
<o-button plain loading type="danger">Danger</o-button>
<o-button plain loading type="info">Info</o-button>

<o-button plain loading type="primary">
  <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
</o-button>
<o-button plain loading type="danger">
  <o-icon-accessible-rounded></o-icon-accessible-rounded>
</o-button>
\`\`\`
                                        `}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-button plain loading>Plain</o-button>
            <o-button plain loading type="primary">Primary</o-button>
            <o-button plain loading type="warning">Warning</o-button>
            <o-button plain loading type="danger">Danger</o-button>
            <o-button plain loading type="info">Info</o-button>

            <o-button plain loading type="primary">
              <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
            </o-button>
            <o-button plain loading type="danger">
              <o-icon-accessible-rounded></o-icon-accessible-rounded>
            </o-button>
          </div>
        </code-demo>


        <code-demo
          title="尺寸"
          describe={'支持 4 种尺寸大小'}
          code={`
\`\`\`html
<o-button>Default</o-button>
<o-button size="medium">Medium</o-button>
<o-button size="small">Small</o-button>
<o-button size="mini">Mini</o-button>
\`\`\`
             `}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-button>Default</o-button>
            <o-button size="medium">Medium</o-button>
            <o-button size="small">Small</o-button>
            <o-button size="mini">Mini</o-button>
          </div>
        </code-demo>



        <code-demo
          title="圆角按钮"
          describe={'圆角的按钮'}
          code={`
\`\`\`html
<o-button round>Default</o-button>
<o-button round size="medium">Medium</o-button>
<o-button round size="small">Small</o-button>
<o-button round size="mini">Mini</o-button>
\`\`\`
             `}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-button round>Default</o-button>
            <o-button round size="medium">Medium</o-button>
            <o-button round size="small">Small</o-button>
            <o-button round size="mini">Mini</o-button>
          </div>
        </code-demo>



        <code-demo
          title="ICON 按钮"
          describe={'当不需要文字描述按钮的时候使用'}
          code={`
\`\`\`html
<o-button circle>
<o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
</o-button>
<o-button type="primary" circle>
<o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
</o-button>
<o-button type="warning" circle>
<o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
</o-button>
<o-button type="danger" circle>
<o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
</o-button>
<o-button type="info" circle>
<o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
</o-button>
<o-button type="primary" plain circle>
<o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
</o-button>
<o-button type="warning" plain circle>
<o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
</o-button>
<o-button type="danger" plain circle>
<o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
</o-button>
<o-button type="info" plain circle>
<o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
</o-button>
\`\`\`
                       `}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-button circle>
              <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
            </o-button>
            <o-button type="primary" circle>
              <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
            </o-button>
            <o-button type="warning" circle>
              <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
            </o-button>
            <o-button type="danger" circle>
              <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
            </o-button>
            <o-button type="info" circle>
              <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
            </o-button>
            <o-button type="primary" plain circle>
              <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
            </o-button>
            <o-button type="warning" plain circle>
              <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
            </o-button>
            <o-button type="danger" plain circle>
              <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
            </o-button>
            <o-button type="info" plain circle>
              <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
            </o-button>
          </div>
        </code-demo>


        <code-demo
          title="块级元素"
          describe={'通过 block 属性控制'}
          code={`
\`\`\`html
<o-button block>Block button</o-button>
\`\`\`
          `}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-button block>Block button</o-button>
          </div>
        </code-demo>

      </code-demo-container>
    )
  }
}
