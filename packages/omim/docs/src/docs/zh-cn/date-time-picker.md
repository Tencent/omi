## DateTimePicker

日期时间选择器。

## 使用

```html
<m-date-time-picker type="date" past="20180101" future="20200101" lan="zh-cn" show>
</m-date-time-picker>
```

## API

### Props

```jsx
{
  show?: boolean,
  type?: 'date' | 'time',
  init?: string,
  past?: string,
  future?: string,
  lan?: string
}
```

### Default Props

```jsx
{
  type: 'date',
  show: false
}
```