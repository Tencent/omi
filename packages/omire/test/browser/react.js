import {
  define,
  render,
  WeElement,
  cloneElement,
  createRef,
  getHost
} from '../../src/omi'
import React from 'react'
import ReactDom from 'react-dom'

describe('render react components', () => {
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

  it('base 1', () => {
    class HelloMessage extends React.Component {
      render() {
        return (
          <div>
            Hello {this.props.name}
          </div>
        );
      }
    }


    define('my-app', class extends WeElement {


      static css = `
         div{
             color: green;
         }`

      name = 'Reomi'

      onClick = () => {
        this.name = 'React + Omi'
        this.update()
      }

      render(props, data) {
        return (
          <div onClick={this.onClick}>
            <HelloMessage name={this.name} />
          </div>
        )
      }
    })

    render(<my-app />, scratch)

    expect(scratch.firstChild.shadowRoot.innerHTML).to.equal('<style>\n         div{\n             color: green;\n         }</style><div><div>Hello Reomi</div></div>')
  })


  it('base 2', () => {
    class HelloMessage extends React.Component {
      render() {
        return (
          <div>
            Hello {this.props.name}
          </div>
        );
      }
    }


    define('my-app2', class extends WeElement {


      static css = `
         div{
             color: green;
         }`

      name = 'Reomi'
      name2 = 'Reomi2'
      onClick = () => {
        this.name = 'React + Omi'
        this.update()
      }

      render(props, data) {
        return (
          <div onClick={this.onClick}>
            <HelloMessage name={this.name} />
            <HelloMessage name={this.name2} />
          </div>
        )
      }
    })

    render(<my-app2 />, scratch)

    expect(scratch.firstChild.shadowRoot.innerHTML).to.equal('<style>\n         div{\n             color: green;\n         }</style><div><div>Hello Reomi</div><div>Hello Reomi2</div></div>')
  })


  it('base 3', () => {
    class HelloMessage extends React.Component {
      render() {
        return (
          <div>
            Hello {this.props.name}
          </div>
        );
      }
    }
    let a

    define('my-app3', class extends WeElement {


      static css = `
         div{
             color: green;
         }`

      name = 'Reomi'
      name2 = 'Reomi2'
      install() {
        a = this
      }


      render(props, data) {
        return (
          <div onClick={this.onClick}>
            <HelloMessage name={this.name} />
            <HelloMessage name={this.name2} />
          </div>
        )
      }
    })

    render(<my-app3 />, scratch)
    a.name = 'React + Omi'
    a.update()
    expect(scratch.firstChild.shadowRoot.innerHTML).to.equal('<style>\n         div{\n             color: green;\n         }</style><div><div>Hello React + Omi</div><div>Hello Reomi2</div></div>')
  })



  it('base 4', () => {
    class HelloMessage extends React.Component {
      render() {
        return (
          <div>
            Hello {this.props.name}
          </div>
        );
      }
    }
    let a

    define('my-app4', class extends WeElement {


      static css = `
         div{
             color: green;
         }`

      name = 'Reomi'
      name2 = 'Reomi2'
      install() {
        a = this
      }

      render(props, data) {
        return (
          <div>
            <HelloMessage name={this.name} />
            <div>abc</div>
            <HelloMessage name={this.name2} />
          </div>
        )
      }
    })

    render(<my-app4 />, scratch)
    a.name = 'React + Omi'
    a.update()
    expect(scratch.firstChild.shadowRoot.innerHTML).to.equal('<style>\n         div{\n             color: green;\n         }</style><div><div>Hello React + Omi</div><div>abc</div><div>Hello Reomi2</div></div>')
  })



  it('base 5', () => {
    class HelloMessage extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          value: 1
        }
      }
      componentDidMount() {
        this.setState({ value: 12 }, () => {
          console.log(111)
        })
      }
      render() {
        return (
          <div>
            Hello {this.state.value}
          </div>
        );
      }
    }
    let a

    define('my-app5', class extends WeElement {


      render(props, data) {
        return (
          <div>
            <HelloMessage />
          </div>
        )
      }
    })

    render(<my-app5 />, scratch)
    expect(scratch.firstChild.shadowRoot.innerHTML).to.equal('<div><div>Hello 12</div></div>')
  })
})
