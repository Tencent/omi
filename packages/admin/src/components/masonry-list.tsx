import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '@omiu/card'
import '@omiu/link'
import '@omiu/image'
import '@omiu/tabs'
import '@omiu/icon/add-a-photo-rounded'
import '@omiu/icon/add-comment-rounded'
import '@omiu/icon/add-ic-call-rounded'

import Masonry from 'masonry-layout'
import imagesLoaded from 'imagesloaded'

interface Props { }

const tagName = 'masonry-list'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Props
    }
  }
}

@tag(tagName)
export default class extends WeElement<Props> {
  static css = [sheet.target, `
  o-card {
    margin-bottom: 10px;
  }`]



  installed() {

    const mas = new Masonry(this.grid, {
      // options...
      //https://masonry.desandro.com/options.html
      // gutter: 10,
      // items will not transition their position on resize.
      // percentPosition: true

    });
    imagesLoaded(this.rootNode, () => {
      setTimeout(() => {
        mas.layout()
      }, 0);
    })


  }

  grid


  render() {
    const gridItem = tw`px-2 w-full md:w-6/12 lg:w-4/12 xl:w-3/12`

    return <div class={tw`px-4 py-4`}>
      <div ref={_ => this.grid = _}>
        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" actions={[{ icon: 'add-ic-call-rounded' }, { icon: 'add-comment-rounded' }]} hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>

        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>

        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" actions={[{ icon: 'add-ic-call-rounded' }, { icon: 'add-comment-rounded' }]} hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>

        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" actions={[{ icon: 'add-ic-call-rounded' }, { icon: 'add-comment-rounded' }]} hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>

        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" actions={[{ icon: 'add-ic-call-rounded' }, { icon: 'add-comment-rounded' }]} hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>
        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1199435000/VCG211199435578.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>

        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" actions={[{ icon: 'add-ic-call-rounded' }, { icon: 'add-comment-rounded' }]} hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>

        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" actions={[{ icon: 'add-ic-call-rounded' }, { icon: 'add-comment-rounded' }]} hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>

        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>

        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" actions={[{ icon: 'add-ic-call-rounded' }, { icon: 'add-comment-rounded' }]} hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>

        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" actions={[{ icon: 'add-ic-call-rounded' }, { icon: 'add-comment-rounded' }]} hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>

        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" actions={[{ icon: 'add-ic-call-rounded' }, { icon: 'add-comment-rounded' }]} hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>
        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1199435000/VCG211199435578.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>

        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" actions={[{ icon: 'add-ic-call-rounded' }, { icon: 'add-comment-rounded' }]} hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>


        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" actions={[{ icon: 'add-ic-call-rounded' }, { icon: 'add-comment-rounded' }]} hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>

        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>

        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" actions={[{ icon: 'add-ic-call-rounded' }, { icon: 'add-comment-rounded' }]} hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>

        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" actions={[{ icon: 'add-ic-call-rounded' }, { icon: 'add-comment-rounded' }]} hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>

        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" actions={[{ icon: 'add-ic-call-rounded' }, { icon: 'add-comment-rounded' }]} hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>
        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1199435000/VCG211199435578.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>

        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" actions={[{ icon: 'add-ic-call-rounded' }, { icon: 'add-comment-rounded' }]} hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>

        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" actions={[{ icon: 'add-ic-call-rounded' }, { icon: 'add-comment-rounded' }]} hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>

        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>

        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" actions={[{ icon: 'add-ic-call-rounded' }, { icon: 'add-comment-rounded' }]} hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>

        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" actions={[{ icon: 'add-ic-call-rounded' }, { icon: 'add-comment-rounded' }]} hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>

        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" actions={[{ icon: 'add-ic-call-rounded' }, { icon: 'add-comment-rounded' }]} hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>
        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1199435000/VCG211199435578.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>

        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" actions={[{ icon: 'add-ic-call-rounded' }, { icon: 'add-comment-rounded' }]} hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>

        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" actions={[{ icon: 'add-ic-call-rounded' }, { icon: 'add-comment-rounded' }]} hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>

        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>

        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" actions={[{ icon: 'add-ic-call-rounded' }, { icon: 'add-comment-rounded' }]} hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>

        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" actions={[{ icon: 'add-ic-call-rounded' }, { icon: 'add-comment-rounded' }]} hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>

        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" actions={[{ icon: 'add-ic-call-rounded' }, { icon: 'add-comment-rounded' }]} hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>

        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1199435000/VCG211199435578.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>

        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" actions={[{ icon: 'add-ic-call-rounded' }, { icon: 'add-comment-rounded' }]} hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>


        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" actions={[{ icon: 'add-ic-call-rounded' }, { icon: 'add-comment-rounded' }]} hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>

        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>

        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" actions={[{ icon: 'add-ic-call-rounded' }, { icon: 'add-comment-rounded' }]} hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>

        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" actions={[{ icon: 'add-ic-call-rounded' }, { icon: 'add-comment-rounded' }]} hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>

        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" actions={[{ icon: 'add-ic-call-rounded' }, { icon: 'add-comment-rounded' }]} hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>
        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1199435000/VCG211199435578.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>

        <o-card class={tw`${gridItem}`} title="Action card" size="large" id="myActionC" actions={[{ icon: 'add-ic-call-rounded' }, { icon: 'add-comment-rounded' }]} hoverable="true">
          <o-image slot="cover" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"></o-image>
          <div style="display: flex; justify-content: space-around; margin: 10px 0px">
            <o-avatar style="margin: auto 0px;" src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"></o-avatar>
            <div>
              <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
              <p>This is the description</p>
            </div>
          </div>
        </o-card>

        <img style="width:0;height:0;" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1199435000/VCG211199435578.jpg/thumb" />
        <img style="width:0;height:0;" src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb" />
      </div>
    </div>
  }
}
