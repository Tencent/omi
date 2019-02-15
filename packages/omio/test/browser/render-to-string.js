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
    let str = renderToString(<todo-app />)

    expect(str).to.equal('<div>ab</div>');
  })

  define('todo-app2', class extends WeElement {
    css = 'h3 { color:red; }'

    data = { items: [], text: '' }

    render() {
      return (
        <div>ab</div>
      )
    }
  })

  it('render to string with style', () => {
    let str = renderToString(<todo-app2 />)

    expect(str).to.equal('<style type="text/css" id="_ss0">h3[_ss0]{ color:red; }</style><div _ss0>ab</div>');
  })


  it('render to string without style', () => {
    let str = renderToString(<todo-app2 />, { scopedCSS: false })

    expect(str).to.equal('<div>ab</div>');
  })



define('todo-list', class extends WeElement {
  css = 'li { color:green; }'

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
  
  css = 'h3 { color:red; }'

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
  let str = renderToString(<todo-app3 />, { scopedCSS: false })

  expect(str).to.equal('<div><h3>TODO</h3><ul></ul><form><input id="new-todo" value /><button>Add #1</button></form></div>');
})



it('render to string with nest element', () => {
  let str = renderToString(<todo-app3 />, { scopedCSS: true })

  expect(str).to.equal('<style type="text/css" id="_ss1">h3[_ss1]{ color:red; }</style><div _ss1><h3 _ss1>TODO</h3><style type="text/css" id="_ss2">li[_ss2]{ color:green; }</style><ul _ss2 _ss1></ul><form _ss1><input id="new-todo" value _ss1 /><button _ss1>Add #1</button></form></div>');
})

})
