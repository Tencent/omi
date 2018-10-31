import { define, render } from '../../src/omi'

define('my-counter', function() {
  const [count, setCount] = this.useData(0)

  this.useEffect(() => {
    document.title = `The num is ${count}.`
  })

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
})

render(<my-counter />, 'body')
