import { tag, h, WeElement, render } from 'omi'

import './index.tsx'

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
      <div>
        <h1 onclick={() => {
          this.update()
        }}>JSX Mode</h1>
        <o-counter count={this.count} onCountChanged={this.onChanged}></o-counter>
      </div>
    )
  }
}

render(<my-demo></my-demo>, 'body', {
  ignoreAttrs: true
})
