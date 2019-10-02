## Omis

Observable store system for React apps.

## Usage 

```jsx
import { $ } from 'omis'

const Counter = $({
  render() {
    return <div>{$.store.data.count}</div>
  },
  use: ['count']
  //or
  //useSelf: ['count']
})

const App = $({
  render() {
    return (
      <div>
        <Counter />
      </div>
    )
  },
  store: {
    data: {
      count: 1
    }
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
```
