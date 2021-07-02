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
        <div>
          <o-loading size="15"></o-loading>
          <o-loading size="25"></o-loading>
          <o-loading size="35"></o-loading>
          <o-loading size="45"></o-loading>
          <o-loading size="55"></o-loading>
          <admin-docs mdContent={this.baseMdContent}></admin-docs>
        </div>

        <div>
          <o-loading size="15" color="#8e2035"></o-loading>
          <o-loading size="25" color="#2d7418"></o-loading>
          <o-loading size="35" color="#f37736"></o-loading>
          <o-loading size="45" color="#7bc043"></o-loading>
          <o-loading size="55" color="#2170b8"></o-loading>
          <admin-docs mdContent={this.colorMdContent}></admin-docs>
        </div>

      </div>
    </div>
  }
}
