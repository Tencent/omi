# omi-mp - 微信小程序开发 Web

目前开发形态还在规划中，先放出 [【WXML 编译器】](https://github.com/dntzhang/westore/blob/master/packages/westore-web/scripts/index.js)给大家看看，感兴趣的也可以参与进来:

```js
npm install    //安装
npm run test   //测试
```

目前除了 template，其余基本都支持，不支持的欢迎反馈或 PR。

举个99乘法表的例子:

```js
compile(`
<view wx:for="{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}" wx:for-item="i">
  <view wx:for="{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}" wx:for-item="j">
    <view wx:if="{{i <= j}}">
      {{i}} * {{j}} = {{i * j}}
    </view>
  </view>
</view>`)
```

编译之后：

```js
function render() {
  return (
    h('view', {}, [1, 2, 3, 4, 5, 6, 7, 8, 9].map((i, index) => {
      h('view', {}, [1, 2, 3, 4, 5, 6, 7, 8, 9].map((j, index) => {
        i <= j && h('view', {}, [`${i} * ${j} = ${i * j}`])
      }))
    }))
  )
}
```

完成的测试用例[点击这里](https://github.com/dntzhang/westore/blob/master/packages/westore-web/test/index.js)

## License
MIT [@dntzhang](https://github.com/dntzhang)
