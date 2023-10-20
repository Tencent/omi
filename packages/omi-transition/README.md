## Transition

Define transition animation for entering and leaving

## Import

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
  leaving?: number
  leavingTime?: number
  autoRemove?: boolean
  appear?: boolean
  disappear?: boolean
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


### Usage

