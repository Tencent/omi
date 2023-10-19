import { render, tag, Component, h, css } from '@/index'

const style = css`p { color: green; }`

@tag('el-a')
class ElA extends Component {
  static css = [style]

  render() {
    return (
      <>
        <h3>ElA</h3>
        <p>I am green.</p>
      </>
    )
  }
}

@tag('el-b')
class ElB extends Component {
  static css = [style, 'h3 { color: red; }']

  render() {
    return (
      <>
        <h3>ElB</h3>
        <p>I am green.</p>
      </>
    )
  }
}

render((
  <>
    <el-a></el-a>
    <el-b></el-b>
  </>
), document.body)