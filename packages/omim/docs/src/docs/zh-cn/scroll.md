## Scroll

移动端触摸物理滚动模拟，基于[phy-scroll](https://github.com/Tencent/omi/tree/master/packages/phy-scroll)支持的物理特性包括(加速、惯性、摩擦力、回弹)。

[→ Touch Me](https://tencent.github.io/omi/packages/omim/demos/scroll/index.html)

## Usage

```jsx
<m-scroll min={-1000} max={0} step={40} onEnd={this.onEnd}>
  <div id="wrapper">
    <div id="scroller">
      <ul>
        <li>Pretty row 1</li>
        <li>Pretty row 2</li>
        <li>Pretty row 3</li>
        ...
        ...
      </ul>
    </div>
  </div>
</m-scroll>
```

## API

### Props

```jsx
{
  vertical: boolean
  min: number
  max: number
  sensitivity: number
  factor: number
  step: number
  bindSelf: boolean
  preventDefault: boolean
  onChange: () => void
  onTouchStart: () => void
  onTouchMove: () => void
  onTouchEnd: () => void
  onTap: () => void
  onPressMove: () => void
  onAnimationEnd: () => void
}
```

 