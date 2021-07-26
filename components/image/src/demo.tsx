import { tag, WeElement, h, render } from 'omi'
import './index.tsx'

@tag('table-demo')
export default class Table extends WeElement {

  static css = `
  o-image{
    margin: 10px;
  }`
  render(props) {
    const src = 'https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1140680000/VCG211140680945.jpg/thumb'
    return <div>
      <o-image style="width:100px;height:100px;" fit="fill" src={src}>
      </o-image>

      <o-image style="width:100px;height:100px;" fit="contain" src={src}>
      </o-image>
      <o-image style="width:100px;height:100px;" fit="cover" src={src}>
      </o-image>


      <o-image style="width:100px;height:100px;" fit="none" src={src}>
      </o-image>

      <o-image style="width:100px;height:100px;" fit="scale-down" src={src}>
      </o-image>

    </div>
  }
}


render(<table-demo></table-demo>, 'body')
