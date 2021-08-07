import { tag, h, WeElement, render } from 'omi'

import './index.tsx'
import '../../step'

export type Props = {

}

const tagName = 'my-demo'



@tag(tagName)
export default class MyDemo extends WeElement<Props> {

  count = 2

  onChanged = (evt: CustomEvent) => {
    //同步内部状态到外部，这样防止父刷新覆盖子的 count
    this.count = evt.detail
  }

  render(props: Props) {
    return (
      <div style="display: block">
        <h1 onclick={() => {
          this.update()
        }}>JSX Mode</h1>
        <o-steps active={1}>
          <o-step title="步骤一" description="这是一段不重要的描述性文字"></o-step>
          <o-step title="步骤二" description="这是一段不重要的描述性文字"></o-step>
          <o-step title="步骤三" description="这是一段不重要的描述性文字"></o-step>
        </o-steps>
      </div>
    )
  }
}

render(<my-demo></my-demo>, 'body', {
  ignoreAttrs: true
})
