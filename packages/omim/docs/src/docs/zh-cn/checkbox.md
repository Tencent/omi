## Checkbox

复选框允许用户从一组中选择一个或多个项目。

## 使用

```jsx
<m-checkbox label='Label'> </m-checkbox>

<m-checkbox checked label='checked'> </m-checkbox>

<m-checkbox indeterminate label='indeterminate'> </m-checkbox>

<m-checkbox disabled label='disabled'> </m-checkbox>
```

## API

### Props

```jsx
{
  label?: string,
  disabled?: boolean,
  indeterminate?: boolean,
  checked?: boolean,
  value: string
}
```