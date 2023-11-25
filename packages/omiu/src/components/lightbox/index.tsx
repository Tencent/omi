import { tag, Component, classNames } from 'omi'
import { tailwind } from '@/tailwind'

import PhotoSwipeLightbox from 'photoswipe/lightbox'
// 插入到 head
import 'photoswipe/style.css'

@tag('o-lightbox')
export class Button extends Component {
  static css = [
    tailwind,
    `:host {
  display: block;
}`,
  ]

  static defaultProps = {
    className: '',
  }

  installed() {
    const slot = this.shadowRoot.querySelector('slot')

    const gallery = slot.assignedNodes()[0]

    // todo 按需加载？
    // 加载所有 a 标签的 href 属性作为 img 的 src，然后获取 img 的 width 和 height 属性设置到 a 标签的  data-pswp-width 和 data-pswp-height
    const anchors = gallery.querySelectorAll('a')
    anchors.forEach((anchor) => {
      const imgSrc = anchor.getAttribute('href')
      const img = new Image()
      img.src = imgSrc
      img.onload = () => {
        const width = img.width
        const height = img.height
        anchor.setAttribute('data-pswp-width', width)
        anchor.setAttribute('data-pswp-height', height)
      }
    })

    const { children, ...options } = this.props
    // dom 会插入到 body，而不是 shadowRoot 内
    const lightbox = new PhotoSwipeLightbox({
      gallery: gallery,
      children: 'a',
      ...options,
      pswpModule: () => import('photoswipe'),
    })
    lightbox.init()
  }

  render(props) {
    return <slot></slot>
  }
}

window.Omiu = window.Omiu || {}

class Lightbox {
  constructor(options) {
    this.lightbox = new PhotoSwipeLightbox({
      ...options,
      pswpModule: () => import('photoswipe'),
    })
    lightbox.init()
  }
}

Omiu.Lightbox = Lightbox
