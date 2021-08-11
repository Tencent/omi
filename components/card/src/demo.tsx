import { tag, h, WeElement, render } from 'omi'

import './index.tsx'

export type Props = {

}

const tagName = 'my-demo'


@tag(tagName)
export default class MyDemo extends WeElement<Props> {

  pickAction = (evt) => {
    console.log(evt.detail)
    const btn = evt.detail.action
    if(btn.icon === 'add-comment-rounded') {
      alert(btn.icon)
    } else if (btn.icon === 'add-a-photo-rounded') {
      alert(btn.icon)
    } else if (btn.icon === 'add-ic-call-rounded') {
      alert(btn.icon)
    }
  }

  render() {
    return (
        <div style="background: #F0F2F5">
          <h1 onclick={() => {
            this.update()
          }}>JSX Mode</h1>
          <div >
            <o-card onChange={this.pickAction} title="My demo" hoverable="true" actions={[{ icon: 'add-a-photo-rounded' },{ icon: 'add-ic-call-rounded' },{ icon: 'add-comment-rounded' }]}>
              <o-image
                slot="cover"
                src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"
              ></o-image>
              <div style="display: flex; justify-content: space-around; margin: 10px 0px">
                <o-avatar
                  style="margin: auto 0px;"
                  src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"
                ></o-avatar>
                <div>
                  <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
                  <p>This is the description</p>
                </div>
              </div>
            </o-card>
          </div>
        </div>
    )
  }
}

render(<my-demo></my-demo>, 'body', {
  ignoreAttrs: true
})
