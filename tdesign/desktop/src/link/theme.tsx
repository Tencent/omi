import { h, tag, render, WeElement } from 'omi'

import './link'

@tag('link-theme')
export default class LinkTheme extends WeElement<Props> {
  static css = `
    t-link{ margin: 0 5px }
  `
  render(props) {
    return (
      <div>
        <t-link theme="default">跳转链接</t-link>
        <t-link theme="primary">跳转链接</t-link>
        <t-link theme="danger">跳转链接</t-link>
        <t-link theme="warning">跳转链接</t-link>
        <t-link theme="success">跳转链接</t-link>
      </div>
    )
  }
}

render(<link-theme></link-theme>, 'body', {
  ignoreAttrs: true,
})
