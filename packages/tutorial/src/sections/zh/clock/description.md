# Clock

这是一个 OMI 渲染 SVG 的例子。


## 先画一个圆

```tsx
import { tag, render, h, WeElement } from 'omi'

@tag('my-clock')
class MyClock extends WeElement {
  static css = `
  svg {
    width: 200px;
  }
  
  .clock-face {
    stroke: #333;
    fill: white;
  }`

  render() {
    return (
      <svg viewBox='-50 -50 100 100'>
        <circle class='clock-face' r='48' />
      </svg>
    )
  }
}

render(<my-clock />, 'body')
```

效果如下:

![](https://gtimg.wechatpay.cn/resource/xres/img/202208/0c363b527b9e25625ae04011a4ecc5db_210x198.png)

## 再加上表盘

```html
<svg viewBox='-50 -50 100 100'>
  <circle class='clock-face' r='48' />
  {this.arr.map(i => (
    <line class='major' y1='35' y2='45' transform={`rotate(${30 * i})`} />
  ))}
  {this.arr.map(i => (
    [1, 2, 3, 4].map(o => <line class='minor' y1='42' y2='45' transform={`rotate(${6 * (i + o)})`} />)
  ))}
</svg>
```

效果如下:

![](https://gtimg.wechatpay.cn/resource/xres/img/202208/b7ad67f0f6e41216465d03c4f8034498_218x202.png)

## 时针、分钟和秒针

```html
<svg viewBox='-50 -50 100 100'>
  <circle class='clock-face' r='48' />
  {this.arr.map(i => (
    <line class='major' y1='35' y2='45' transform={`rotate(${30 * i})`} />
  ))}
  {this.arr.map(i => (
    [1, 2, 3, 4].map(o => <line class='minor' y1='42' y2='45' transform={`rotate(${6 * (i + o)})`} />)
  ))}
  <line class='hour' y1='2' y2='-20' transform={`rotate(${30 * hours + minutes / 2})`} />
  <line class='minute' y1='4' y2='-30' transform={`rotate(${6 * minutes + seconds / 10})`} />
  <g transform={`rotate(${6 * seconds})`}>
    <line class='second' y1='10' y2='-38' />
    <line class='second-counterweight' y1='10' y2='2' />
  </g>
</svg>
```