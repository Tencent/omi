## Radio

单选按钮允许用户在查看所有可用选项时从一组中选择一个选项。

## 使用

```html
<m-radio id='r1' value="1" label='Label' checked name="abc"> </m-radio>
<m-radio id='r2' value="2" label='Label' name="abc"> </m-radio>
<m-radio checked label='checked'> </m-radio>
<m-radio disabled label='disabled'> </m-radio>
```

## Omi 中使用

JSX:

```jsx
<m-radio onSelected={this.onSelected} value={1} label='Label' checked={!this.checked} name="abc"></m-radio>
<m-radio  onSelected={this.onSelected} value={2} label='Label' checked={this.checked} name="abc"></m-radio>
<m-radio checked label='checked' onclick={()=>{this.update()}}> </m-radio>
<m-radio disabled label='disabled'></m-radio>
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| label | string | -- | 右侧文本内容 |
| disabled | boolean | -- | 禁用单选按钮 |
| checked | boolean | -- | 初始状态为选中 |
| value | string | -- | 单选按钮的值 |
| name | string | -- | 为单选按钮分组 |
| onSelected | function | -- | 选择触发 |
