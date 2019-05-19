## Tab

Tabs organize and allow navigation between groups of content that are related and at the same level of hierarchy. The Tab Bar contains the Tab Scroller and Tab components.

## Usage

```html
<m-tab default-active="speed" onChange="change(event)" align="end">
	<item label="Recents" value="a" icon="access_time"></item>
	<item label="Nearby" value="b" icon="near_me"></item>
	<item label="Favorites" value="c" icon="favorite"></item>
</m-tab>
```

## API

### Props

```jsx
{
	defaultActive: string,
	width: string,
	align: 'start' | 'end' | 'center', 
	useMinWidth: boolean,
	stacked: boolean
}
```
