
## Update

`update` 方法是内置的重要核心方法，用于更新组件自身。比如:

```js
this.update()
```


举个场景，比如点击弹出层的 mask 关闭弹出，在 react 中需要传递给父组件，让父组件更新，而 Omi 推崇自更新，这样 diff 的区域更小。

```js
onMaskClick = ()=> {
  //修改 props
  this.props.show = false
  //防止父组件更新 diff 不出结果
  this.prevProps.show = false
  //更新
  this.update()
  //触发事件，可以通过这个更改外部的状态变量来保持一致性，但是外面的组件不用再更新
  this.fire('close')
}
```

也可以使用 updateProps 达到同样的效果:

```js
onMaskClick = ()=> {
  //修改 props 并强制更新
  this.updateProps({
    show: false
  })
  //触发事件，可以通过这个更改外部的状态变量来保持一致性，但是外面的组件不用再更新
  this.fire('close')
}
```

### UpdateSelf

![](https://github.com/Tencent/omi/raw/master/assets/update.png)

`updateSelf` 方法不会更新子组件。
