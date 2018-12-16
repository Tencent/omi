import { define, WeElement } from 'omi'

import highlightLines from './highlight-lines.js'
import proj_config from '../../docs/config'
import css from './_index.css'

define('my-content', class extends WeElement {
  install() {
    this.store.myContent = this
  }

  installed() {
    this.initCodeStyle();
  }

  afterUpdate() {
    this.initCodeStyle();
  }

  initCodeStyle() {
    let codes = document.querySelectorAll('code')
    let codeHlNumArr = []
    codes.forEach(code => {
      hljs.highlightBlock(code)
      let arr = code.className.match(/{\S*}/)
      let hllNums = null
      if (arr) {
        let numArr = arr[0].replace(/[{|}]/g, '').split(',')
        hllNums = this._arrToNumber(numArr)
      }
      codeHlNumArr.push(hllNums)
    })

    highlightLines()

    codes.forEach((code, index) => {
      this._hll(code, codeHlNumArr[index])
    })
  }

  _arrToNumber(numArr) {
    let arr = []
    numArr.forEach(item => {
      if (item.indexOf('-') !== -1) {
        const tempArr = item.split('-')
        const begin = Number(tempArr[0])
        const end = Number(tempArr[1])
        for (let i = begin; i < end + 1; i++) {
          arr.push(i)
        }
      } else {
        arr.push(Number(item))
      }
    })
    return arr
  }

  _hll(code, hllNums) {
    let spans = document.querySelectorAll('.line', code)
    hllNums &&
      hllNums.forEach(num => {
        spans[num] && spans[num].classList.add('highlight')
      })
  }

  render() {
    // if(!proj_config.async) {
    //     this.data.html = this.md.render(this.getMarkDown(this.$store.data.md, this.$store.data.lan));
    // }
    // return tpl;
    return (
      <div
        class="content"
        dangerouslySetInnerHTML={{ __html: this.store.html }}
      />
    )
  }

  css() {
    return css
  }
})
