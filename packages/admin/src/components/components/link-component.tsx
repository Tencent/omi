import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '@omiu/link'
import '@omiu/icon/ac-unit-outlined'
import '@omiu/icon/accessible-rounded'
import '../docs/admin-docs'
import './code-demo'
import './code-demo/container'

interface Props { }

const tagName = 'link-component'
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

  install() { }

  render() {
    const gridStyle = { breakInside: 'avoid', padding: '0 0 0 0' }

    return (
      <code-demo-container>

        <code-demo
          title="文字链接"
          describe={'Base'}
          code={`
\`\`\`jsx
<o-link target="_blank" href="https://tencent.github.io/omi/">Default</o-link>
<o-link type="primary">Primary</o-link>
<o-link type="danger">Danger</o-link>
<o-link type="primary">
  <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined> Icon
</o-link>
<o-link type="danger">Icon <o-icon-accessible-rounded></o-icon-accessible-rounded>
</o-link>
\`\`\`
          `}
          style={gridStyle}
        >   
          <div slot="demo" class={tw`flex justify-around px-5 py-5`}>
            <o-link target="_blank" href="https://tencent.github.io/omi/">Default</o-link>
            <o-link type="primary">Primary</o-link>
            <o-link type="danger">Danger</o-link>
            <o-link type="primary">
              <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined> Icon
            </o-link>
            <o-link type="danger">Icon <o-icon-accessible-rounded></o-icon-accessible-rounded>
            </o-link>

          </div>
        </code-demo>

        <code-demo
          title="禁用"
          describe={'Disabled'}
          code={`
\`\`\`jsx
<o-link disabled>Default</o-link>
<o-link disabled type="primary">Primary</o-link>
<o-link disabled type="danger">Danger</o-link>
<o-link disabled type="primary">
  <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined> Icon
</o-link>
<o-link disabled type="danger">Icon <o-icon-accessible-rounded></o-icon-accessible-rounded>
</o-link>
\`\`\`
          `}
          style={gridStyle}
        >   
          <div slot="demo" class={tw`flex justify-around px-5 py-5`}>
            <o-link disabled>Default</o-link>
            <o-link disabled type="primary">Primary</o-link>
            <o-link disabled type="danger">Danger</o-link>
            <o-link disabled type="primary">
              <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined> Icon
            </o-link>
            <o-link disabled type="danger">Icon <o-icon-accessible-rounded></o-icon-accessible-rounded>
            </o-link>

          </div>
        </code-demo>

        <code-demo
          title="去下划线"
          describe={'Underline False'}
          code={`
\`\`\`jsx
<o-link underline={0}>Default</o-link>
<o-link underline={0} type="primary">Primary</o-link>
<o-link underline={0} type="danger">Danger</o-link>
\`\`\`
          `}
          style={gridStyle}
        >   
          <div slot="demo" class={tw`flex justify-around px-5 py-5`}>
            <o-link underline={0}>Default</o-link>
            <o-link underline={0} type="primary">Primary</o-link>
            <o-link underline={0} type="danger">Danger</o-link>

          </div>
        </code-demo>

      </code-demo-container>
    )
  }
}
