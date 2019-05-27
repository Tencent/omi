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

## Usage in Omi

JSX:

```jsx
<m-select menu={[
  { text: 'Google', value: 0 },
  { text: 'Omi', value: 1 },
  { text: 'Tencent', value: 2 }
]} label="Choose One Item" onChange={(e) => { console.log(e.detail) }}>
</m-select>
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| label | String | -- | select box title text |
| menu | Object | -- | Menu content |
| onChange | function | -- | Select the trigger |
