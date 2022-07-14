## Class

Omi has two built-in class methods `extractClass` and `classNames`.

```jsx
import { classNames, extractClass } from 'omi'

define('my-element', class extends WeElement {
  render(props) {
    //extractClass will take out this class/className from props and merge the other classNames to obj
    const cls = extractClass(props, 'o-my-class', {
      'other-class': true,
      'other-class-b': this.xxx === 1
    })

    return (
      <div {...cls} {...props}>
        Test
      </div>
    )
  }
})
  
```

The `classNames` is the same as [classnames](https://github.com/JedWatson/classnames) of [npm](https://www.npmjs.com/package/classnames).