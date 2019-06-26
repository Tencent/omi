## Menu

菜单显示临时表面选项列表。 当用户与按钮，操作或其他控件交互时，它们会出现。

## 使用

```jsx
import 'omim/menu'
import 'omim/button'
import 'omim/locate'
import { define, WeElement, render, h } from 'omi'


define('my-app', class extends WeElement {
  onSelected = (evt) => {
    console.log(evt)
    this.show = false
    this.update()
  }

  show = true

  onClick = () => {
    this.show = !this.show
    this.update()
  }

  render() {
    return <div>
      <m-button 
        id='myBtn'
        style='position: relative;top: 100px;left: 40px;'
        onClick={this.onClick}>
          OPEN MENU
      </m-button>
      <m-locate to="#myBtn"  direction='bottom-left' show={this.show}>
        <m-menu onSelected={this.onSelected} list={[
          { text: 'A Menu Item' },
          { text: 'A Disabled Menu Item', disabled: true },
          { text: 'Another Menu Item' }
        ]}></m-menu>
      </m-locate>
    </div>
  }
})
render(<my-app />, 'body')
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| list | object | -- | 列表内容 |

### Events

* select 