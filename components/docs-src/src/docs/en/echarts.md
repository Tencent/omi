## Echarts

OMI version of ECharts

## Import

```js
import '@omiu/echarts'
```

Or use script tag to ref it.


```html
<script src="https://unpkg.com/@omiu/echarts"></script>
```

## Usage
```html
<o-chart
        width="300"
        height="300"
        options="{
        
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line',
              smooth: true
            }
          ]
      }"
      />
```

## API

### Props

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

### defaultProps

```tsx
{
  options: {},
  resizeAble: false,
  width: 300,
  height: 300
}
```
