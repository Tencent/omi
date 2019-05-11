## Select

Select provides Material Design single-option select menus. It is fully accessible, and fully RTL-aware.

## Usage

```jsx
<m-select menu="[
  { text: 'Google', value: 0 },
  { text: 'Omi', value: 1 },
  { text: 'Tencent', value: 2 }
]" label="Choose One Item" onchange="changeB(event)" >
</m-select>
```

## API

### Props

```jsx
{
  label: String,
  menu: Object
}
```