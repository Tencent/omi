import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '@omiu/loading'
import '../docs/admin-docs'
import './code-demo'
import './code-demo/container'


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

  mdA = `
  \`\`\`html
<o-loading size="15"></o-loading>
\`\`\`
  `
  mdB = `
  \`\`\`html
<o-loading size="15"></o-loading>
<o-loading size="25"></o-loading>
<o-loading size="35"></o-loading>
<o-loading size="45"></o-loading>
<o-loading size="55"></o-loading>
  \`\`\`
  `

  mdC = `
  \`\`\`html
  <o-loading size="25" color="#8e2035"></o-loading>
  <o-loading size="25" color="#2d7418"></o-loading>
  <o-loading size="25" color="#f37736"></o-loading>
  <o-loading size="25" color="#7bc043"></o-loading>
  <o-loading size="25" color="#2170b8"></o-loading>
  \`\`\`
  `
  mdD = `
  \`\`\`html
  <o-loading size="15" color="#8e2035"></o-loading>
  <o-loading size="25" color="#2d7418"></o-loading>
  <o-loading size="35" color="#f37736"></o-loading>
  <o-loading size="45" color="#7bc043"></o-loading>
  <o-loading size="55" color="#2170b8"></o-loading>
  \`\`\`
  `

  installed() {}

  render() {
    return (
      <code-demo-container>
        <code-demo
          class={tw``}
          title="基本"
          describe="最简单的 Loading"
          code={this.mdA}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-loading size="15"></o-loading>
          </div>
        </code-demo>

        <code-demo
          title="不同尺寸"
          describe="支持传入 size 控制大小"
          code={this.mdB}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-loading size="15"></o-loading>
            <o-loading size="25"></o-loading>
            <o-loading size="35"></o-loading>
            <o-loading size="45"></o-loading>
            <o-loading size="55"></o-loading>
          </div>
        </code-demo>

        <code-demo
          title="不同颜色"
          describe="支持传入 color 控制颜色"
          code={this.mdC}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-loading size="25" color="#8e2035"></o-loading>
            <o-loading size="25" color="#2d7418"></o-loading>
            <o-loading size="25" color="#f37736"></o-loading>
            <o-loading size="25" color="#7bc043"></o-loading>
            <o-loading size="25" color="#2170b8"></o-loading>
          </div>
        </code-demo>

        <code-demo
          title="不同颜色和尺寸"
          describe="支持传入 size 和 color 控制大小颜色"
          code={this.mdD}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-loading size="15" color="#8e2035"></o-loading>
            <o-loading size="25" color="#2d7418"></o-loading>
            <o-loading size="35" color="#f37736"></o-loading>
            <o-loading size="45" color="#7bc043"></o-loading>
            <o-loading size="55" color="#2170b8"></o-loading>
          </div>
        </code-demo>
      </code-demo-container>
    )
  }
}
