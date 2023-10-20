## omi-transition

Define transition animation for entering and leaving.

<img src="https://gtimg.wechatpay.cn/resource/xres/img/202208/2494dd9ecc01582e53a0d22d085fd932_1468x346.png" width="700">

- fade-enter-from: defines the start state of entering the transition
- fade-enter-active: defines the state when the transition takes effect and is removed after the transition animation is completed
- fade-enter-to: define the end state of entering the transition, and remove it after the transition animation is completed
- fade-leave-from: define the start state of leaving the transition
- fade-leave-active: defines the state when leaving the transition takes effect
- fade-leave-to: define the end state of leaving the transition, and remove it after the transition animation is completed

## Install

```js
import 'omi-transition'
```


## Usage

```html
<o-transition></o-transition>
```

## API

### Props

```tsx
{
  name: string
  show?: boolean
  delay?: number
}
```

### Default Props

```tsx
{
  name: 'o',
  delay: 0
}
```
### Events

* before-enter
* after-enter
* enter
* before-leave
* after-leave
* leave


