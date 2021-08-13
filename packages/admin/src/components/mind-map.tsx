import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'

interface Props { }

const tagName = 'mind-map'
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

  render() {

    return (
      <div class={tw``}>
        <iframe height={window.innerHeight - 90} style="width: 100%;" scrolling="yes" title="OMIU Link" src="https://omi.cdn-go.cn/admin/latest/mind-map/index.html" frameborder="no" loading="lazy">
        </iframe>
      </div>
    )
  }
}
