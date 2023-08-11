import { tag, h, WeElement, render } from 'omi'

import './index.tsx'

export type Props = {}

const tagName = 'my-demo'

@tag(tagName)
export default class MyDemo extends WeElement<Props> {
  onChange = (evt: CustomEvent) => {
    console.log(evt.detail)
  }

  render(props: Props) {
    return (
      <div>
        <div>
          <o-checkbox label="Label"></o-checkbox>
          <br />

          <o-checkbox checked label="checked"></o-checkbox>
          <br />

          <o-checkbox onChange={this.onChange} indeterminate label="indeterminate"></o-checkbox>
          <br />

          <o-checkbox disabled label="disabled"></o-checkbox>
          <br />
          <o-checkbox disabled checked label="disabled checked"></o-checkbox>
        </div>
      </div>
    )
  }
}

render(<my-demo></my-demo>, 'body', {
  ignoreAttrs: true
})


