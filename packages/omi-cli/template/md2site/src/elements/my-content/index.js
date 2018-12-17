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

  initCodeStyle() {
    let codes = document.querySelectorAll('code')
    let codeHlNumArr = []
    codes.forEach(code => {
      hljs.highlightBlock(code)
      let arr = code.className.match(/{[\S\s]*}/)
      let hllNums = null
      if (arr) {
        let numArr = arr[0].replace(/[{|}]/g, '').split(',')
        hllNums = this._arrToNumber(numArr)
      }
      codeHlNumArr.push(hllNums)
    })

    codes.forEach((code, index) => {
      let newP = document.createElement('div')
      newP.className = '_code-ctn'
      let pre = code.parentNode
      let ctn = pre.parentNode

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

      //this._hll(code, codeHlNumArr[index])
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
