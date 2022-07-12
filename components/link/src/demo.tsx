import { tag, WeElement, h, render } from 'omi'
import './index.tsx'
import '@omiu/icon/edit'
import '@omiu/icon/accessible-rounded'

@tag('link-demo')
export default class LinkDemo extends WeElement<Props>{
  static css = `
    o-link{ margin: 0 5px }
  `

  render(props) {

    return <div>

      <h3>Base</h3>
      <div>
        <o-link target="_blank" href="https://tencent.github.io/omi/">Default</o-link>
        <o-link type="primary">Primary</o-link>
        <o-link type="danger">Danger</o-link>
        <o-link type="primary">
          <o-icon-edit></o-icon-edit> Icon
        </o-link>
        <o-link type="danger">Icon <o-icon-accessible-rounded></o-icon-accessible-rounded>
        </o-link>
      </div>

      <h3>Disabled</h3>
      <div>
        <o-link disabled>Default</o-link>
        <o-link disabled type="primary">Primary</o-link>
        <o-link disabled type="danger">Danger</o-link>
        <o-link disabled type="primary">
          <o-icon-edit></o-icon-edit> Icon
        </o-link>
        <o-link disabled type="danger">Icon <o-icon-accessible-rounded></o-icon-accessible-rounded>
        </o-link>
      </div>


      <h3>Underline False</h3>
      <div>
        <o-link underline='0'>Default</o-link>
        <o-link underline='0' type="primary">Primary</o-link>
        <o-link underline='0' type="danger">Danger</o-link>
      </div>

    </div>
  }
}


render(<link-demo></link-demo>, 'body', {
  ignoreAttrs: true
})
