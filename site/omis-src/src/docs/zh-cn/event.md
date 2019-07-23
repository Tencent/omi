## Event

```jsx
const Comp = (props, store) => {
  return (
    <div onClick={store.clickHandle}></div>
  )
}

Comp.store = _ => ({
    clickHandle(){
      console.log('clicked')
    }
})
```

### Custom Event

```jsx
const Comp = (props, store) => {
  return (
    <div onClick={store.clickHandle}></div>
  )
}

Comp.store = _ => ({
    clickHandle(){
      //触发自定义事件
      _.props.onMyEvent()
    }
})

const App = (props, store) => {
  return (
    <div>
      <Comp onMyEvent={store.myEventHandle} />
    </div>
  )
}

App.store = _ => ({
  myEventHandle(){
    //get this
    const self = _.store

    //update app
    self.update()  //or _.update()
  }
})
```