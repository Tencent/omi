
import './app.css'


import './pages/index/index'



import { render, WeElement, define } from 'omi'

//通过 config.pages 属性来判断是 app
define('my-app', class extends WeElement {

  config = {
    pages: [
      'pages/index/index',
      'pages/logs/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  install() { }

  installed() { }

  uninstall() { }

  show() { }

  hide() { }

  render() {
    return (
      <my-counter />
    )
  }
})


render(<my-app />, 'body')
