[English Repo Link](https://github.com/praveenpuglia/shadow-dom-in-depth/blob/master/README.md)

# 深入浅出 Shadow DOM

> 打起精神了~  本文讲述的是关于Shadow DOM V1规范那些事儿！

这篇文档是大家共享的。我很高兴它能帮助到大家。为了做的更好，我把这篇文档从 [the original gist](https://gist.github.com/praveenpuglia/0832da687ed5a5d7a0907046c9ef1813) 迁移到这个项目中，这样大家就可以共同维护并提高他的质量啦。

如果你在这里发现你喜欢的内容，请有创意的新开一个 issue ，以便我们能够用更多的相关资料来丰富这篇文档。比如通过提交issues来提供一些示例，图像，专业术语等。让我们每个人都爱上这个平台 :)

## 在哪里更新？

* 例子。 我不断地在添加一些示例来方便让每个人能更好的去理解，日积月累的资料都在 [文件夹里](./examples)

如果你阅读到任何关于自定义元素的知识的文档，并且它和这个项目一样对你有帮助。请告诉我，我将汇总在这个项目里 👨‍💻。


## 浏览器支持情况

* Chrome : 支持
* Firefox : 支持
* Opera : 支持
* Safari : 大部分支持(polyfill支持)
* Edge :  暂不支持(polyfill支持)

您可以从这里查看全面的浏览器支持信息 - https://caniuse.com/#feat=shadowdomv1.

## 简介

简单地说，Shadow DOM 对 HTML & CSS 启用了局部作用域。

> Shadow DOM 修复了 CSS 和 DOM。它在网络平台中引入作用域样式。 无需工具或命名约定，您即可使用原生 JavaScript 捆绑 CSS 和标记、隐藏实现详情以及编写独立的组件。 - https://developers.google.com/web/fundamentals/getting-started/primers/shadowdom

Shadow DOM 有属于自己的一个小世界，他和外界很难相互影响。

Shadow DOM 是你作为一个 **组件创建者**，抽象出来的组件的实现细节。他也可以决定如何处理用户提供的 **light DOM**.

## 专业术语

**- DOM :** 我们通过有线(或者无线网络:|)得到一个文本字符串。为了在屏幕上渲染一些东西来，浏览器就要去解析这个文本字符串，并且浏览器为了能有更好的理解我们的文档，他会把解析后的结果转换到数据模型中。与此同时，浏览器还通过在树结构中创建这些解析后的对象来保留原始字符串的层次结构。

我们需要做的是让机器更容易地读懂我们的文档。这个我们文档的数据模型树被称为: 文档对象模型(DOM)

**- Component Author :** 指的是那些创建了组件并且定义了组件应该如何运行的编者们。一般来说是写了很多 shadow DOM 代码的编写者。比如 - 创造了 `input` 元素的浏览器供应商

**- Component User :** 指的是使用那些组件的开发者们。他们可以使用 `Light DOM` 并且在组件上进行定义一些属性，他们甚至可以根据自己的需求来扩展组件的内部结构。比如 - 使用 `input` 元素的我们。

**- Shadow Root:** 他通过自己的shadow DOM和一个元素建立联系。从技术上来说，它是一种非元素节点，是一种特殊的 `文档碎片`

```html
<custom-picture>
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ISOLATION
    #shadow-root
        ...
    ____________________________________________ DOCUMENT FRAGMENT

    <!--LIGHT DOM-->
</custom-picture>
```

在上面的代码中，我在奇怪的 ASCII 里面添加了一个 shadow root。这样有助于我们思考Shadow Root 在文档里的表现形式，他们是在“围墙”里的文档碎片。

**- Shadow Host:** 这是shadow root 附加的宿主元素。这个宿主可以和他的shadow root通过自身的属性 `.shadowRoot` 进行关联。

**- Shadow Tree :** 包含Shadow Root里面所有的元素，形成了自己的作用域，被称为(影子树)Shadow Tree。

> The elements in a shadow tree are **not** descendants of the shadow host in general (including for the purposes of Selectors like the descendant combinator) - Spec

**- Light DOM:** - 我们可以在开始标记和结束标记之间来放置一组DOM元素。DOM是在shadow DOM之外的元素，是用户写入的元素，是实际元素的子节点。

```html
<custom-picture>
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^
    #shadow-root
    ___________________________

    <!--Light DOM-->
    <img src="https://path.to/a-kitten.png">
    <cite>A Nice Kitten!</cite>
    <!--Light DOM ends-->
</custom-picture>
```

**- 文档碎片:**

> 接口表示一个没有父级文件的最小文档对象。它被当做一个轻量版的 Document 使用，用于存储已排好版的或尚未打理好格式的XML片段。最大的区别是因为DocumentFragment不是真实DOM树的一部分，它的变化不会引起DOM树的重新渲染的操作(reflow) ，且不会导致性能等问题。 - [MDN](https://developer.mozilla.org/en/docs/Web/API/DocumentFragment)

## 如何创建 Shadow DOM?

```html
<div class="dom"></div>
```

```js
let el = document.querySelector('.dom');
el.attachShadow({ mode: 'open' });
// Just like prototype & constructor bi-directional references, we have...
el.shadowRoot; // the shadow root.
el.shadowRoot.host; // the element itself.

// put something in shadow DOM
el.shadowRoot.innerHTML = 'Hi I am shadowed!';

// Like any other normal DOM operation.
let hello = document.createElement('span');
hello.textContent = 'Hi I am shadowed but wrapped in span';
el.shadowRoot.appendChild(hello);
```

### Q&&A - 我们能否使用 `append()` 来取代 `“appendChild()` ?

当然可以！但是在 MDN文档里，这两种方法有一些区别。

* `ParentNode.append()` 允许你添加 DOMString 对象；然而 `Node.appendChild()` 仅仅接受Node对象
* `ParentNode.append()` 没有返回值； 然而` Node.appendChild()` 返回添加的 Node 对象.
* `ParentNode.append()` 可以添加多个节点和字符串；然而 `Node.appendChild()`只能添加一个 node 节点

### 如果我们使用 `input` 元素而不是 `div` 元素关联 `shadow DOM`，会怎样？

好吧，这并没有什么作用。因为浏览器早已设定为这些元素设定好了他们的shadow DOM。当你这样做之后，浏览器控制条会飘出一串红色的英文字母。😰

## 笔记 & 提示

* Shadow DOM，一旦被创建就不会被移除。但是他会被一个新的替换掉。
* 如果你在创建一个自定义元素，你应该在这个自定义元素的构造函数里创建一个shadowRoot。这应该是称之为 `connectedCallback()` ，但是我不太确定这样是否会导致性能问题或者其他位置的问题。 🤷‍♂️
* 想要观察下浏览器是如何为像 `input` 或者 `textarea` 这类的元素实现 `shadow DOM` 的, 可以 `DevTools > Settings > Elements > [x] Show user agent shadow DOM`.

## Shadow DOM 模式

### Open模式

你是否在上述 `attachShadow()` 方法里注意到 `{mode: "open"}` 配置？ `open` 模式提供了一种我们可以通过JavaScript来访问元素的shadow DOM的方式，这种模式也允许我们通过shadow DOM来访问宿主元素。

这是通过我们在 `open` 模式下使用 `attachShadow()` 时候创建的两个隐式属性来实现的。

1.  被创建元素获得了一个叫做 `shadowRoot` 的属性，该属性指向了shadow DOM；
2.  `shadowRoot` 获得了一个叫做 `host` 的属性，该属性指向该元素本身；

```js
// From the "How to create shadow DOM" example
el.attachShadow({ mode: 'open' });
// Just like prototype & constructor bi-directional references, we have...
el.shadowRoot; // the shadow root.
el.shadowRoot.host; // the el itself.
```

### Closed 模式

将 `{mode: "closed"}` 传递给 `attachShadow()`,来创建一个闭合的shadow DOM。该操作使得JavaScript无法访问shadow DOM。

```js
el.shadowRoot; // null
```

### 应该选择哪种模式?

几乎大部分场景下使用`open`模式的shadow DOMs ，因为这种模式可以让组件开发者和使用者能够按照他们的需求去做些事情。

还记得我们做过 `el.shadowRoot` 那部分么？在 `closed` 模式下，是不生效的。`closed` 模式使得元素不会有对本身shadow DOM的引用。当在创建一个元素并想要通过shadow DOM 进行一些操作时候，`closed` 模式会造成阻碍。

```js
class CustomPicture extends HTMLElement {
  constructor() {
    this.attachShadow({ mode: 'open' }); // this.shadowRoot exists. add or remove stuff in there using this ref.
    this.attachShadow({ mode: 'closed' }); // this.shadowRoot returns null. Bummer!
  }
}
// You could always do the following in your constructor.
// but it totally defies the purpose of using closed mode.
this._shadowRoot = this.attachShadow({ mode: 'closed' });
```

此外，封闭模式不是一种安全的机制。他只是给人一种虚假的安全感。没有人可以阻止其他人修改 `Element.prototype.attachShadow()`。

## Shadow DOM里的样式.

* 他们有作用域限制
* 他们不会溢出
* 他们有简单的名字
* 他们很酷 😎

```html
<custom-picture>
    #shadow-root
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        <style>
            /*Applies only to spans inside shadow DOM. Doesn't leak out.*/
            span {
                color: red;
            }
        </style>
        <span>Hello!</span>
        __________________________________________________________________
</custom-picture>
```

### 哇哦，我们可以使用样式表吗？

可以... 但并不是在所有浏览器都行得通。😕

```html
<custom-picture>
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    #shadow-root
        <!--All styles coming from custom-picture.css will be scoped inside this shadow root-->
        <link rel="stylesheet" href="custom-picture.css">
        <span>Hello!</span>
    _____________________________________________________
```

### 会受到全局样式的影响吗？

当然，在某些方面，只有某些继承的特性才会穿过shadow DOM 边界，比如：

* color
* background
* font-family etc.

`*` 选择器会耽误事儿。因为使用 `*` 代表着所有的元素，包含着你想要关联的shadow root元素、宿主元素。应用的宿主元素和继承的属性，会渗透shadow DOM的边界应用到内层元素上。

## 样式相关术语

* :host: 指向宿主元素。但是！

```css
/* winner */
custom-picture {
    background: red;
}
/* loser */
#shadow-root
    <style>
        :host {
            background: green;
        }
    </style>
```

* :host(`<selector>`): 组件 **host** 和 **selector** 是匹配的么？基本上是对同一个宿主的不同状态。举例如下：

```css
:host([disabled]) {
  ...;
}

:host(:focus) {
  ...;
}

:host(:focus) span {
  /*change all spans inside the element when the host has focus*/
}
```

* :host-context(`<selector>`): **host** 是 **selector** 选择器的后代元素么？让我们根据父元素的样式来改变组件的样式，一般应用在各种主题上。

```css
:host-context(.light-theme) {
  background: lightgray;
}

:host-context(.dark-theme) {
  background: darkgray;
}

/*You can also do...*/
:host-context(.aqua-theme) > * {
  color: aqua; /* lame */
}
```

### 关于 :host() 和 :host-context() 的笔记

两个伪类函数只能使用 `<compound-selector>` 复合选择器，不能使用空格或者‘>’或者'+'等组合符

对于 `:host()` 意味着你只能在宿主元素内部选择属性操作.

对于 `:host-context()` 意味着你能选择一个特定 `:host` 祖先的元素，只能选一个！

### 在 `attachShadow()` 中的模式会影响样式的应用或者层叠么？

不会的！仅仅影响我们的JavaScript的使用。

### 用户代理样式如何应用到 shadow DOM 元素上？

基于shadow root或者普通的文档碎片，用户代理样式(全局)不应该应用到shadow root内的所有元素。所以，他们如何运行的呢？

根据专业文档...

> `Window`s gain a private slot `[[defaultElementStylesMap]]` which is a map of local names to stylesheets. This makes it possible to write elements inside shadow root and still get the default browser styles applied to them.

### 哪些样式可以放进shadow DOM ？

shadow DOM 中设定了默认样式，并通过 CSS 自定义属性提供钩子，这样组件用户就可以通过 CSS 自定义属性(也就是 CSS 变量)修改这些默认样式。

```html
<business-card>
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    #shadow-root
        <h1 class="card-title">Hardcoded Title - </h1>
    ---------------------------------------------------
</business-card>
```

```css
/*inside shadow DOM*/
.card-title {
  color: var(--card-title-color, #000);
}

/* Component users can then override this color as*/
business-card {
  --card-title-color: magenta;
}
```

### 阅读专业文档中的笔记

* 一个shadow host 是在他存在的宿主环境的 shadow tree之外的，因此通常不会被任何shadow tree的上下文选择器所命中(因为选择器受限于单个树) ，但是有时候能够在 shadow tree 上下文中创建样式是很有用的。
* 为了解决这个问题，shadow host被用来替代shadow root节点。
* 当考虑到本身的shadow trees时候，shadow host是没有任何特色的，只允许 `:host`, `:host()`, and `:host-context()` 伪类与之匹配。

## Shadow DOM中的事件

shadow DOM内部封装着一些事件。基本上，如果一个事件在shadow DOM内触发了，从外部来看，他就像由宿主元素本身触发，而不是来自shadow DOM的某个元素，这就是所谓的事件重新设定。

然而在shadow DOM的内部，事件并不会重新指向，我们可以找到事件发生和对应的元素。

如果我们把DOM树扁平化，就像这样..


```html
<body>
    <custom-picture>
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        #shadow-root
            <button> Hello </button>
        ---------------------------------
    </custom-picture>
</body>
```

在点击按钮、点击body元素或者自定义图片外面的任何区域，`event.target` 会指向`<custom-picture>`本身。


> 如果影子树属性设置为open, 调用 `event.composedPath()` 会返回该事件发生的所有节点组成的一个数组集.

然而在`<custom-picture>`内部，`event.target` 会指向它真正被点击的按钮元素上。

大多数事件会走出 shadow DOM 边界，而且当事件发生的时候，他们被阻碍了。有些事件不被允许穿过这个边界，没错，是这些...

* abort
* error
* select
* change
* load
* reset
* resize
* scroll
* selectstart

## 插槽(Slots)

在Shadow DOM里，Slots占着很大的比重。

> 在Shadow DOM里，Slots占着很大的比重。 - https://developers.google.com/web/fundamentals/getting-started/primers/shadowdom#slots

在创建自定义组件时候，我们希望能够提供进入特定组件唯一的标记，我们想要和组件开发者一样使用/group/style。

组件用户提供的DOM称之为`light DOM`，`slots` 提供了一种我们能够随意调整标记的方式。根据不同的使用场景来组织这些样式。

插槽有两个方面的内容。

* **Light DOM Elements :** 插槽入口

```html
<custom-picture>
    <!--Light DOM <img> saying it should be put into the "profile-picture" slot-->
    <img src="assets/user.svg" slot="profile-picture">
</custom-picture>
```

* **The Actual Slot :** `<slot>` 元素, 存在shadow DOM内部，可以通过一个属性名被Light DOM 找到。

```html
<custom-picture>
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    #shadow-root
        <slot name="profile-picture">
            <!--The <img> from the light DOM gets rendered here!-->
        </slot>
    _________________________________________
```

### 划重点啦: Light DOM 和 slots是如何在一起工作的。

> 如果 <slot> 引入了该元素，则这些元素可“跨越” shadow DOM 的边界。 这些元素称为分布式节点。从概念上来看，分布式节点似乎有点奇怪。 Slot 实际上并不移动 DOM；它们在 shadow DOM 内部的其他位置进行渲染。 - https://developers.google.com/web/fundamentals/getting-started/primers/shadowdom#slots

### 如果我不给 `<custom-picture>` 中的`<img>` 元素添加‘slot’属性会怎样呢？

没有东西会被渲染出来的，为什么呢？

1. 一个包含有shadow DOM的宿主元素，仅仅渲染位于 shadow DOM里面的内容
2. 为了渲染 Light DOM 元素，需要把它变成为 shadow DOM的一部分
3. 我们把light DOM 元素放进slots是为了让他们成为 shadow DOM的一部分
4. 在上述例子中，没有出现这样的元素，叫 `profile-picture` 的插槽
5. 因为没有这样的元素，所以Light DOM 的`<img>` 不会被渲染
6. 被命名的插槽仅容纳那些指定它们要进入特定槽的Light DOM元素

### 如果我想要渲染所有的元素，但不指明元素应该显示在哪里，怎么做？

这就需要我们在shadow DOM有这样一个通用的没有名字的插槽。例如-

```html
<custom-picture>
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    #shadow-root
        <!--General purpose slot, render every element from light DOM that doesn't mention a slot name, here.-->
        <slot>
            <!--The <img> from the light DOM gets rendered here!-->
        </slot>
    _________________________________________
    <!--Light DOM-->
    <img src="assets/user.svg">
</custom-picture>
```

### 如果我添加了两个未命名插槽呢？

Woah! 😲

事实上，我们可以拥有多个未命名插槽，甚至是已命名插槽，但是这些命名基本没什么用处。Llight DOM元素会匹配第一个slot。

```html
<custom-picture>
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    #shadow-root
        <slot>
            <!--The <img> from the light DOM gets rendered here! Winner!-->
        </slot>
        <slot>
            <!--Doesn't come here!-->
        </slot>
    _________________________________________
    <!--Light DOM-->
    <img src="assets/user.svg">
</custom-picture>
```

### 如果存在一个没有 Light DOM 元素匹配的插槽呢？

不会渲染任何元素的，除非插槽提供一个回退内容，然后这样应该怎么实现呢？

```html
#shadow-root
    <slot name="nobody-comes-here">
        <h1> I'll show up when noone does!</h1>
    </slot>

    <style>
        /* And that fallback can be styled from within the shadow DOM just like we do styles*/
        slot[name="nobody-comes-here"] h1{
            color: #bada55;
        }
    </style>
```

### 什么是插槽元件，我们如何给他们添加样式？

这类插槽元素可以使用 `::slotted()` 函数性伪类元素设置样式，语法如下。

```css
::slotted(<compound-selector >) {
  /* styles */
}
```

Example -

```html
<custom-picture>
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    #shadow-root
        <slot>
            <!--The <img> from the light DOM gets rendered here!-->
        </slot>

        <style>
            /* find the slotted image and set their width and height */
            ::slotted(img) {
                width: 256px;
                height: 256px;
            }
        </style>
    _________________________________________
    <!--Light DOM-->
    <img src="assets/user.svg">
</custom-picture>
```

这是文档中的相关定义

> The ::slotted() pseudo-element represents the elements assigned, after flattening, to a slot. This pseudo-element only exists on slots.

扁平化树结构参考 [here](https://developers.google.com/web/fundamentals/getting-started/primers/shadowdom#lightdom).

需要记住的一件重要的事是： 仅仅是宿主元素的第一子元素才可以分配给一个插槽，例如

```html
<custom-picture>
    <div class="picture-wrapper">
        <!--This won't work! Slots can't pick descendants out of the host element's light DOM tree and put them in.-->
        <img src="assets/user.svg" slot="assign-me" />
    </div>
</custom-picture>
```

I, 然而，我不知道(译者注:别的子元素为什么不可以分配给插槽)以及背后的原理是什么。所以我提了一个bug： [this bug](https://github.com/w3c/csswg-drafts/issues/1530);

### 如何向下传递 Light DOM元素呢？

这听起来好像我们不需要考虑这种情况，但是这经常是必要的。

```html
<parent-element>
    <!--parent-element uses child-element in it's shadow DOM and we want this span to render inside that child-element's shadow DOM-->
    <span slot="parent-slot">Finally</span>
</parent-element>
```

这是我们创建的自定义元素：

```js
class ParentElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
        <!--We specify a slot property on the slot itself. Which specifies where it goes in the child-element's shadow DOM-->
        <child-element>
            <slot name="parent-slot" slot="child-slot"></slot>
        </child-element>
    `;
  }
}

class ChildElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <slot name="child-slot">
        <!--The span with the thext "Finally" gets rendered here!-->
      </slot>
    `;
  }
}

window.customElements.define('parent-element', ParentElement);
window.customElements.define('child-element', ChildElement);
```

### 插槽也提供了JavaScript API

* 找出插槽中的元素 - [`slot.assignedNodes()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/assignedNodes);
* 找出某个Light DOM被赋值到哪个插槽 - [`element.assignedSlot`](https://developer.mozilla.org/en-US/docs/Web/API/Element/assignedSlot);

## 资源

* http://robdodson.me/shadow-dom-css-cheat-sheet/
* https://developers.google.com/web/fundamentals/getting-started/primers/shadowdom
* https://drafts.csswg.org/css-scoping/

## 更多的查询 & bugs

* https://stackoverflow.com/questions/44564366/inheritance-inside-a-shadow-dom-slot
* https://github.com/w3c/csswg-drafts/issues/1535
* https://github.com/w3c/csswg-drafts/issues/1530
* https://twitter.com/praveenpuglia/status/876677801146896384
