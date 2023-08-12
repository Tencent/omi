import { h, tag, WeElement } from 'omi'

import '../index'

@tag('divider-base')
export default class DividerBase extends WeElement {
  render() {
    return (
      <h>
        <p>
          通过高效广告平台，协助品牌和市场营销者触达数以亿计的中国消费者通过金融科技及企业服务，促进合作伙伴业务发展，助力实现数字化升级，我们大力投资于人才队伍和推动科技创新，积极参与互联网行业协同发展。
        </p>
        <t-divider></t-divider>
        <p>
          通过高效广告平台，协助品牌和市场营销者触达数以亿计的中国消费者通过金融科技及企业服务，促进合作伙伴业务发展，助力实现数字化升级，我们大力投资于人才队伍和推动科技创新，积极参与互联网行业协同发展。
        </p>
        <t-divider dashed></t-divider>
        <p>
          通过高效广告平台，协助品牌和市场营销者触达数以亿计的中国消费者通过金融科技及企业服务，促进合作伙伴业务发展，助力实现数字化升级，我们大力投资于人才队伍和推动科技创新，积极参与互联网行业协同发展。
        </p>
      </h>
    )
  }
}
