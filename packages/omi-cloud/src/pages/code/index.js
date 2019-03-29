import { WeElement, define } from 'omi'
import './index.css'
import prism from '../../libs/prism'



define('page-about', class extends WeElement {
  config = {
    navigationBarBackgroundColor: '#24292e',
    navigationBarTextStyle: 'white',
    navigationBarTitleText: ' ',
    backgroundColor: '#eeeeee',
    backgroundTextStyle: 'light'
  }

  install(options) {
    const tks = prism.tokens(
      `import { render, WeElement, define } from 'omi'

define('my-counter', class extends WeElement {
  data = {
    count: 1
  }

  static css = \`
    span{
        color: red;
    }\`

  sub = () => {
    this.data.count--
    this.update()
  }

  add = () => {
    this.data.count++
    this.update()
  }

  render() {
    return (
      <div>
        <button onClick={this.sub}>-</button>
        <span>{this.data.count}</span>
        <button onClick={this.add}>+</button>
      </div>
    )
  }
})

render(<my-counter />, 'body')
`, prism.languages.js, 'js')
    console.log(tks)

    this.data.tks = tks

    console.log(this.data.tks)
    this.data.tks.forEach(item => {
      console.log(item)
      //item.content = strcharacterDiscode(item.content)
    })
  }



  render() {
    const { tks } = this.data
    return (
      <view class='pre language-js'>
        <view class='code'>
          {tks.map(tk => {
            return  <text class={'token ' + tk.type}>{tk.content || tk}</text>
          })}
        </view>
      </view>

      // <view class='pre language-jsx'>
      //   <view class='code'>
      //     {tks.map(tk => {
      //       return tk.type === 'tag' ? <text class={'token ' + tk.type}>{tk.content.map(stk => {
      //         return typeof stk.content === 'object' ? stk.content.map(sstk => {
      //           return <text class={'token ' + sstk.type}>{sstk.content || sstk}</text>
      //         }) : <text class={'token ' + stk.type}>{stk.content || stk}</text>
      //       })}</text> : <text class={'token ' + tk.type}>{tk.content || tk}</text>
      //     })}
      //   </view>
      // </view>
    )
  }
})
