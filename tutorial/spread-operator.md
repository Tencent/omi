## 你必须收藏的 ES6 语法糖 - Spread Operator 技巧

### 不使用 Apply 

apply 和 call 可以执行函数，改变 this 执行，比如:


```js
function add(a, b){
  return a + b
}
```

假设有个场景参数是以数组的形式传递过来，传统的做法是：


```js
const args = [11, 12]
add.apply(null, args)
```

或者

```js
const args = [11, 12]
add.call(null, args[0], args[1])
```

使用  Spread Operator 之后：

```js
const args = [11, 12]
add(...args)
```

babel 编译后的结果：

```js
function add(a, b) {
  return a + b;
}
var args = [11, 12];
add.apply(undefined, args);
```

常见的场景还有：

```js
const arr = [1, 2, 3, 4, 5]
Math.min(...arr)  //求最小值
Math.max(...arr)  //求最大值
```

babel 编译后的结果:

```js
var arr = [1, 2, 3, 4, 5];
Math.min.apply(Math, arr); //求最小值
Math.max.apply(Math, arr); //求最大值
```

因为 Math.min 和 Math.max 参数个数是不限制的，所以这种场景非常适合使用  Spread Operator 。

### 合并数组

先看下 array push 的语法:

```js
array.push(item1, item2, ...., item3)
```

可以看到 push 接收的参数也是不定，所以可以利用其实现合并数组功能:

```js
arr1.push(...arr2)
```

或者合并到前方：

```js
arr1.unshift(...arr2)
```

也可以直接声明式合并:

```js
const arr1 = [2, 3]
const arr2 = [1, ...arr1, 4]  //arr2 相当于 [1, 2, 3, 4]
```

在比如:

```js
const a = [1, 2]
a.push(...[3, 4, 5])   //[1,2,3,4,5]
```

babel 编译后:

```js
var a = [1, 2];
a.push.apply(a, [3, 4, 5]);
```

### 把 arguments 或 NodeList 转成数组

```js
[...document.querySelectorAll('div')]
```

bebel 编译后:

```js
function _toConsumableArray(arr) { 
  if (Array.isArray(arr)) { 
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { 
      arr2[i] = arr[i]; 
    } 
    return arr2; 
  } else { 
    return Array.from(arr); 
  } 
}

[].concat(_toConsumableArray(document.querySelectorAll('div')));
```

直接把 arguments 转成数组：

```js
var myFn = function(...args) {
  console.log(args.forEach) //ƒ forEach() { [native code] }
  console.log(arguments.forEach) //undefined
}
myFn()
```

babel 编译后:

```js
var myFn = function myFn() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  console.log(args.forEach); //ƒ forEach() { [native code] }
  console.log(arguments.forEach); //undefined
};
myFn();
```

### 快速赋值

```js
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }
```

babel 编译后:

```js
function _objectWithoutProperties(obj, keys) { 
  var target = {};
   for (var i in obj) { 
     if (keys.indexOf(i) >= 0) continue; 
     if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; 
     target[i] = obj[i];
  } 
  return target;
}

var _x$y$a$b = { x: 1, y: 2, a: 3, b: 4 },
    x = _x$y$a$b.x,
    y = _x$y$a$b.y,
    z = _objectWithoutProperties(_x$y$a$b, ["x", "y"]);
```

### Spread 实战


[react use](https://github.com/streamich/react-use/blob/master/src/useList.ts#L15-L17) 和 [omi use](https://github.com/Tencent/omi/blob/master/docs/main-concepts.md#use)

```js
 return [list, {
    set,
    push: (entry) => set([...list, entry]),
    filter: (fn) => set(list.filter(fn)),
    sort: (fn?) => set([...list].sort(fn)),
  }];
};
```

```js
  <button onClick={() => setItems([...items, { text: 'new item' }])}>
    add
  </button>
  <button onClick={() => setItems([])}>empty</button>
```

当然我自身不喜欢这种方式定义组件，所以在 omio 中没有加入类似的功能。 

### Omi extractclass

```js
import { classNames, extractClass } from 'omi'

define('my-element', class extends WeElement {
  render(props) {
    //extractClass will take out this class/className from props and merge the other classNames to obj
    const cls = extractClass(props, 'o-my-class', {
      'other-class': true,
      'other-class-b': this.xxx === 1
    })

    return (
      <div {...cls} {...props}>
        Test
      </div>
    )
  }
})
```

extractClass 简直是写 UI 组件的神器，该方法会提取出 props 的 class 或者 className，并且进行类似 classNames 库的合并。最后通过扩展运算符增加到 JSX 上。

## 参考文档

* [Spread Operator](https://davidwalsh.name/spread-operator)