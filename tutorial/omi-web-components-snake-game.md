## Using Web Components of Omi to make Snake-Eating Game

### Screenshot

![](../assets/omi-snake.png)


### CSS rpx unit

Rpx (responsive pixel) is a unit invented by wxss in wechat mini programe: it can be adapted according to the width of the screen. Set the screen width to 750 rpx. For example, on the iPhone 6, the screen width is 375 px, with 750 physical pixels, 750 rpx = 375 PX = 750 physical pixels, and 1 rpx = 0.5 PX = 1 Physical pixel.

| **Device**                         | **rpx to px (screenwidth/750)**        | 	px to rpx (750/screenwidth) |
| ------------------------------- | ----------------------------------- | ---------------------|
| iPhone5 | 	1rpx = 0.42px | 1px = 2.34rpx|
| iPhone6 | 	1rpx = 0.5px | 1px = 2rpx|	
| iPhone6 Plus | 	1rpx = 0.552px | 1px = 1.81rpx |

Rpx unit is very conducive to the overall workflow of front-end development, because the designer's design draft is designed according to the width of 750, so the front-end page can directly use sketch export ruler for rpx layout.

### rpx 原理    

```js
export function rpx(str) {
  return str.replace(/([1-9]\d*|0)(\.\d*)*rpx/g, (a, b) => {
    return (window.innerWidth * Number(b)) / 750 + 'px'
  })
}
```

### Compatibility

The last 2 versions of all modern browsers are supported, including Chrome, Safari, Opera, Firefox, Edge. In addition, Internet Explorer 11 is also supported.

Edge and Internet Explorer 11 require the web components polyfills.

If you want to be compatible with **IE8+**, Change on line in the package.json:

```json
  "alias": {
    "omi": "omio"
  }
```