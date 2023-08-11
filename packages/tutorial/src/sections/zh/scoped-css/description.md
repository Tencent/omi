# 局部样式

这一节来学习为组件加上局部作用域的样式。

## 定义样式 

```tsx
static css = `span { color: #07c160 } `
```

你可以通过很简单的 CSS 选择器来选中元素，因为你的选择器只会作用域当前的元素，不会污染其他元素。

## :host 选择器

:host CSS 伪类选择包含其内部使用的 CSS 的 shadow DOM 的根元素。换句话说，这允许你从其 shadow DOM 中选择一个自定义元素。因为 `hello-omi` 的标准的自定义元素，可以通过 `:host` 选中，通过 display 设置 inline-block、block、inline 等。

```css
:host {
  display: inline-block;
}
```

## :host() 选择器

CSS 伪类函数 :host() 选择包含使用这段 CSS 的 Shadow DOM 的影子宿主（这样就可以从 Shadow DOM 中选择包括它的自定义元素）——但前提是该函数的参数与选择的阴影宿主相匹配。
最简单的用法是仅将类名放在某些自定义元素实例上，然后将相关的类选择器作为函数参数包含在内。不能将它与后代选择器表达式一起使用，以仅选择特定祖先内部的自定义元素的实例。

```css
/* 选择阴影根元素，仅当它与选择器参数匹配 */
 :host(.special-custom-element) {
   font-weight: bold;
 }
 ```

下面举一个 omiu 的 o-button 的例子:

```css
:host {
  display: inline-block;
}

:host([block]) {
  display: block;
}
```

当 button 拥有 block attr 的时候，`:host([block])` 就命中生效了:

```html
<o-button block></o-button>
```

恭喜你学习了为组件定义局部样式！