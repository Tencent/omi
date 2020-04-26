## 文档解释

如果熟悉 TypeScript，就可以很容易理解文档中的这些部分:

* Props
* defaultProps
* Events

下面举例说明。

## Props

> 所有属性、类型和可选值

```tsx
{
  //控件的尺寸
  size?: 'medium' | 'small' | 'mini';
  //字体的颜色
  color: string;
  plain?: boolean;
}
```

* `:` 前面的属性名，`:` 后面是类型或者可选值
* `|` 分隔代表了可选的默认值
* 注释代表属性的描述说明
* 带有`?`的代表非必填

## defaultProps 

> 代表属性的默认值

```tsx
{
  size: 'medium' 
}
```

不是所有属性都需要有默认值。

## Events

> 组件支持的事件，属于 `CustomEvent`，所以可以从 `event.detail` 获取组件传递给事件监听器的数据。

* change - 文本改变触发，event.detail 类型声明:
```tsx
{
  value: string
}
```
