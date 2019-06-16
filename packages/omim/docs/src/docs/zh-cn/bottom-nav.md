## Bottom Nav

底部导航栏

## 使用

```html
<m-bottom-nav selected-color='red' id='myNav' items="[
    { icon: 'favorite', label: 'Favorites', selected: true },
    { icon: 'location_on', label: 'Nearby' },
    { icon: 'restore', label: 'Recents' }
  ]">
</m-bottom-nav>

<script>
  document.querySelector('#myNav').addEventListener('change', function (evt) {
    console.log(evt.detail)
  })
</script>
```

其中 icon 也支持 svg：

```jsx
{ 
  icon:{ 
    path : 'M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z'
  }, 
  label: 'Arrow' 
}
```

具体的配置可以参考 m-icon。

## API

### Props

```jsx
{
  selectedColor?: string,
  items: array
}
```


