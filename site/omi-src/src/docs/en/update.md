
## Update

`update` method is an important built-in core method for updating components themselves. For example:

```js
this.update()
```

You can also pass use `forceUpdate` to ignore attributes in html mode and updates:

```js
this.forceUpdate()
```

For example, click on the mask of the pop-up layer to close the pop-up, pass it to the parent component in the react, let the parent component update, while Omi advocates self-update, so that the diff area is smaller.

```js
onMaskClick = ()=> {
  //change props
  this.props.show = false
  //prevent parent component from updating diff without results
  this.prevProps.show = false
  //update self and ignore attributes in html mode
  this.forceUpdate()
  //trigger events, which can be used to change external state variables to maintain consistency, but external components need not be updated
  this.fire('close')
}
```

Code above is the same as:

```js
onMaskClick = ()=> {
  this.updateProps({
    show: false
  })
  this.fire('close')
}
```


### UpdateSelf

![](https://github.com/Tencent/omi/raw/master/assets/update.png)

`updateSelf` method does not update child components.
