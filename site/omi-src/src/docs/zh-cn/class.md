## Class

Omi 有内置的两个 class 方法 `classNames` 和 `extractClass`：

```jsx
import { classNames, extractClass } from 'omi'

define('my-element', class extends WeElement {
  render(props) {
    //extractClass 会取出 props 的  class 或 className 属性并与其他 classNames 合并在一起
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

上面的 `classNames` 和 npm 上的 [classNames](https://www.npmjs.com/package/classnames) 是一样的。