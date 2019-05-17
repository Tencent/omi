## Snackbar 

Snackbar 在屏幕底部提供关于应用程序进程的简短消息。

## 使用

```html
<m-snackbar id='snackbar1' button-text="RETRY" msg="Can't send photo. Retry in 5 seconds."></m-snackbar>
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