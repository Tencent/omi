# Reomi

React + Omio in one.

## Example

```jsx
import { define, WeElement } from 'omi';
import { Button } from 'antd'

define('my-app', class extends WeElement {
  render() {
    return <div className="App">
        <Button>Antd Button Default</Button>
        <Button type="dashed">Antd Button Dashed</Button>
        <Button type="danger">Antd Button Danger</Button>
    </div>
  }
})
```

* You can use both grammars at the same time.
* You can use the react component.