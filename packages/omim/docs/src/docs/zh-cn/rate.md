## Rate

评分组件。

## 使用

```html
<h3>Simple</h3>
<m-rate total="5" value="1" color='#0072d9'></m-rate>
<h3>With Event</h3>
<m-rate id="myRate" total="5" value="2" color='#f57c00'></m-rate>
<h3>Half</h3>
<m-rate total="5" half value="3" color='red'></m-rate>

<script src="https://tencent.github.io/omi/packages/omi/dist/omi.js"></script>
<script src="../../src/rate/index.js"></script>
<script>
document.querySelector("#myRate").addEventListener('selected', function (evt) {
  console.log(evt.detail)
})
</script>
```


## API

### Props

```jsx
{
  total: number
  half?: boolean
  value?: number
  color?: string
}
```