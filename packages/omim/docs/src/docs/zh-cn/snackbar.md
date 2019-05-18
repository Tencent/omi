## Snackbar 

Snackbar 在屏幕底部提供关于应用程序进程的简短消息。

## 使用

```html
<m-snackbar id="m-snackbar-a" button-text="RETRY" msg="Can't send photo. Retry in 5 seconds."></m-snackbar>
<m-snackbar id="m-snackbar-b" button-text="UNDO" msg="Your photo has been archived." leading></m-snackbar>
<m-snackbar id="m-snackbar-c" stacked msg='This item already has the label "travel". You can add a new label.' button-text="ADD A NEW LABEL"></m-snackbar>
```

## API

### Props

```jsx
{
  show?: boolean,
  stacked?: boolean,
  msg: string,
  buttonText?: string,
  leading?: boolean
}
```