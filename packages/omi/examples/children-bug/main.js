import { render, WeElement, define } from '../../src/omi'

define('todo-list', function(props) {
  const table = props.test.map(item => {
   return <ul aa={1} >
      {item.arr.map(si =><li>{si}</li>)}
    </ul>
  })

  console.log(table[0]&&table[0])
  // table[0]&&table[0].children.push(<li>
  //   <div>abcde</div>
  // </li>)

window.xxx = table
//here is ture, bug!
console.log(xxx[0].children === xxx[2].children)
  return (
    <div>
     {table}
    </div>
  )
})

define('todo-app', class extends WeElement {
  static observe = true

  data = { items: [], text: '' }

  render() {
    return (
      <div>
        <h3>TODO1</h3>
        <todo-list items={this.data.items} test={[
    {a:false,arr:[]},
    {a:true,arr:['1','2']},
    {a:false,arr:[]}
  ]} />
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

render(<todo-app />, 'body',{
  data:{},
  test:[
    {a:false,arr:[]},
    {a:true,arr:['1','2']},
    {a:false,arr:[]}
  ]
})
