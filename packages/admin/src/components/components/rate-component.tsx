import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '@omiu/rate'
import '../docs/admin-docs'
import './code-demo'
import './code-demo/container'

interface Props {}

const tagName = 'rate-component'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Props
    }
  }
}

@tag(tagName)
export default class extends WeElement<Props> {
  static css = [sheet.target]
  install(){}
  render() {
    return (
      <code-demo-container>
        <code-demo
          title="评分"
          describe={'基础评分使用'}
          code={`
\`\`\`html
<o-rate value="4" max="10" color="red"></o-rate>
\`\`\`
          `}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
          <o-rate value="4" max="10" color="red"></o-rate>
          </div>
        </code-demo>

      </code-demo-container>
    )
  }
}
