## Elevation

阴影提供关于物体深度和方向运动的重要视觉线索。 它们是唯一的视觉提示，表明表面之间的分离量。 对象的高程确定其阴影的外观。 高程值在“z-space”中映射，范围从0到24。

## 使用

```html
<m-elevation
  css=".mdc-elevation {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }"
  class="elevation-demo-surface"
  z="1"
>1dp</m-elevation>
```

## Omi 中使用

JSX:

```jsx
<m-elevation
  css={`
    .mdc-elevation {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `}
  class="elevation-demo-surface"
  z="1"
>1dp</m-elevation>
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| z | number | -- | 阴影外观控制 |
