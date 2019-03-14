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
     
        let temp = code.className.match(/language-\w*/g)[0]
        if (temp) {
         
          code.innerHTML = Prism.highlight(code.innerText, Prism.languages[temp.split('-')[1]], temp.split('-')[1])
        }
      } else {
        let pre = code.parentNode
        code.className = 'language-markup'
        pre.className = 'language-markup'
        code.innerHTML = Prism.highlight(code.innerText, Prism.languages.markup, 'markup')
      }
    })

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
