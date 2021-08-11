import {
  define,
  render,
  WeElement,
  cloneElement,
  createRef,
  getHost
} from '../../src/omi'

describe('props', () => {
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

  it('simple test', () => {
    var valA, valB, valC, valD
    class Ele extends WeElement {
      receiveProps(prop, old) {

        valA = prop.a.b
        valB = old.a.b

        valC = prop.c
        valD = old.c
      }
      render() {
        return <div>{this.store.data.a}</div>
      }
    }

    define('my-ele99', Ele)
    class Ele100 extends WeElement {
      a = { b: 1 }
      c = 3
      installed() {
        this.c = 4
        this.a.b = 2
        this.update()
      }
      render() {
        return <div><my-ele99 a={this.a} c={this.c}></my-ele99></div>
      }
    }

    define('my-ele100', Ele100)

    sinon.spy(Ele.prototype, 'render')
    render(<my-ele100 />, scratch, {
      data: { a: 1 }
    })

    expect(valA).to.equal(2)
    //same ref
    expect(valB).to.equal(2)
    expect(valC).to.equal(4)
    expect(valD).to.equal(3)
  })

  it('simple test', () => {
    var valA, valB, valC, valD
    class Ele extends WeElement {
      receiveProps(prop, old) {

        valA = prop.c.a
        valB = old.c.a

      }
      render() {
        return <div>{this.store.data.a}</div>
      }
    }

    define('my-ele98', Ele)
    class Ele100 extends WeElement {
      a = { b: 1 }
      c = 3
      installed() {
        this.c = 4
        this.a.b = 2
        this.update()
      }
      render() {
        return <div><my-ele98 a={this.a} c={{ a: Math.random() }}></my-ele98></div>
      }
    }

    define('my-ele97', Ele100)

    sinon.spy(Ele.prototype, 'render')
    render(<my-ele97 />, scratch, {
      data: { a: 1 }
    })

    //diffient ref
    expect(valA === valB).to.equal(false)
  })

  it('simple test', () => {
    var valA, valB, valC, valD
    class Ele extends WeElement {
      receiveProps(prop, old) {

        valA = prop.c.a
        valB = old.c.a

      }
      render() {
        return <div>{this.store.data.a}</div>
      }
    }

    define('my-ele95', Ele)
    class Ele100 extends WeElement {
      c = { a: Math.random() }
      installed() {
        this.c.a = Math.random()
        this.update()
      }
      render() {
        return <div><my-ele95 c={this.c}></my-ele95></div>
      }
    }

    define('my-ele96', Ele100)

    sinon.spy(Ele.prototype, 'render')
    render(<my-ele96 />, scratch, {
      data: { a: 1 }
    })

    //same ref
    expect(valA === valB).to.equal(true)
  })


 






})
