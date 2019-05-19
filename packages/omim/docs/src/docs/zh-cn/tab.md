## Tab

选项卡组织并允许在相关内容组之间以及在同一层次结构级别上导航。

## 使用

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
