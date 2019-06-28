## Date Picker

时间选择器。

## 使用

```html
<m-date-picker selected-date="2019-10-8"></m-date-picker>
```

## 与文本框一起工作

```jsx
import { define, WeElement, render, h } from 'omi'
import 'omim/date-picker'
import 'omim/text-field'
import 'omim/locate'

define('my-app', class extends WeElement {
  show = true

  date = '2019-10-8'

  onIconClick = () => {
    this.show = !this.show
    this.update()
  }

  onSelect = (evt) => {
    this.show = false
    this.date = evt.detail
    this.update()
  }

  render() {
    return <div>
      <m-text-field rightIcon='today' id='myTextField' value={this.date} label='Date of birth' onIconClick={this.onIconClick} iconEvent={true} />
      <m-locate to="#myTextField" direction='bottom-left' show={this.show}>
        <m-date-picker selected-date={this.date} onSelect={this.onSelect}></m-date-picker>
      </m-locate>
    </div>
  }
})

render(<my-app />, 'body')
```

## API

### Props

```jsx
{
  selectedDate: string
}
```

### Events

* select