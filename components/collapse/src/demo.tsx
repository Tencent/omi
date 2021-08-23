import { tag, h, WeElement, render } from 'omi'

import './index.tsx'

export type Props = {}

const tagName = 'my-demo'

@tag(tagName)
export default class MyDemo extends WeElement<Props> {
  openedA = false
  openedB = false
  openedC = false

  render(props: Props) {
    return (
      <div>
        <button onClick={() => {
          this.openedA = !this.openedA
          this.update()
        }}>toggle</button>
        <o-collapse
          opened={this.openedA}
        >
          <div>
            <p>abc</p>
            <p>def</p>
            <p>ghc</p>
          </div>

        </o-collapse>


        <div>
          <button onClick={() => {
            this.openedB = !this.openedB
            this.update()
          }}>toggle(horizontal)</button>
        </div>

        <o-collapse
          opened={this.openedB}
          horizontal={true}
        >
          <div style=' max-height: 250px;overflow: auto;'>
            <p>abc的房间撒范德萨范德萨拉开房间啊撒；房间看到了撒；房间的撒了；发低烧</p>
            <p>的撒发撒发的撒拉范德雷克撒；房间撒；发</p>
            <p>发动机啊撒发的；撒发空间的撒；了房间的撒了；发低烧</p>
          </div>

        </o-collapse>


        <div>
          <button onClick={() => {
            this.openedC = !this.openedC
            this.update()
          }}>toggle(no animation)</button>
        </div>

        <o-collapse
          opened={this.openedC}
          noAnimation={true}
        >
          <div >
            <p>abc的房间撒范德萨范德萨拉开房间啊撒；房间看到了撒；房间的撒了；发低烧</p>
            <p>的撒发撒发的撒拉范德雷克撒；房间撒；发</p>
            <p>发动机啊撒发的；撒发空间的撒；了房间的撒了；发低烧</p>
          </div>

        </o-collapse>

        <div>xxx</div>
      </div>

    )
  }
}

render(<my-demo></my-demo>, 'body', {
  ignoreAttrs: true
})
