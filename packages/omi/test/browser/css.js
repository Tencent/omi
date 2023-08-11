import {
  define,
  render,
  WeElement
} from '../../src/omi'

describe('css', () => {
  let scratch
  //const Empty = () => null

  before(() => {
    scratch = document.createElement('div')
      ; (document.body || document.documentElement).appendChild(scratch)
  })

  beforeEach(() => {
    //let c = scratch.firstElementChild;
    //if (c) render(<Empty />, scratch, { merge: c })
    scratch.innerHTML = ''
  })

  after(() => {
    scratch.parentNode.removeChild(scratch)
    scratch = null
  })

  define('hello-element', class extends WeElement {
    static css = 'div{color:red;}'

    render() {
      return (
        <div >
          ABC
        </div>
      )
    }
  })

  it(' css props with !important', () => {

    define('my-app', class extends WeElement {

      myCSS = `
      div{
        color:green !important;
      }`

      render(props, data) {
        return (
          <div >

            <hello-element css={this.myCSS} />
          </div>
        )
      }
    })

    render(<my-app />, scratch)
    expect(getComputedStyle(scratch.firstChild.shadowRoot.firstChild.firstChild.shadowRoot.lastElementChild).color).to.equal('rgb(0, 128, 0)')
  })


  it('modify css props ', () => {

    var a
    define('my-app1', class extends WeElement {

      myCSS = `
      div{
        color:green;
      }`
      install() {
        a = this
      }

      render(props, data) {
        return (
          <div onClick={this.onClick}>
            <hello-element css={this.myCSS} />
          </div>
        )
      }
    })


    render(<my-app1 />, scratch)
    a.myCSS = `
    div{
      color:blue !important;
    }`
    a.update()

    expect(getComputedStyle(scratch.firstChild.shadowRoot.firstChild.firstChild.shadowRoot.lastElementChild).color).to.equal('rgb(0, 0, 255)')
  })

  // 初始为空，更新之后不为空
  it('modify css props ', () => {

    var a
    define('my-app2', class extends WeElement {

      myCSS = ``
      install() {
        a = this
      }

      render(props, data) {
        return (
          <div onClick={this.onClick}>
            <hello-element css={this.myCSS} />
          </div>
        )
      }
    })


    render(<my-app2 />, scratch)

    a.myCSS = `
    div{
      color:blue !important;
    }`
    a.update()

    expect(getComputedStyle(scratch.firstChild.shadowRoot.firstChild.firstChild.shadowRoot.firstElementChild).color).to.equal('rgb(0, 0, 255)')
  })


})
