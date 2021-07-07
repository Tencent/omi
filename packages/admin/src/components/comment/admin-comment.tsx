import { WeElement, h, tag, classNames } from 'omi'
import { tw, sheet } from 'omi-twind'
import './o-comment'

interface Props {

}

const tagName = 'admin-comment'
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

  comments = [{
    creator: 'dntzhang',
    content: 'hello',
    avatar: 'https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png',
    likes: ['dntzhang', 'lisi']
  }]


  render(props) {

    return <o-comment comments={this.comments} userName={'dntzhang'}></o-comment>

  }
}
