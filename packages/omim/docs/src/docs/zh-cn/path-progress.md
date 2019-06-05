## Path Progress

三种进度展示方式。

## 使用

```html
<m-path-progress 
  type="Line" 
  progress="0.5" 
  text='test' 
  options="{
    strokeWidth: 2,
    color: '#0072d9',
    trailColor: '#ddd'
  }"
  initial-animate 
  container-style="{
    width: '200px',
    height: '20px'
  }">
</m-path-progress>
```

## API

### Props

```jsx
{
  type: string,
  options: object,
  progress: number,
  text: string,
  initialAnimate: boolean,
  containerStyle: object
}
```