## Radio

Radio buttons allow the user to select one option from a set while seeing all available options.

## Usage

```html
<m-radio id='r1' value="1" label='Label' checked name="abc"> </m-radio>
<m-radio id='r2' value="2" label='Label' name="abc"> </m-radio>
<m-radio checked label='checked'> </m-radio>
<m-radio disabled label='disabled'> </m-radio>
```

## Used in Omi

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
| label | string | -- | Right hand side text content |
| disabled | boolean | -- | Disable radio buttons |
| checked | boolean | -- | Initial state is checked |
| value | string | -- | The value of the radio button |
| name | string | -- | Radio button sectionalization |
| onSelected | function | -- | Select the trigger |
