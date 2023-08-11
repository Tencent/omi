# Transition

本章节我们主要讨论 OMI 的过渡效果。

在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果。Omiu 提供了内置的过渡封装组件 `o-transition`，该组件用于包裹要实现过渡效果的组件。

## 原理解析

```tsx
static css = `
  .fade-leave-to,
  .fade-enter-from {
    opacity: 0;
    transform: translateX(15px);
  }

  .fade-leave-active,
  .fade-enter-active {
    transition: all 500ms ease-in;
  }`
```

其中 `fade` 为用户自定义的名称，你可以取任何名字，对应 `o-transition` 的 name:

```tsx
<o-transition  name="fade"></o-transition>
```

* fade-enter-from：定义进入过渡的开始状态
* fade-enter-active：定义进入过渡生效时的状态，在过渡动画完成之后移除
* fade-enter-to:  定义进入过渡的结束状态，在过渡动画完成之后移除
* fade-leave-from: 定义离开过渡的开始状态
* fade-leave-active：定义离开过渡生效时的状态
* fade-leave-to:  定义离开过渡的结束状态，在过渡动画完成之后移除

![](https://gtimg.wechatpay.cn/resource/xres/img/202208/2494dd9ecc01582e53a0d22d085fd932_1468x346.png)

## 源代码

[→ @omiu/transition](https://github.com/Tencent/omi/blob/master/components/transition/src/index.tsx)