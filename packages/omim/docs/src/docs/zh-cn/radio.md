## Radio

单选按钮允许用户在查看所有可用选项时从一组中选择一个选项。

## 使用

```jsx
<m-radio id='r1' value="1" label='Label' checked name="abc"> </m-radio>

<m-radio id='r2' value="2" label='Label' name="abc"> </m-radio>

<m-radio checked label='checked'> </m-radio>

<m-radio disabled label='disabled'> </m-radio>
```

## API

### Props

```jsx
{
  label?: string,
  disabled?: boolean,
  checked?: boolean,
  value: string,
  name?: string
}
```