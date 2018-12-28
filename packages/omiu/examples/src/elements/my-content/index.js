import { define, WeElement } from 'omi'
import css from './_index.css'

define('my-content', class extends WeElement {
  install() {
    this.store.myContent = this
  }

  installed() {
    this.initCodeStyle()
  }

  afterUpdate() {
    this.initCodeStyle()
  }

  touchEnd = ()=> {
    this.store.hideSidebar()
  }

  initCodeStyle() {
    let codes = document.querySelectorAll('code')
    let codesArr = Array.prototype.slice.call(codes);
    let codeHlNumArr = []
    codesArr.forEach(code => {
      hljs.highlightBlock(code)
      let arr = code.className.match(/{[\S\s]*}/)
      let hllNums = null
      if (arr) {
        let numArr = arr[0].replace(/[{|}]/g, '').split(',')
        hllNums = this._arrToNumber(numArr)
      }
      codeHlNumArr.push(hllNums)
    })

    codesArr.forEach((code, index) => {
      let newP = document.createElement('div')
      newP.className = '_code-ctn'
      let pre = code.parentNode
      let ctn = pre.parentNode
      if (pre.nodeName === 'PRE') {
        ctn.insertBefore(newP, pre)

        let hl = document.createElement('div')
        hl.className = '_hl'
        newP.appendChild(hl)
        newP.appendChild(pre)
        let nums = codeHlNumArr[index]

        let max = Math.max.apply(null, nums)

        let inner = ''
        for (let i = 0; i <= max; i++) {
          if (nums.indexOf(i) == -1) {
            inner += '<br />'
          } else {
            inner += '<div class="_hll"></div>'
          }
        }
        hl.innerHTML = inner
      }
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

  render() {
    return (
      <div
        class="content" ontouchend={this.touchEnd}
        dangerouslySetInnerHTML={{ __html: this.store.html }}
      />
    )
  }

  css() {
    return css
  }
})
