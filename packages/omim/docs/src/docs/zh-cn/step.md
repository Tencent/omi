## Step

展示工作流中的进度。

## 使用

```html
<m-step 
  items="[
		{ name: 'Finished', description: 'This is a description.', state: 0 },
		{ name: 'In Progress', description: 'This is a description.', state: 2 },
		{ name: 'Waiting', description: 'This is a description.', state: 3 }
  ]" 
  vertical >
</m-step>
```


## API

### Props

```jsx
{
  items: object,
  vertical?: boolean
}
```
