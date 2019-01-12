## Toast 

Simple reminder notification.

## Usage

```js
<o-toast type='success' show={true}>支付成功</o-toast>
<o-toast type='loading' show={false}>加载中</o-toast>
```

You can also use methods of toast:

```js
import toast from 'omiu/toast'

//show
toast.showLoading()
//hide
toast.hideLoading()
//Support for custom text
toast.showLoading('In request...')
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| show  | bool | false  |  |
| type  | string | -- |Options: loading, success|


