import { define, render, WeElement } from '../../src/omi'

import MarkdownEditor from './markdown-edit'

define('my-app', class extends WeElement {


  render(props, data) {
    return (
      <div >
        <MarkdownEditor />
      </div>
    )
  }
})

render(
  <my-app />,
  document.body
);