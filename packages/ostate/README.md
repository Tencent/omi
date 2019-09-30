## Ostate

Observable state for JavaScript apps.

## Usage in React

```jsx
const App =  o({
  render(){

  },
  use:[],
  useSelf(){

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
);
```

## Usage in Vue