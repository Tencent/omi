## phy-scroll

### Usage

```js
new PhyScroll({
  touch:"#wrapper",//反馈触摸的dom
  scroll: '#scroll', //运动的对象
  vertical: true,//不必需，默认是true代表监听竖直方向touch
  //property: "translateY",  //被滚动的属性
  sensitivity: 1,//不必需,触摸区域的灵敏度，默认值为1，可以为负数
  factor: 1,//不必需,默认值是1代表touch区域的1px的对应target.y的1
  min: window.innerHeight - 45 - 48 - 2000, //不必需,滚动属性的最小值
  max: 0,
  change: function (v) {
      //console.log(v);
  },
  animationEnd: function (value, index) {
      console.log(value);
  },
  step:40
})
```

## License

MIT © Tencent
