## 为什么我们写 super(props)?

突然看到 dan 的第一篇 blog，解释为什么 react 需要写 `super(props)`,为后面 hooks 不需要 super 和 this 作铺垫。
本文也会对比下 [Omi 框架](https://github.com/Tencent/omi), 解释下 Omi 为什么从一开始就不需要写 `constructor` 和 `super`, 更不需要传递 `props`, 使用 install 足够,而且 install 里可以直接使用 `this.props`。

[原文地址](https://overreacted.io/why-do-we-write-super-props/)

我听说 Hooks 最近很火热。具有讽刺意味的是，我想通过描述关于类组件的有趣事实来开始这个博客。怎么样？

这些 gotchas 对于使用 React 并不重要。但如果你喜欢深入研究事物是如何运作的，你可能会发现它们的有趣之处。

这是第一个。

----


```js
class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: true };
  }
  // ...
}
```

 当然你可以是用 [class fields proposal](https://github.com/tc39/proposal-class-fields) 

```js
class Checkbox extends React.Component {
  state = { isOn: true };
  // ...
}
```

当React 0.13在2015年增加了对普通类的支持时，就计划使用这样的语法。定义构造函数和调用`super(props)`始终是临时解决方案，直到类字段提供了替代方案。

但是让我们回到这个例子，只使用 ES2015 特性：

```js
class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: true };
  }
  // ...
}
```

为什么要调用 super，可以不调用它吗？如果我们必须调用它，我们不传 props 会发生什么？还有其他参数吗？接着往下看:

-----

在JavaScript中，super 指向父类构造函数。（在我们的例子中，它指向了` React.Component` ）。


重要的是，在调用父构造函数之后，才能在构造函数中使用 this。

```js
class Checkbox extends React.Component {
  constructor(props) {
    // 🔴 Can’t use `this` yet
    super(props);
    // ✅ Now it’s okay though
    this.state = { isOn: true };
  }
  // ...
}
```

在触及这个之前，JavaScript强制父构造函数运行是有原因的。考虑类层次结构：

```js
class Person {
  constructor(name) {
    this.name = name;
  }
}

class PolitePerson extends Person {
  constructor(name) {
    this.greetColleagues(); // 🔴 这是不允许的，为什么请往下看
    super(name);
  }
  greetColleagues() {
    alert('Good morning folks!');
  }
}
```

想象一下如果 super 之前可以使用 this。一个月后，我们可能会更改 `greetColleagues`，在消息中包括此人的姓名：

```js
greetColleagues() {
  alert('Good morning folks!');
  alert('My name is ' + this.name + ', nice to meet you!');
}
```

这样的话，调用就出错了，调用 greetColleagues 的时候 this.name 从未定义。

所以js规定使用this之前必须调用 super,在react当中：

```js
constructor(props) {
  super(props);
  // ✅ Okay to use `this` now
  this.state = { isOn: true };
}
```

那么，只剩下为什么传 `props`

-------

您可能认为将 props 传递到super是必要的，以便 React.Component 构造函数可以初始化 this.props：


```js
// Inside React
class Component {
  constructor(props) {
    this.props = props;
    // ...
  }
}
```

这离真相不远——事实上，[这就是它所做的](https://github.com/facebook/react/blob/1d25aa5787d4e19704c049c3cfa985d3b5190e0d/packages/react/src/ReactBaseClasses.js#L22)。

但即使调用 super() 时没有 props 参数，您仍然可以在 render 和其他方法中访问 this.props。（如果你不相信我，你自己试试！）

怎么做到的？答案如下:

```js
// Inside React
const instance = new YourComponent(props);
instance.props = props;
```

所以，即使你忘记把道具传给super()，React 仍然会在事后正确设置。这是有原因的。

这是否意味着你可以只写 super() 而不写 super(props)？



可能不是因为它仍然令人困惑。当然，在构造函数运行之后，React 会设置 props 。但是，在 super 和构造函数的末尾之间，仍然没有定义 this.props：

```js
// Inside React
class Component {
  constructor(props) {
    this.props = props;
    // ...
  }
}

// Inside your code
class Button extends React.Component {
  constructor(props) {
    super(); // 😬 We forgot to pass props
    console.log(props);      // ✅ {}
    console.log(this.props); // 😬 undefined 
  }
  // ...
}
```

如果这种情况发生在从构造函数调用的一些方法中，那么调试带来疑惑。这就是为什么我建议总是 super(props)，即使它不是严格必要的：

```js
class Button extends React.Component {
  constructor(props) {
    super(props); // ✅ We passed props
    console.log(props);      // ✅ {}
    console.log(this.props); // ✅ {}
  }
  // ...
}
```

您可能已经注意到，当在类中使用Context API时（React 16.6中添加的 Context API），Context 作为第二个参数传递给构造函数。

那么我们为什么不写 `super(props, context)` 替代， 但是 context 很少被使用，所以这个困扰就没有那么多了。


随着 class fields proposal 的应用，没有 constructor, 所有参数会自动传递下去. 

使用 Hooks, 我们甚至不需要 super 和 this，这是另一个话题。



### 译者扩展


在 Omi 框架的源码中, 常用的两个类有 `WeElement` 和 `ModelView`。

```js
class WeElement extends HTMLElement {
  constructor() {
    super()
    ...
  }
}
```

```js
class ModelView extends WeElement {
  static observe = true

  beforeInstall() {
    this.data = this.vm.data
  }

  observed() {
    this.vm.data = this.data
  }
}
```

类的构造函数 constructor 总是先调用 super() 来建立正确的原型链继承关系。HTMLElement 继承自父接口 Element 和 GlobalEventHandlers 的属性,所以一些节点增删改查的操作以及时间监听和绑定都是通过 super 建立起来。 

对 Omi 框架的使用者，完全不需要 constructor、super等。props 和 data 以及 store 都会在内部注入进去。而且是在生命周期勾子 install 之前就注入了，所以你可以在 install 的时候使用 this.props this.data 甚至 this.store(如果从根节点注入了 store 的话)。