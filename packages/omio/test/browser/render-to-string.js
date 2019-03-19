/*
 * @Author: kinsonpeng 
 * @Date: 2018-12-19 15:50:55 
 * @Last Modified by: kinsonpeng
 * @Last Modified time: 2018-12-20 16:11:35
 */
import { define, render, WeElement, renderToString } from '../../src/omi';

describe('render()', () => {


  define('todo-app', class extends WeElement {

    data = { items: [], text: '' }

    render() {
      return (
        <div>ab</div>
      )
    }
  })
  it('render to string without style', () => {
    let res = renderToString(<todo-app />)

    expect(res.html).to.equal('<div>ab</div>');
  })

  define('todo-app2', class extends WeElement {
    static css = 'h3 { color:red; }'

    data = { items: [], text: '' }

    render() {
      return (
        <div>ab</div>
      )
    }
  })

  it('render to string with style', () => {
    let res = renderToString(<todo-app2 />)

    expect(res.html).to.equal('<div _ss0>ab</div>');
    expect(res.css + '').to.equal('<style type="text/css" id="_ss0">h3[_ss0]{ color:red; }</style>')
  })


  it('render to string without style', () => {
    let res = renderToString(<todo-app2 />, { scopedCSS: false })

    expect(res.html).to.equal('<div>ab</div>');
  })



  define('todo-list', class extends WeElement {
    static css = 'li { color:green; }'

    render(props) {
      return (
        <ul>
          {props.items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      )
    }
  })

  define('todo-app3', class extends WeElement {
    static observe = true

    static css = 'h3 { color:red; }'

    data = { items: [], text: '' }

    render() {
      return (
        <div>
          <h3>TODO</h3>
          <todo-list items={this.data.items} />
          <form onSubmit={this.handleSubmit}>
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.data.text}
            />
            <button>Add #{this.data.items.length + 1}</button>
          </form>
        </div>
      )
    }

    handleChange = e => {
      this.data.text = e.target.value
    }

    handleSubmit = e => {
      e.preventDefault()
      if (!this.data.text.trim().length) {
        return
      }
      this.data.items.push({
        text: this.data.text,
        id: Date.now()
      })
      this.data.text = ''
    }
  })


  it('render to string with nest element', () => {
    let res = renderToString(<todo-app3 />, { scopedCSS: false })

    expect(res.html).to.equal('<div><h3>TODO</h3><ul></ul><form><input id="new-todo" value /><button>Add #1</button></form></div>');
  })



  it('render to string with nest element and scoped css', () => {
    let res = renderToString(<todo-app3 />, { scopedCSS: true })

    expect(res.html).to.equal('<div _ss1><h3 _ss1>TODO</h3><ul _ss2 _ss1></ul><form _ss1><input id="new-todo" value _ss1 /><button _ss1>Add #1</button></form></div>');
    expect(res.css.join('')).to.equal('<style type="text/css" id="_ss1">h3[_ss1]{ color:red; }</style><style type="text/css" id="_ss2">li[_ss2]{ color:green; }</style>')
  })


  define('todo-app4', class extends WeElement {
    static observe = true

    static css = 'h3 { color:red; }'

    data = { items: [], text: '' }

    render() {
      return (
        <div>
          <h3>TODO</h3>
          <todo-list items={this.data.items} />
          <todo-list items={this.data.items} />
          <todo-list items={this.data.items} />
          <form onSubmit={this.handleSubmit}>
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.data.text}
            />
            <button>Add #{this.data.items.length + 1}</button>
          </form>
        </div>
      )
    }

    handleChange = e => {
      this.data.text = e.target.value
    }

    handleSubmit = e => {
      e.preventDefault()
      if (!this.data.text.trim().length) {
        return
      }
      this.data.items.push({
        text: this.data.text,
        id: Date.now()
      })
      this.data.text = ''
    }
  })



  it('render to string with nest element and children elements', () => {
    let res = renderToString(<todo-app4 />)

    expect(res.html).to.equal('<div _ss3><h3 _ss3>TODO</h3><ul _ss2 _ss3></ul><ul _ss2 _ss3></ul><ul _ss2 _ss3></ul><form _ss3><input id="new-todo" value _ss3 /><button _ss3>Add #1</button></form></div>');
    expect(res.css.join('')).to.equal('<style type="text/css" id="_ss3">h3[_ss3]{ color:red; }</style><style type="text/css" id="_ss2">li[_ss2]{ color:green; }</style>')
  })


})
