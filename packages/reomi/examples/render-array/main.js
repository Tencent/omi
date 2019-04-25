import { tag, render, WeElement } from '../../src/omi'

@tag('omi-lazyload')
class lazyLoad extends WeElement {
  static observe = true
  static get data() {
    return {}
  }
  css() {
    return `
        img{
            display:block;
            width:200px;
            height:200px;
        }
        `
  }
  install() {
    this.data = {
      show: false
    }
  }
  installed() {
    setTimeout(() => {
      this.data.show = true
    }, 2000)
  }

  render() {
    return this.data.show && this.props.children
  }
}

@tag('my-app')
class MyApp extends WeElement {
  render() {
    return (
      <div>
        <omi-lazyload>
          <img
            src="http://pic28.photophoto.cn/20130818/0020033143720852_b.jpg"
            alt=""
          />
          <img
            src="http://pic28.photophoto.cn/20130818/0020033143720852_b.jpg"
            alt=""
          />
          <img
            src="http://pic28.photophoto.cn/20130818/0020033143720852_b.jpg"
            alt=""
          />
        </omi-lazyload>
      </div>
    )
  }
}

render(<my-app />, 'body')
