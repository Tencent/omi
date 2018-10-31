import { define, render } from '../../src/omi'

define('my-counter', function() {
  const [count, setCount] = this.use({
    data: 0,
    effect: function() {
      document.title = `The num is ${this.data}.`
    }
  })

  const [items, setItems] = this.use({
    data: [{ text: 'Omi' }],
    effect: function() {
      console.log(`The items count is ${this.data.length}.`)
    }
  })

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>

      <ul>
        {items.map(item => {
          return <li>{item.text}</li>
        })}
      </ul>
      <button onClick={() => setItems([...items, { text: 'new item' }])}>
        add
      </button>
      <button onClick={() => setItems([])}>empty</button>
    </div>
  )
})

render(<my-counter />, 'body')
