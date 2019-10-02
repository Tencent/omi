## Omis

Observable store system for JavaScript apps.

## Usage in React

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

## Usage in Vue

```jsx
import { $v } from 'omis'
```