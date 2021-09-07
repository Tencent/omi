import { tag, h, WeElement, render } from 'omi'

import './index.tsx'
import '@omiu/icon/notifications'

export type Props = {}

const tagName = 'my-demo'

@tag(tagName)
export default class MyDemo extends WeElement<Props> {
  render(props: Props) {
    return (
      <div>
        <o-badge dot x="2" y="10">
          <o-icon-notifications></o-icon-notifications>
        </o-badge>

        <br />
        <br />
        <br />
        <o-badge content="99" x="5" y="10">
          <o-icon-notifications></o-icon-notifications>
        </o-badge>
        <br />
        <br />
        <br />

        <o-badge content="8">
          <o-icon-notifications></o-icon-notifications>
        </o-badge>

        <br />
        <br />
        <br />
        <o-badge content="99">
          <o-icon-notifications></o-icon-notifications>
        </o-badge>

        <br />
        <br />
        <br />

        <o-badge content="new">
          <o-icon-notifications></o-icon-notifications>
        </o-badge>

        <br />
        <br />
        <br />
        <o-badge dot>
          <o-icon-notifications></o-icon-notifications>
        </o-badge>
      </div>
    )
  }
}

render(<my-demo></my-demo>, 'body', {
  ignoreAttrs: true
})
