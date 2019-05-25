## Switch

切换打开或关闭单个设置的状态。 它们是调整移动设置的首选方式。

## 使用

```html
<m-switch id='m-switch-d' label='LabelD' value='omim D' checked disabled></m-switch>

<m-switch id='m-switch-disabled-d' label='LabelD-Disabled' value='omim D-Disabled' checked></m-switch>
```

## Omi 中使用

JSX:

```jsx
<m-switch label='LabelD' value='omim D' checked={this.checkedD} disabled={this.disabledD} onChange={this.onChangeD}></m-switch>

<m-switch label='LabelD-Disabled' value='omim D-Disabled' checked={this.checkedDisabledD} onChange={this.onChangeDisabledD}></m-switch>
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| label | string | -- | 右侧文本内容 |
| disabled | boolean / string | -- | 是否禁用 |
| checked | boolean / string | -- | 初始状态是否选中 |
| value | string | -- | 值 |
