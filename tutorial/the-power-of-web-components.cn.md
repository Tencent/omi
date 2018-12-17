## 背景

从有具有光标跟踪的动态页面和“网站周刊”徽章出现在网络世界以来，可重用代码一直让前端开发垂涎。也是从那开始，将第三方UI引入你的网站都是让人头疼的问题。

当使用其他人所撰写的精妙代码时，被引入的某些模版JS或者CSS可能会使用恐怖的`!important`。在React或者其它现代化框架环境下，情况可能会好一点，但仅仅为了一个可重用的组件而去引入一个完整的框架，其开销似乎有点大。虽然HTML5引入一些新的在web平台急需且常用的元素，如`<video>`和`<input type="date">`。但为所有常见的UI模式添加标准元素并不符合可持续发展的方针。

为了解决这些问题，一些WEB规范被提出了。每个规范都自己独特的用处，而当它们组合起来的时候，一些以前不可能原生实现事情成为可能：创建用户自定义HTML元素并且能和原生HTML一同解析。这些元素甚至能像视频播放器的控件那样，对使用者隐藏复杂的内部逻辑。

## 规范的进化史

这一系列被称作为[Web Components](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)的规范。在2018年Web Components已经可被称为旧新闻了，早在2014年，早期的规范版本已经以某种形式存在于Chrome中了，同时各种笨拙的polyfills实现也填补了其它浏览器的空白。

过了一段时间后，标准委员会将Web Components标准从早期形式（现在称为版本0）改进为更成熟的版本1，该版本在所有主流浏览器中实现。只从Firefox 63添加个两个支柱型标准的支持，Custom Elements和Shadow DOM，我觉得是时候看看我们使用HTML创造者的能力能如何玩耍了。

鉴于Web Components已经存在了一段时间，还有许多其他资源可用。 本文旨在作为入门读物，介绍一系列新功能和资源。 如果您想更深入（并且您确实应该），那么您最好阅读有关[MDN Web Docs](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)和[Google Developers](https://developers.google.com/web/fundamentals/web-components/)网站上的Web Components的更多信息。

自定义HTML元素需要浏览器使用以前没有为开发人员提供的新功能。我将在每个部分中指出这些以前不可能实现的地方，以及他们使用的其他更新的Web技术。

## `<template>`

这第一个元素不像其它点那么新，我们需要它来提前定义好Web Components。有时候你只需要存储某些HTML，可能是一些需要多次使用的装饰，或者一些不需要立即创建的UI。`<template>`可以接收并解析HTML，但不会将解析后的DOM添加到当前文档(document)中。

```html
<template>
  <h1>This won't display!</h1>
  <script>alert("this won't alert!");</script>
</template>
```

那如果不在当前文档中，这些解析后的HTML到哪去了呢？答案是被添加到“文档片段(document fragment)”，可以理解为一个轻量的包含一部分HTML的容器。而当文档片段被加入其它DOM中时，它便会消失。所以它可以用于保存一些不需要立即使用的元素。

“好吧，那我的DOM在一个会消失的容器里，我需要的时候我要怎么用呢？”

用下面的代码，你可以很简单的将文档片段里面的内容插入当前文档：

```javascript
let template = document.querySelector('template');
document.body.appendChild(template.content);
```

但是以上代码只能执行一次，因为第二次执行时文档片段消失了`template.content`也将不再存在。你可以用下面的方法先复制一份文档片段再插入文档中：

```javascript
document.body.appendChild(template.content.cloneNode(true));
```

`cloneNode`正如其名，同时可以传入参数指定只克隆传入元素本身或者连同它包含的所有子元素一起克隆。

选择使用template标签来重复HTML结构是一个不错的决定。因此`<template>`被引入Web Components俱乐部，用于定义组件的内部结构。

**新能力**

+ 一个能保持HTML但不添加到当前文档的标签

**相关主题**

+ [Document Fragments](https://developer.mozilla.org/zh-CN/docs/Web/API/DocumentFragment)
+ 使用`cloneNode`[复制DOM元素](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/cloneNode)

## 自定义元素(Custom Elements)

*自定义元素*是Web Components标准的典型代表。正如其名，开发者可以通过它定义自己的HTML元素。只是想要优雅的使用它来构建项目，使用ES6的类语法还是有必要的，尽管v0的语法还有些笨重。如果过你熟悉JS或其他语言的[类语法](https://hacks.mozilla.org/2015/07/es6-in-depth-classes/)，你可以想这样继承或者扩展(extend)其它的类：

```javascript
class MyClass extends BaseClass {
// class definition goes here
}
```

那如果我们这样做会有什么效果？

```javascript
class MyElement extends HTMLElement {}
```

以前像这样做你会得到一个错误，浏览器不支持内置的`HTMLElement`类与其子类被继承。自定义元素现在将这个限制放开了。

浏览器知道`<p>`标签是对应到`HTMLParagraphElement`类的，那浏览器如何知道一个自定义的元素应该对应到那个类上呢？如果想要扩展内置的类，你还需要按以下"注册自定义类"的操作去指明类与标签的对应关系：

```javascript
customElements.define('my-element', MyElement);
```

自此，页面上每个`<my-element>`标签都与一个新的`MyElement`实例相关联。每当浏览器解析`<my-element>`标签的时候都会接受到`MyElement`的构造函数。

为什么标签名中有破折号(-)？为了让未来的标准可以无障碍的定义新的HTML标签，出于防止开发者自定义的类似`<h7>`或`<vr>`这样的未来可能会与标准冲突的标签的目的，所有的自定义标签名都需要包含破折号，同时标准也保证行的HTML标签名绝不会包含破折号。天下太平！

除了在创建自定义元素时调用构造函数之外，在不同时刻还有其他“生命周期”方法会被调用：

+ `connectedCallback`会在元素添加到文档后被调用。如果元素被移动或者删除后重新添加，则可能会被调用多次。

+ `disconnectedCallback`从文档中被移除后调用，与`connectedCallback`对应。

+ `attributeChangeCallback`当处于白名单中的属性被修改后调用。

以下是个稍微丰富的示例：

```javascript
class GreetingElement extends HTMLElement {
  constructor() {
    super();
    this._name = 'Stranger';
  }
  connectedCallback() {
    this.addEventListener('click', e => alert(`Hello, ${this._name}!`));
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === 'name') {
      if (newValue) {
        this._name = newValue;
      } else {
        this._name = 'Stranger';
      }
    }
  }
}
GreetingElement.observedAttributes = ['name'];
customElements.define('hey-there', GreetingElement);
```

在页面上使用是下面演示的样子：

```html
<hey-there>Greeting</hey-there>
<hey-there name="Potch">Personalized Greeting</hey-there>
```

那我们怎么继承一个现有的HTML元素呢？你确实需要且应该这样做，只是这样做与之前的稍有不同。假设我们希望我们的刚刚自定义的标签成为一个按钮：

```javascript
class GreetingElement extends HTMLButtonElement
```

同时我们也需要在注册时说明我们需要继承一个已有的标签：

```javascript
customElements.define('hey-there', GreetingElement, { extends: 'button' });
```

由于我们是继承了一个现有的标签，被继承的那个标签名才是我们改使用的，而不是我们自定义的那个标签名。同时，我们需要使用`is`属性来告知浏览器*哪种类型*按钮是我们需要的：

```html
<button is="hey-there" name="World">Howdy</button>
```

看起来是有的笨重，但没这些特殊的写法的话，辅助程序和其它脚本是无法知道我们的自定义元素其实是个按钮。

到这之后，所有经典的web标签技术都可以使用。我们可以设置一堆事件监听、添加自定义样式甚至使用`<template>`标记内部结构。大家可以通过HTML标签、DOM调用或者一些新奇的的框架(如通过在其虚拟DOM中实现自定义标签)，在自己的代码里使用你的自定义元素。由于都是使用的标准DOM接口，自定义标签是真正的可移植组件。

**新能力**

+ 继承原生`HTMLElement`类或其子类的能力
+ 通过`customElements.define()`注册自定义标签
+ 通过生命周期函数知晓元素的建立、插入DOM及属性改变等事件

**相关主题**

+ [ES6的类](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes)尤其是[使用`extends`继承](https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/)

## 影子DOM(Shadow DOM)

我们已经制作了友好的自定义元素，甚至抛出了一些时髦的样式。现在我们希望在我们所有的网站上使用它，并与他人共享代码，以便他们可以在他们的网站上使用它。当我们自定义的`<button>`在其他网站的CSS运行时，我们该如何防止噩梦般的冲突？Shadow DOM为我们提供了一个解决方案。

Shadow DOM标准引入了*shadow root*的概念。从表面上看，shadow root有标准的DOM方法，并且可以附加到任何其他DOM节点。shadow root不会出现在他们父节点的文档中：

```javascript
// attachShadow创建一个shadow root.
let shadow = div.attachShadow({ mode: 'open' });
let inner = document.createElement('b');
inner.appendChild(document.createTextNode('Hiding in the shadows'));
// 可以使用appendChild来添加shadow root
shadow.appendChild(inner);
div.querySelector('b'); // empty
```

在上面例子中，`<div>`包含了`<b>`同时`<b>`被渲染到页面上，但传统的DOM方法不能发现它。不止如此，页面包含的样式也不能看见它。这样，shadow root外部的样式不会影响它内部的元素，同时它*内部*的样式不会波及到外部。但是注意，这个边界并不是安全的，页面上其它的脚本可以检测到shadow root的创建，你有shadow root的引用时也能直接查询他的内容。

通过添加`<style>`或`<link>`来给shadow root添加样式：

```javascript
let style = document.createElement('style');
style.innerText = 'b { font-weight: bolder; color: red; }';
shadowRoot.appendChild(style);
let inner = document.createElement('b');
inner.innerHTML = "I'm bolder in the shadows";
shadowRoot.appendChild(inner);
```

哇，现在可以尽情使用`<template>`了！无论什么方式，只有shadow root中`<b>`都会受到shadow root中样式的影响，外部的`<b>`标签则不会。

如果自定义元素具有非阴影内容，该怎么办？我们可以使用一个名为`<slot>`的新特殊元素让它们很好地协同工作：

```html
<template>
  Hello, <slot></slot>!
</template>
```

如果以下代码模版被附加到shadow root：

```html
<hey-there>World</hey-there>
```

则会显示为：

```
Hello, World!
```

这种shadow root与不是shadow root可结合使用的能力，可以让我们能创造具有丰富内部结构的自定义元素，同时这样元素在外部看来是非常简洁的。插槽(slot)的功能远比我在这里展示的强大，多插槽(multiple slots)、具名插槽(named slots)与特殊的CSS伪类用于定位插槽内部元素，你可以阅读相关文章深入了解。


**新能力**

+ 类似隐藏的DOM结构"shadow root"
+ 创建和访问shadow root的DOM API
+ 使用shadow root限制样式作用域
+ 用于处理shadow root和限制作用域样式的CSS[伪类](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:host())
+ [`<slot>`标签](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_templates_and_slots)

## 集合所学

让我们来做个花哨的按钮吧！我们要创造一个`<fancy-button>`。它怎么花哨呢？它会有自定义的样式，而且还能加上图标看起来更酷。我们希望，无论在哪使用我们的按钮，它都会保持是一样的花哨，所以我们要把样式封装在shadow root中。

你可以在[这个链接](https://glitch.com/embed/#!/embed/fancy-button-demo?path=script.js&previewSize=35&sidebarCollapsed=true)里看到最终的自定义元素。注意JS中的自定义元素和HTML中的`<template>`样式和结构。

## 总结

构成Web Components标准的哲学是：使用所提供的多个低阶功能，同时将它们组合起来(不管是否为编写规范设计的使用方式)。现在，自定义元素让[在网页上构建VR内容](https://aframe.io/)更容易，也孵化了多个UI工具([polymer-project](https://www.polymer-project.org/),[vaadin](https://vaadin.com/))。尽管标准化的过程很长，但所承诺的新兴的能力会将更多权利交给创作者。现在这项技术在浏览器中已经实现，同时Web Components的未来也在掌握在你手中，你会用它构建一个怎样的世界？

## 关于[Potch](http://potch.me/)

本文原作者，Mozilla工程师。
