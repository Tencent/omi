## Radio

Radio buttons allow the user to select one option from a set while seeing all available options.

## Usage

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