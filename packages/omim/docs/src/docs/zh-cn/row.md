## Row

24 栅格系统。

## 使用

```html
<m-row cols="[8, 8, 8]">
  <div>col-8-0</div>
  <div>col-8-1</div>
  <div>col-8-2</div>
</m-row>
```

## 在 Omi 中使用

JSX:

```jsx
<m-row cols={[8, 8, 8]}>
  <div>col-8-0</div>
  <div>col-8-1</div>
  <div>col-8-2</div>
</m-row>
```

## API

### Props

```jsx
{
	cols: object,
	gutter?: number,
	justify?: string,
	align?: string,
	type?: string
}
```