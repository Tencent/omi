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
    id: 100,
    creator: 'dntzhang',
    content: 'hello',
    avatar: 'https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png',
    likes: ['dntzhang', 'lisi'],
    createTime: '2021-07-07 21:41:10',
    replies: [
      {
        id: 101,
        creator: 'dntzhang',
        content: 'hello',
        avatar: 'https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png',
        createTime: '2021-07-07 21:41:10'
      },
      {
        id: 102,
        creator: 'dntzhang',
        content: 'hello',
        avatar: 'https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png',
        createTime: '2021-07-07 21:41:10',
        replyTo: 'dntzhang'
      }
    ]
  },
  {
    id: 103,
    creator: 'dntzhang',
    content: 'hello',
    avatar: 'https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png',
    likes: ['dntzhang', 'lisi'],
    createTime: '2021-07-07 21:41:10',
  }]


  render(props) {

    return <o-comment comments={this.comments} userName={'dntzhang'}></o-comment>

  }
}
