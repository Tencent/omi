## Slider 滑块

一般用于拖动页面内容

## 导入

```js
import '@omiu/slider'
```

或者直接 script 标签引入。

```html
<script src="https://unpkg.com/@omiu/slider"></script>
```

## 使用

```html
<o-slider></o-slider>
```

## API

### 属性

```tsx
{
  min?: number
  max?: number
  step?: number
  value?: number
  second_value?: number
  range: 'single' | 'double'
  orient?: 'vetical' | 'horizontal'
  shape: 'square' | 'round'
  disabled?: boolean
}
```

### 默认属性

```tsx
{
  //default a single square range slider
  min: 0,
  max: 100,
  step: 1,
  value: 0,
  second_value: 100,
  range: 'single',
  orient: 'horizontal',
  shape: 'square',
  disabled: false,
}
```

### 事件

- change
