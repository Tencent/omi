import { define, WeElement } from 'omi'

import highlightLines from './highlight-lines.js'
import proj_config from '../../utils/config'
import css from './_index.css'

define('my-content', class extends WeElement {
  install() {
    this.md = new Remarkable({ html: true })
  }

  installed() {
    //this.initCodeStyle();
  }

  install() {
    if (proj_config.async) {
      this.$store.asyncUpdate()
    }
  }

  afterUpdate() {
    //this.initCodeStyle();
  }

  getMarkDown(name, lan) {
    return require('../../docs/' + lan + '/' + name + '.md')
  }

  initCodeStyle() {
    let codes = Omi.$$('code')
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
    let spans = Omi.$$('.line', code)
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
    ;<div class="content">{this.store.html}</div>
  }

  css() {
    return css
  }
})
