## Checkbox

复选框允许用户从一组中选择一个或多个项目。

## 使用 （Omi 中使用方式相同）

```html
<m-checkbox label='Label'> </m-checkbox>

<m-checkbox checked label='checked'> </m-checkbox>

<m-checkbox indeterminate label='indeterminate'> </m-checkbox>

<m-checkbox disabled label='disabled'> </m-checkbox>
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| label | string | -- | 复选框右侧内容 |
| disabled | boolean | -- | 使复选框失效 |
| indeterminate | boolean | -- | 有中立选项 |
| checked | boolean | -- | 初始状态为选中 |
| value | string | -- | 复选框的值 |
