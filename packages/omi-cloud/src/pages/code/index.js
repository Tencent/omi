import { WeElement, define } from 'omi'
import './index.css'
import WxParse from '../../components/wxParse/wxParse'
import mdStr from './introduction.md.js'

define('page-about', class extends WeElement {
  config = {
    navigationBarBackgroundColor: '#ffffff',
    navigationBarTextStyle: 'black',
    navigationBarTitleText: 'Omi 简介',
    backgroundColor: '#eeeeee',
    backgroundTextStyle: 'light'
  }

  installed() {
    const Remarkable = require('remarkable');
    const md = new Remarkable();

    const article = md.render(mdStr.data)
    console.log(article)
    WxParse.wxParse('article', 'html', article, this._weappRef, 5)
  }

  render() {
    return (
      <view>
        <import src='../../components/wxParse/wxParse.wxml' />
        <template is='wxParse' data='{{wxParseData:article.nodes}}' />
      </view>
    )
  }
})