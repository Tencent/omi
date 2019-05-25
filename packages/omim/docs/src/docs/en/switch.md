## Switch

Switch toggle the state of a single setting on or off. They are the preferred way to adjust settings on mobile.

## Usage

```html
<m-switch id='m-switch-d' label='LabelD' value='omim D' checked disabled></m-switch>

<m-switch id='m-switch-disabled-d' label='LabelD-Disabled' value='omim D-Disabled' checked></m-switch>
```

## Used in Omi

JSX:

```jsx
<m-switch label='LabelD' value='omim D' checked={this.checkedD} disabled={this.disabledD} onChange={this.onChangeD}></m-switch>

<m-switch label='LabelD-Disabled' value='omim D-Disabled' checked={this.checkedDisabledD} onChange={this.onChangeDisabledD}></m-switch>
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| label | string | -- | Right hand side text content |
| disabled | boolean / string | -- | Whether to disable |
| checked | boolean / string | -- | Whether the initial state is selected |
| value | string | -- | value |
