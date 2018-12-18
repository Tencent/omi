# 腾讯 Omio 发布 - 全面兼容 IE8 和移动端

在微信支付、手机QQ、腾讯TEG、腾讯IEG等团队已经能够使用 Omi 应用于大量的 to b 的项目以及内部管理系统，为了达到 Omi 全覆盖，兼容 to c 端各种浏览器环境，所以有了 Omio, 拥有几乎和 Omi 一模一样的语法。

> 兼容老浏览器的 Omi 版本，[→ Github](https://github.com/Tencent/omi/tree/master/packages/omio)

![](https://github.com/Tencent/omi/blob/master/assets/omio-ie.png)

---

## 立即使用

```bash
$ npm i omi-cli -g             
$ omi init-o my-app   
$ cd my-app           
$ npm start                     
$ npm run build               
```

### 与 omi 不同之处

omio 拥有 omi一样的语法，但是也有一些差异需要注意：

* omio 支持 `staticCss`，omi 是不支持的

`css` 和 `staticCss` 的区别是 ? 例如：

``` js
render() {
  return (
    <div>
      <my-ele name={this.name}></my-ele>
      <my-ele name={this.name}></my-ele>
      <my-ele name={this.name}></my-ele>
    </div>
  )
}
```

如上面的例子,`css`方法会渲染三次，并插入到 head，而`staticCss` 只会渲染一次。
当你 update 组件或者 setState 时候，`css`方法会渲染三次，并更新head里对应三个地方的样式，`staticCss` 不再渲染。

* Omio 不支持 slot, 请使用 `props.children` 代替，像 react 一样
* Omio 支持 store 注入，但不支持 store path updating
* Omio 不支持 render array，未来可能支持
* Omio 不支持 `fire` 触发自定义事件，可以和 react 一样使用 `props.xxx()` 去触发。Omi 同时支持 `fire` and `props.xxx()` 两种方式。


## Omi 项目中使用 Omio

先安装:

``` bash
npm i omio
```

配置 Webpack Alias

如果你想在已经存在的 omi 项目下使用 omio，你可以使用下面配置，不用任何代码更改:

```js
module.exports = {
  //...
  resolve: {
    alias: {
      omi: 'omio'
    }
  }
};
```

## 兼容 IE 踩坑

### 第一坑 - 伪数组

IE下 querySelectorAll 出来的伪数组,没有 array 相关的方法：
``` js
const codes = document.querySelectorAll('xxx')
//挂了
codesArr.forEach(() => {

})
```

需要转成真数组:

``` js
const codes = Array.prototype.slice.call(document.querySelectorAll('xxx'))
```

### 第二坑 - 静态属性丢失

这是 Omi 的源码:

``` js
function define(name, ctor) {
  if (ctor.is === 'WeElement') {
    options.mapping[name] = ctor;
    if (ctor.data && !ctor.pure) {
      ctor.updatePath = getUpdatePath(ctor.data);
    }
  }
}
```

但是在 IE 下进入不了 if 条件！！Omi 源码里明明有有静态属性:

``` js
class WeElement {
  static is = 'WeElement'

  constructor(props, store) {
    ...
  }
  ...
  ...
  render() { }
}
```

为什么丢失了呢？追根溯源一下：

使用 define:

``` js
define('my-p', class extends WeElement {
  render(props) {
    return props.children[0]
  }
})
```

编译后的代码:

``` js
define('my-p', function (_WeElement) {
  _inherits(_class, _WeElement);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, _WeElement.apply(this, arguments));
  }

  _class.prototype.render = function render$$1(props) {
    return props.children[0];
  };

  return _class;
}(WeElement));
```

那么问题就出在 _inherits 过程中把静态属性 `is` 丢失了！ 

``` js
function _inherits(subClass, superClass) {
  subClass.prototype = Object.create(superClass && superClass.prototype, { 
    constructor: { 
      value: subClass, 
      enumerable: false, 
      writable: true, 
      configurable: true 
    } 
  }); 
  if (superClass) {
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  } 
}
```

好，由于是编译注入代码，后面可能也需要支持纯函数的组件定义，所以这样解决了:

```js
function define(name, ctor) {
  //if (ctor.is === 'WeElement') {
    options.mapping[name] = ctor;
    if (ctor.data && !ctor.pure) {
      ctor.updatePath = getUpdatePath(ctor.data);
    }
  //}
}
```

### 第三坑 - Object.assign IE 不支持

由于 Omio 源码里使用了 Object.assign，所以这里需要 polyfill 一下：

```js
if (typeof Object.assign != 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: function assign(target, varArgs) { // .length of function is 2
      'use strict';
      if (target == null) { // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) { // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}
```

由于 IE9 支持了 ES5, webpack 编译出来的 es5，所以并不需要引入 [es5-shim](https://github.com/es-shims/es5-shim) 来兼容。

### 第四坑 - Proxy 不支持

因为需要监听数据变化，Omi 使用的是 Proxy，所以这里需要一个降级方案 - [obaa 库](https://github.com/Tencent/omi/tree/master/packages/obaa)，监听任意对象的任意变化。


#### 安装 obaa

```js
npm install obaa
```

### 使用

observe object:

```js
var obj = { a: 1 };
obaa(obj, function (name, value , old) {
    console.log(name + "__" + value + "__" + old);
});
obj.a = 2; //a__2__1 
```

observe array:

```js
var arr = [1, 2, 3];
obaa(arr, function (name, value, old) {
    console.log(name + "__" + value+"__"+old);
});
arr.push(4);//Array-push__[1,2,3,4]__[1,2,3] 
arr[3] = 5;//3__5__4
```

observe class instance:

```js
var User = function (name, age) {
    this.name = name;
    this.age = age;
    //observe name only
    obaa(this, ["name"], function (name, value, oldValue) {
        console.log(name + "__" + value + "__" + oldValue);
    });
}
var user = new User("lisi", 25);
user.name = "wangwu";//name__wangwu__lisi 
user.age = 20; //nothing output
```

其他:

```js
arr.push(111) //trigger observe callback
//every method of array has a pureXXX function
arr.purePush(111) //don't trigger observe callback

arr.size(2) //trigger observe callback
arr.length = 2 //don't trigger observe callback

//if obj.c is undefined
obaa.set(obj, 'c', 3)
obj.c = 4 //trigger observe callback

//if obj.c is undefined
obj.c = 3
obj.c = 4 //don't trigger observe callback
```

### 第五坑 - MVVM 的 mappingjs 不支持

![](https://github.com/Tencent/omi/blob/master/assets/mappingjs.png)

mappingjs 完全利用的 proxy，所以数据 mapping 的过程中会自动更新视图。但是切换成 obaa 之后，发现数组 length 更新视图不会更新，数组增加视图不会更新。review 了 mappingjs 发现：

* mappingjs 使用了 array.length 改变数组长度
* mappingjs 使用 array[index] 增加元素

这样在 obaa 是不允许的，不然的话无法监听到变化， obaa 要求：

* 使用 array.size(len) 改变数组长度
* 使用 array.push 增加元素

所以就有了 [mappingjs-omio](https://github.com/Tencent/omi/blob/master/packages/omi-cli/template/o/src/utils/mapping-omio.js), 这样的话， Omio 同样可以使用真正的 MVVM 架构。

## Omio 实战

[md2site](https://tencent.github.io/omi/assets/md2site/) 完全使用 omio 打造，拥有良好的阅读体验和兼容性。

![](https://github.com/Tencent/omi/blob/master/assets/ie9a.jpg)

![](https://github.com/Tencent/omi/blob/master/assets/ie9b.jpg)

![](https://github.com/Tencent/omi/blob/master/assets/mobile.jpg)

## 兼容 IE8 

### 第一坑 - 关键字作为 key

```js
const map = {
  var: 'view',
  switch: 'switch'
}
```

要改成：

```js
const map = {
  'var': 'view',
  'switch': 'switch'
}
```

关键字不能作为 JSON 的 key。

### 第二坑 - Object.assign polyfill 不可用

Object.assign polyfill 使用了 `Object.defineProperty`, IE8 下报错，所以把 Object.assign 替换成了 `object-assign`：

```js
'use strict'
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols
var hasOwnProperty = Object.prototype.hasOwnProperty
var propIsEnumerable = Object.prototype.propertyIsEnumerable

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined')
  }

  return Object(val)
}

export function assign(target, source) {
  var from
  var to = toObject(target)
  var symbols

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s])

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key]
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from)
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]]
        }
      }
    }
  }

  return to
}
```

### 第三坑 - Object.create 不可用

使用 polyfill 并且要注释掉下面的代码！因为传递二个参数没法 polyfill！

```js
if (typeof Object.create !== 'function') {
  Object.create = function(proto, propertiesObject) {
    if (typeof proto !== 'object' && typeof proto !== 'function') {
      throw new TypeError('Object prototype may only be an Object: ' + proto)
    } else if (proto === null) {
      throw new Error(
        "This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument."
      )
    }

    // if (typeof propertiesObject != 'undefined') {
    //     throw new Error("This browser's implementation of Object.create is a shim and doesn't support a second argument.");
    // }

    function F() {}
    F.prototype = proto

    return new F()
  }
}
```

### 第四坑 - text 节点设置属性

```
//ie8 error
try {
  out[ATTR_KEY] = true
} catch (e) {}
```

直接 try catch 包起来，测试下来目前不影响正常使用。

### 第五坑 - addEventListener 和 removeEventListener

这里直接使用了 mdn 的 polyfill，其他 polyfill 都有坑！

```js
if (!Element.prototype.addEventListener) {
  var oListeners = {};
  function runListeners(oEvent) {
    if (!oEvent) { oEvent = window.event; }
    for (var iLstId = 0, iElId = 0, oEvtListeners = oListeners[oEvent.type]; iElId < oEvtListeners.aEls.length; iElId++) {
      if (oEvtListeners.aEls[iElId] === this) {
        for (iLstId; iLstId < oEvtListeners.aEvts[iElId].length; iLstId++) { oEvtListeners.aEvts[iElId][iLstId].call(this, oEvent); }
        break;
      }
    }
  }
  Element.prototype.addEventListener = function (sEventType, fListener /*, useCapture (will be ignored!) */) {
    if (oListeners.hasOwnProperty(sEventType)) {
      var oEvtListeners = oListeners[sEventType];
      for (var nElIdx = -1, iElId = 0; iElId < oEvtListeners.aEls.length; iElId++) {
        if (oEvtListeners.aEls[iElId] === this) { nElIdx = iElId; break; }
      }
      if (nElIdx === -1) {
        oEvtListeners.aEls.push(this);
        oEvtListeners.aEvts.push([fListener]);
        this["on" + sEventType] = runListeners;
      } else {
        var aElListeners = oEvtListeners.aEvts[nElIdx];
        if (this["on" + sEventType] !== runListeners) {
          aElListeners.splice(0);
          this["on" + sEventType] = runListeners;
        }
        for (var iLstId = 0; iLstId < aElListeners.length; iLstId++) {
          if (aElListeners[iLstId] === fListener) { return; }
        }
        aElListeners.push(fListener);
      }
    } else {
      oListeners[sEventType] = { aEls: [this], aEvts: [[fListener]] };
      this["on" + sEventType] = runListeners;
    }
  };
  Element.prototype.removeEventListener = function (sEventType, fListener /*, useCapture (will be ignored!) */) {
    if (!oListeners.hasOwnProperty(sEventType)) { return; }
    var oEvtListeners = oListeners[sEventType];
    for (var nElIdx = -1, iElId = 0; iElId < oEvtListeners.aEls.length; iElId++) {
      if (oEvtListeners.aEls[iElId] === this) { nElIdx = iElId; break; }
    }
    if (nElIdx === -1) { return; }
    for (var iLstId = 0, aElListeners = oEvtListeners.aEvts[nElIdx]; iLstId < aElListeners.length; iLstId++) {
      if (aElListeners[iLstId] === fListener) { aElListeners.splice(iLstId, 1); }
    }
  };
}
```

### 第六坑 - string trim 不支持

```js
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
  }
}
```

### 第七坑 - 数据监听

```js
import { render, WeElement, define } from '../../src/omi'

define('my-counter', class extends WeElement {
  //ie8 不能使用 observe
  //static observe = true

  data = {
    count: 1
  }

  sub = () => {
    this.data.count--
    //手动 update
    this.update()
  }

  add = () => {
    this.data.count++
    //手动 update
    this.update()
  }

  render() {
    return (
      <div>
        <button onClick={this.sub}>-</button>
        <span>{this.data.count}</span>
        <button onClick={this.add}>+</button>
      </div>
    )
  }
})

render(<my-counter />, 'body')
```

如果你不需要兼容 IE8，你可以使用 `static observe = true` 进行数据监听自动更新视图。

### 第八坑 - ES5 Shim

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.7/es5-shim.min.js"></script>
```

## 开始使用吧

[→ Omi Github](https://github.com/Tencent/omi/tree/master/packages/omio)