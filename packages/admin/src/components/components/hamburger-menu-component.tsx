import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '@omiu/hamburger-menu'
import '../docs/admin-docs'
import './code-demo'
import './code-demo/container'

interface Props { }

const tagName = 'hamburger-menu-component'
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
    return (
      <code-demo-container>
        <code-demo
          title="汉堡包菜单"
          describe={'用于切换打开和关闭侧边面板的菜单按钮。'}
          code={`
\`\`\`jsx
<o-hamburger-menu></o-hamburger-menu>
<o-hamburger-menu active></o-hamburger-menu>

<o-hamburger-menu color="#07C160"></o-hamburger-menu>
<o-hamburger-menu active color="#07C160"></o-hamburger-menu>

<o-hamburger-menu color="#f5222d"></o-hamburger-menu>
<o-hamburger-menu active color="#f5222d"></o-hamburger-menu>
\`\`\`
          `}
        >
          <div slot="demo" class={tw`flex justify-around px-5 py-5`}>

          <o-hamburger-menu></o-hamburger-menu>
          <o-hamburger-menu active></o-hamburger-menu>

          <o-hamburger-menu color="#07C160"></o-hamburger-menu>
          <o-hamburger-menu active color="#07C160"></o-hamburger-menu>

          <o-hamburger-menu color="#f5222d"></o-hamburger-menu>
          <o-hamburger-menu active color="#f5222d"></o-hamburger-menu>

          </div>
        </code-demo>

      </code-demo-container>
    )
  }
}
