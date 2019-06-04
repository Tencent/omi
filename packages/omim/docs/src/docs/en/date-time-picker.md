## DateTimePicker

Date Time Picker.

## Usage

```html
<m-date-time-picker type="date" past="20180101" future="20200101" lan="en-us" show>
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