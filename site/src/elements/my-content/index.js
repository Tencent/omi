import { define, WeElement } from 'omi'
import '../my-footer'

define('my-content', class extends WeElement {
  static css = require('./_index.css')

  static use = [
    'html'
  ]

  install() {
    this.store.myContent = this
  }

  installed() {
    this.initCodeStyle()
  }

  afterUpdate() {
    this.initCodeStyle()
  }

  touchEnd = () => {
    this.store.hideSidebar()
  }

  initCodeStyle() {
    let codes = document.querySelectorAll('code')

    let codesArr = Array.prototype.slice.call(codes);
    let codeHlNumArr = []
    codesArr.forEach(code => {
      let arr = code.className.match(/{([\S\s]*)}/)
      let pre = code.parentNode
      //bug!
      arr && pre.setAttribute('data-line', arr[1])
      if (code.className) {
        pre.className = code.className

        const temp = code.className.match(/language-\w*/g)[0]
        if (temp) {
          code.innerHTML = Prism.highlight(code.innerText, Prism.languages[temp.split('-')[1]], temp.split('-')[1])
        }
      } else {
        let pre = code.parentNode
        code.className = 'language-markup'
        pre.className = 'language-markup'
        code.innerHTML = Prism.highlight(code.innerText, Prism.languages.markup, 'markup')
      }
      // let hllNums = null
      // if (arr) {
      //   let numArr = arr[0].replace(/[{|}]/g, '').split(',')
      //   hllNums = this._arrToNumber(numArr)
      // }
      //codeHlNumArr.push(hllNums)
    })

    // codesArr.forEach((code, index) => {
    //   let newP = document.createElement('div')
    //   newP.className = '_code-ctn'
    //   let pre = code.parentNode
    //   let ctn = pre.parentNode
    //   if (pre.nodeName === 'PRE') {
    //     ctn.insertBefore(newP, pre)

    //     let hl = document.createElement('div')
    //     hl.className = '_hl'
    //     newP.appendChild(hl)
    //     newP.appendChild(pre)
    //     let nums = codeHlNumArr[index]

    //     let max = Math.max.apply(null, nums)

    //     let inner = ''
    //     for (let i = 0; i <= max; i++) {
    //       if (nums.indexOf(i) == -1) {
    //         inner += '<br />'
    //       } else {
    //         inner += '<div class="_hll"></div>'
    //       }
    //     }
    //     hl.innerHTML = inner
    //   }
    // })
    //fix line-highlight
    window.dispatchEvent(new Event('resize'));
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
      <div class="content">
        <div
           ontouchend={this.touchEnd}
          dangerouslySetInnerHTML={{ __html: this.store.data.html }}
        />
        <my-footer />
      </div>
    )
  }
})
