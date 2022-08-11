# Transition

In this section, we mainly discuss the transition effect of Omi.

When inserting, updating, or removing DOM, it provides application transition effects in many different ways. Omiu provides a built-in transition packaging component 'o-transition', which is used to wrap the components to achieve the transition effect.

## Usage

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

Where `fade` is a user-defined name, you can take any name, corresponding to the name of `o-transition`:


```tsx
<o-transition  name="fade"></o-transition>
```

* fade-enter-from: defines the start state of entering the transition
* fade-enter-active: defines the state when the transition takes effect and is removed after the transition animation is completed
* fade-enter-to: define the end state of entering the transition, and remove it after the transition animation is completed
* fade-leave-from: define the start state of leaving the transition
* fade-leave-active: defines the state when leaving the transition takes effect
* fade-leave-to: define the end state of leaving the transition, and remove it after the transition animation is completed

![](https://gtimg.wechatpay.cn/resource/xres/img/202208/2494dd9ecc01582e53a0d22d085fd932_1468x346.png)

## Source code

[→ @omiu/transition](https://github.com/Tencent/omi/blob/master/components/transition/src/index.tsx)


