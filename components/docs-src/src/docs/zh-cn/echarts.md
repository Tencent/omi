## Echarts ECharts 的 OMI 版本
ECharts 的 OMI 版本
## 导入

```js
import '@omiu/echarts'
```

或者直接 script 标签引入。


```html
<script src="https://unpkg.com/@omiu/echarts"></script>
```

## 使用

```html
<o-echarts></o-echarts>
```


## API

### 属性

```tsx
interface ChartProps {
  /**
   * echart的option
   */
  options: object
  /**
   * 是否可以resize
   */
  resizeAble?: boolean
  /**
   * 画布宽度
   */
  width: number
  /**
   * 画布高度
   */
  height: number
}
```

### 默认属性
```tsx
{
  options: {},
  resizeAble: false,
  width: 300,
  height: 300
}
```
