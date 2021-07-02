import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '@omiu/loading'
import '../docs/admin-docs'

interface Props { }

const tagName = 'loading-component'
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


  baseMdContent = `
  \`\`\`html
<o-loading size="15"></o-loading>
<o-loading size="25"></o-loading>
<o-loading size="35"></o-loading>
<o-loading size="45"></o-loading>
<o-loading size="55"></o-loading>
  \`\`\`
  `

  colorMdContent = `
  \`\`\`html
  <o-loading size="15" color="#8e2035"></o-loading>
  <o-loading size="25" color="#2d7418"></o-loading>
  <o-loading size="35" color="#f37736"></o-loading>
  <o-loading size="45" color="#7bc043"></o-loading>
  <o-loading size="55" color="#2170b8"></o-loading>
  \`\`\`
  `



  render() {
    return <div class={tw`px-4`}>

      <div>
        <div class={tw`border-1 inline-block my-4 border-gray-300 rounded`} style="width:600px">
          <div class={tw`px-5 py-5`}>
            <o-loading size="15"></o-loading>
            <o-loading size="25"></o-loading>
            <o-loading size="35"></o-loading>
            <o-loading size="45"></o-loading>
            <o-loading size="55"></o-loading>
          </div>

          <admin-docs css={`.docs{padding:0 !important;}`} mdContent={this.baseMdContent}></admin-docs>
        </div>

        <div class={tw`border-1 inline-block my-4 border-gray-300 rounded`} style="width:600px">
          <div class={tw`px-5 py-5`}>
            <o-loading size="15" color="#8e2035"></o-loading>
            <o-loading size="25" color="#2d7418"></o-loading>
            <o-loading size="35" color="#f37736"></o-loading>
            <o-loading size="45" color="#7bc043"></o-loading>
            <o-loading size="55" color="#2170b8"></o-loading>
          </div>
          <admin-docs css={`.docs{padding:0 !important;}`} mdContent={this.colorMdContent}></admin-docs>
        </div>

      </div>
    </div>
  }
}
