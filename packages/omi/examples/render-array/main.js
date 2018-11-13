import { tag, render, WeElement } from '../../src/omi'

@tag('hello-element')
class HelloElement extends WeElement {
  render(props) {
    const { count, num } = props
    if (count > 1) {
      return [
        <div>Hello</div>,
        <div>Element</div>,
        <div>{count}</div>,
        <div>{num}</div>
      ]
    }
    return (
      <div>
        <div>Hello</div>
        <div>Element</div>
        <div>{count}</div>
        <div>{num}</div>
      </div>
    )
  }
}

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
    }, 1000)
  }

  render() {
    return this.data.show && this.props.children
  }
}

@tag('my-app')
class MyApp extends WeElement {
  static observe = true
  static get data() {
    return {
      count: 1,
      list: [0]
    }
  }
  render() {
    let count = this.data.count
    let ary = this.data.list.map((item, index) => {
      return <hello-element key={index} num={item} count={count} />
    })
    return [
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
    ].concat(ary)
  }

  installed() {
    setTimeout(() => {
      this.data.count++
      this.data.list.push(1)
    }, 1000)
    setTimeout(() => {
      this.data.count--
    }, 3000)
  }
}

render(<my-app />, 'body')
